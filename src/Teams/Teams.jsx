import React from 'react';
import './Teams.css';
import teamMember1 from '../assets/teams/ceo.png';
import teamMember2 from '../assets/teams/Tejash.jpg';
import teamMember3 from '../assets/teams/nibesh.jpg';
import teamMember4 from '../assets/teams/poem.jpg';
import teamMember5 from '../assets/teams/Nikesh.jpeg';
import teamMember6 from '../assets/teams/bikesh.png';
import teamMember7 from '../assets/teams/aakriti.jpg';
import teamMember8 from '../assets/teams/Prajwal.jpg';
import teamMember9 from '../assets/teams/Abhisekh.jpg';
import teamMember10 from '../assets/teams/sapana.jpg';
import teamMember11 from '../assets/teams/abiral.jpg';
import teamMember12 from '../assets/teams/kiran.jpg';
import teamMember13 from '../assets/teams/apil.jpeg';
import { FaLinkedin } from 'react-icons/fa';

function Teams() {
  const teamMembers = [
    {
      name: 'Bikrant Karki',
      position: 'CEO & Founder',
      image: teamMember1,
      linkedin: 'https://www.linkedin.com/in/bikrantkarki/',
      team: 'Leadership',
    },
    {
      name: 'Abiral Bhandari',
      position: 'Chief Operating Officer (COO)',
      role: 'Robotics Engineer (Designing and Assembly)',
      image: teamMember11,
      linkedin: 'https://www.linkedin.com/in/abiral-bhandari-b9a454199/',
      team: 'Leadership',
    },
    {
      name: 'Tejash Raj Katuwal',
      position: 'Chief Technical Officer (CTO)',
      role: 'AI/ML Engineer',
      image: teamMember2,
      linkedin: 'https://www.linkedin.com/in/tejash-katuwal-784b27244/',
      team: 'Leadership',
    },
    {
      name: 'Sapana Chaudhary',
      role: 'Finance Officer',
      image: teamMember10,
      linkedin: '',
      team: 'Leadership',
    },
    {
      name: 'Nibesh Suwal',
      position: 'Head of Software Department',
      role: 'Sr. Backend Developer',
      image: teamMember3,
      linkedin: '',
      team: 'Software',
    },
    {
      name: 'Poem Maharjan',
      role: 'Jr. AI/Backend Developer',
      image: teamMember4,
      linkedin: 'https://www.linkedin.com/in/poem-maharjan-b64045265/',
      team: 'Software',
    },
    {
      name: 'Nikesh Khatri',
      role: 'Jr. Backend Developer',
      image: teamMember5,
      linkedin: 'https://www.linkedin.com/in/nikesh-khatri-2b04582a9/',
      team: 'Software',
    },
    {
      name: 'Bikesh Maharjan',
      role: 'Jr. Backend Developer',
      image: teamMember6,
      linkedin: 'https://www.linkedin.com/in/bikesh-maharjan-970a921a5/',
      team: 'Software',
    },
    {
      name: 'Aakriti Rai',
      role: 'Jr. Backend Developer',
      image: teamMember7,
      linkedin: '',
      team: 'Software',
    },
    {
      name: 'Prajwal Karki',
      role: 'Flutter Developer',
      image: teamMember8,
      linkedin: 'https://www.linkedin.com/in/prajwal-karki-94821324b/',
      team: 'Software',
    },
    {
      name: 'Abhisekh Tuladhar',
      role: 'Jr. AI/ML Developer',
      image: teamMember9,
      linkedin: '',
      team: 'Software',
    },
    {
      name: 'Kiran KC',
      position: 'Head of Robotics Department',
      role: 'Robotics Engineer (Assembly)',
      image: teamMember12,
      linkedin: '',
      team: 'Robotics',
    },
    {
      name: 'Apil Sharma',
      role: 'Jr. Robotics Engineer (Programming)',
      image: teamMember13,
      linkedin: '',
      team: 'Robotics',
    },
  ];

  // Explicitly define top four members in the specified order
  const topMembers = [
    teamMembers.find((member) => member.name === 'Bikrant Karki'),
    teamMembers.find((member) => member.name === 'Abiral Bhandari'),
    teamMembers.find((member) => member.name === 'Tejash Raj Katuwal'),
    teamMembers.find((member) => member.name === 'Sapana Chaudhary'),
  ];

  // Filter members for Software and Robotics teams
  const softwareTeam = teamMembers.filter((member) => member.team === 'Software');
  const roboticsTeam = teamMembers.filter((member) => member.team === 'Robotics');

  return (
    <div className="teams-container">
      <div className="teams-header">
        <h1>Meet Our Team</h1>
        <p>Our talented team at Goodwish Engineering drives innovation and excellence in every project.</p>
      </div>

      {/* Top Four Members */}
      <div className="team-grid">
        {topMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
              <img src={member.image} alt={`${member.name} portrait`} />
              {member.linkedin && (
                <div className="team-overlay">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                </div>
              )}
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              {member.position ? (
                <>
                  <h3>{member.position}</h3>
                  {member.role && <h4>{member.role}</h4>}
                </>
              ) : (
                <h3>{member.role}</h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Software Team Section */}
      <div className="teams-header">
        <h1>Software Team</h1>
        <p>Our software experts build cutting-edge solutions for a digital world.</p>
      </div>
      <div className="team-grid">
        {softwareTeam.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
              <img src={member.image} alt={`${member.name} portrait`} />
              {member.linkedin && (
                <div className="team-overlay">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                </div>
              )}
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              {member.position ? (
                <>
                  <h3>{member.position}</h3>
                  {member.role && <h4>{member.role}</h4>}
                </>
              ) : (
                <h3>{member.role}</h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Robotics Team Section */}
      <div className="teams-header">
        <h1>Robotics Team</h1>
        <p>Our robotics specialists design and innovate advanced robotic solutions.</p>
      </div>
      <div className="team-grid">
        {roboticsTeam.length > 0 ? (
          roboticsTeam.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img src={member.image} alt={`${member.name} portrait`} />
                {member.linkedin && (
                  <div className="team-overlay">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <FaLinkedin />
                    </a>
                  </div>
                )}
              </div>
              <div className="team-info">
                <h2>{member.name}</h2>
                {member.position ? (
                  <>
                    <h3>{member.position}</h3>
                    {member.role && <h4>{member.role}</h4>}
                  </>
                ) : (
                  <h3>{member.role}</h3>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No robotics team members currently listed.</p>
        )}
      </div>
    </div>
  );
}

export default Teams;