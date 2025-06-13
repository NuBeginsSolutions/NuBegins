"use client"

import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Card } from "./ui/Card";
import { Github, Linkedin, Twitter, Mail, Code, Paintbrush, TrendingUp } from 'lucide-react';

// The TeamMember interface has been removed as JavaScript does not have interfaces

const Team = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'dev':
        return <Code size={16} className="kudevs-blue" />;
      case 'design':
        return <Paintbrush size={16} className="kudevs-purple" />;
      case 'marketing':
        return <TrendingUp size={16} className="kudevs-teal" />;
    }
  };
  

  
  const team = [
    {
      id: "member1",
      color:"blue",
      name: "Keshvendra",
      role: "Founder & Lead Developer",
      category: "dev",
      bio: "B.Tech holder in Computer Science with expertise in MERN stack development. Passionate about creating scalable web applications and mentoring aspiring developers.",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      skills: ["React.js", "Next.js", "Node.js", "MongoDB", "JavaScript", "Python"],
      social: {
        linkedin: "https://www.linkedin.com/in/nubegins-457b84359/",
        github: "https://github.com/username",
        twitter: "https://twitter.com/username",
        email: "nubeginssolutions@gmail.com"
      }
    },
     {
      id: "member2",
      color:"teal",
      name: "Lakshmi",
      role: "Director & Digital Marketing Strategist",
      category: "marketing",
      bio: "Digital marketing specialist with expertise in SEO, social media marketing, and content strategy. Passionate about data-driven marketing and growth hacking.",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
      skills: ["SEO", "Social Media Marketing", "Content Strategy", "Google Analytics", "PPC", "Email Marketing"],
      social: {
        linkedin: "https://www.linkedin.com/in/nubegins-457b84359/",
        twitter: "https://twitter.com/username",
        email: "nubeginssolutions@gmail.com"
      }
    },
    {
      id: "member3",
      color:"purple",
      name: "Brajendra",
      role: "CEO",
      category: "design",
      bio: "Web designer with 1+ years of experience in brand identity, Responsive design, and visual storytelling. Passionate about creating memorable brand experiences.",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png",
      skills: ["React.js", "Next.js", "Node.js", "MongoDB", "JavaScript", "Python"],
      social: {
        linkedin: "https://www.linkedin.com/in/nubegins-457b84359/",
        twitter: "https://twitter.com/username",
        email: "nubeginssolutions@gmail.com"
      }
    },
   
  ];

  return (
    <div id="team" ref={sectionRef} className="team-section">
      <div className="container">
        <div className="section-title">
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Team</p>
          <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Meet the <span className="gradient-text">Talent</span> Behind NuBegins
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Our diverse team of passionate professionals combines technical expertise with creative excellence to deliver exceptional results.
          </p>
        </div>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <Card 
              key={member.id}
              className={`team-card bg-kudevs-${member.color} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className={`card-content`}>
                <Avatar className="avatar">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="category-badge1">
                  {getCategoryIcon(member.category)}
                  <span>{member.role}</span>
                </div>
                
                <h3 className="member-name">{member.name}</h3>
                <p className="member-bio">{member.bio}</p>
                
                <div className="skills-container">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
                
                <div className="social-links">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Github size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="social-icon">
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;