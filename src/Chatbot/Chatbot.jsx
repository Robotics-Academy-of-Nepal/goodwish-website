import { useState, useRef, useEffect } from 'react';
import { IoMdSend } from "react-icons/io";
import { BsChatDots, BsImage } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import './Chatbot.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fullResponseText, setFullResponseText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(30); // ms per character
  const [showImageCloseHint, setShowImageCloseHint] = useState(false);
  
  const messageEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);
  
  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, typingText]);

  // Handle textarea auto-resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Typing animation effect
  useEffect(() => {
    if (isTyping && fullResponseText) {
      if (typingText.length < fullResponseText.length) {
        const timeout = setTimeout(() => {
          setTypingText(fullResponseText.substring(0, typingText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Typing finished
        setIsTyping(false);
        setMessages(prev => {
          const updatedMessages = [...prev];
          // Replace the loading message with the full typed response
          updatedMessages.pop();
          updatedMessages.push({ role: 'assistant', content: fullResponseText });
          return updatedMessages;
        });
        setTypingText('');
        setFullResponseText('');
      }
    }
  }, [isTyping, typingText, fullResponseText, typingSpeed]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if ((!input.trim() && !imageFile) || loading) return;

    const userMessage = input.trim();
    const hadImage = !!imageFile;
    
    // Store image in a temporary variable before clearing
    let tempImageFile = null;
    if (imageFile) {
      tempImageFile = imageFile;
    }
    
    // Clear input and image IMMEDIATELY - before API call
    setInput('');
    clearImage(); // Clear image immediately when send button is pressed
    
    setLoading(true);
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage, hasImage: hadImage }]);
    
    const formData = new FormData();
    if (userMessage) {
      formData.append('query', userMessage);
    }
    if (tempImageFile) {
      formData.append('image', tempImageFile);
    }
    
    try {
      const response = await api.post('/api/query-chatbot/', formData);
      
      // Start typing animation
      setFullResponseText(response.data.response);
      setTypingText('');
      setIsTyping(true);
      
      // Add a temporary loading message that will be replaced with the typed response
      setMessages(prev => [...prev, { role: 'assistant', content: '', isTyping: true }]);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'error', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setLoading(false);
      // No need to clear image here anymore since we did it at the beginning
    }
  };

  const clearHistory = async () => {
    try {
      await api.post('/api/clear-history/');
      setMessages([]);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Chatbot toggle button */}
      <button 
        className="chatbot-toggle" 
        onClick={toggleChatbot}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <IoClose /> : <BsChatDots />}
      </button>
      
      {/* Chatbot dialog box */}
      <div className={`chatbot-dialog ${isOpen ? 'visible' : ''}`}>
        <div className="chatbot-header">
          <h3>Goodwish Assistant</h3>
          <button onClick={clearHistory} className="clear-history-btn">Clear Chat</button>
        </div>
        
        <div className="chatbot-messages">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <p>👋 Hello! How can I help you today?</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">
                  {index === messages.length - 1 && msg.role === 'assistant' && isTyping ? 
                    typingText : msg.content}
                  {index === messages.length - 1 && msg.role === 'assistant' && isTyping && 
                    <span className="cursor-blink">|</span>}
                </div>
                {msg.hasImage && <div className="image-indicator">📷 Image uploaded</div>}
              </div>
            ))
          )}
          {loading && !isTyping && (
            <div className="message assistant loading">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messageEndRef} />
        </div>
        
        {imagePreview && (
          <div 
            className="image-preview-container"
            onMouseEnter={() => setShowImageCloseHint(true)}
            onMouseLeave={() => setShowImageCloseHint(false)}
          >
            <img src={imagePreview} alt="Upload preview" className="image-preview" />
            <button 
              className={`remove-image-btn ${showImageCloseHint ? 'visible' : ''}`} 
              onClick={clearImage}
            >
              <IoClose />
            </button>
          </div>
        )}
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={loading}
              rows="1"
              className="chat-textarea"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="action-buttons">
              <button 
                type="button" 
                className="upload-button"
                onClick={handleImageUpload}
                disabled={loading}
              >
                <BsImage />
              </button>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="file-input"
              />
              
              <button 
                type="submit" 
                className="send-button"
                disabled={(!input.trim() && !imageFile) || loading}
              >
                <IoMdSend />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;