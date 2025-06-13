"use client"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServiceBanner = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = "Get Started", 
  ctaLink="/contact",
}) => {
  return (
    <section 
      className="service-banner" 
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${backgroundImage})`
      }}
    >
      <div className="container">
        <div className="content">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-subtitle">{subtitle}</p>
          <Link href={ctaLink} className="cta-button">
            {ctaText} <ArrowRight size={18} className="arrow-icon" />
          </Link>
        </div>
      </div>
      <div className="gradient-overlay"></div>
    </section>
  );
};

export default ServiceBanner;
