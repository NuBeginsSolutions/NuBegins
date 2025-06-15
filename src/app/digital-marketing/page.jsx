import ServiceBanner from '../../../components/ServiceBanner';
import ServicePricing from '../../../components/ServicePricing';
import Testimonials from '../../../components/Testimonial';
import { TrendingUp, BarChart2, Search, Mail, Users, Target, Share2, Instagram } from 'lucide-react';
export const metadata = {
  title: "Digital Marketing Services | Boost Your Online Presence",
  description:
    "Elevate your brand with our expert digital marketing services. From SEO to social media management, we help you grow online and reach your target audience effectively.",
  keywords: [
    "digital marketing services",
    "SEO experts",
    "social media marketing",
    "content marketing",
    "PPC advertising",
    "email marketing",
    "online brand management",
    "search engine marketing",
    "startup digital marketing",
    "e-commerce marketing"
  ],
  openGraph: {
    title: "Digital Marketing Services | Nu Begins",
    description:
      "Elevate your brand with our expert digital marketing services. From SEO to social media management, we help you grow online and reach your target audience effectively.",
    url: "https://nubegins.in/digital-marketing",
    images: [
      {
        url: "https://nubegins.in/apple-touch-icon.png", // Add your page-specific image here
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nubegins.in/digital-marketing",
  },
  content: {
    heroTitle: "Transform Your Business with Digital Marketing",
    heroSubtitle: "Reach the right audience, increase visibility, and drive sales.",
    services: [
      {
        title: "SEO Optimization",
        description:
          "Enhance your website's ranking and attract organic traffic with our advanced SEO strategies.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Build your online presence and engage with your audience across social media platforms.",
      },
      {
        title: "Pay-Per-Click Advertising",
        description:
          "Get immediate visibility and leads through targeted PPC campaigns.",
      },
      {
        title: "Content Marketing",
        description:
          "Engage your audience with compelling content that builds trust and drives conversions.",
      },
      {
        title: "Email Marketing",
        description:
          "Reach your customers directly with personalized email campaigns designed to convert.",
      },
    ],
    callToAction: "Start Your Digital Marketing Journey Today!",
  },
};


const page = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "299",
      description: "Essential digital marketing for small businesses",
      features: [
        { text: "Social Media Management (2 platforms)", included: true },
        { text: "SEO Optimization", included: true },
        { text: "Monthly Performance Report", included: true },
        { text: "Content Creation (5 posts/month)", included: true },
        { text: "Email Marketing", included: false },
        { text: "PPC Advertising", included: false },
        { text: "Conversion Rate Optimization", included: false },
        { text: "Dedicated Marketing Manager", included: false }
      ],
      buttonText: "Choose Starter"
    },
    {
      name: "Growth",
      price: "499",
      description: "Comprehensive strategy for growing businesses",
      features: [
        { text: "Social Media Management (4 platforms)", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Bi-weekly Performance Reports", included: true },
        { text: "Content Creation (15 posts/month)", included: true },
        { text: "Email Marketing Campaigns", included: true },
        { text: "PPC Advertising ($500 budget)", included: true },
        { text: "Conversion Rate Optimization", included: false },
        { text: "Dedicated Marketing Manager", included: true }
      ],
      popular: true,
      buttonText: "Choose Growth"
    },
    {
      name: "Enterprise",
      price: "799",
      description: "Full-scale marketing for established businesses",
      features: [
        { text: "Social Media Management (All platforms)", included: true },
        { text: "Advanced SEO & Content Strategy", included: true },
        { text: "Weekly Performance Reports", included: true },
        { text: "Content Creation (30 posts/month)", included: true },
        { text: "Email Marketing Automation", included: true },
        { text: "PPC Advertising ($1000 budget)", included: true },
        { text: "Conversion Rate Optimization", included: true },
        { text: "Dedicated Marketing Team", included: true }
      ],
      buttonText: "Choose Enterprise"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Andrew Parker",
      role: "Marketing Director",
      company: "RetailPlus",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "StellarServices transformed our digital marketing strategy completely. Their data-driven approach has increased our online leads by 137% and reduced our cost per acquisition by over 40%."
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "CEO",
      company: "Wellness Hub",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "Working with StellarServices has been game-changing for our business. Their comprehensive social media strategy has helped us build a community around our brand and significantly increased customer engagement."
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "E-commerce Manager",
      company: "Urban Threads",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&auto=format&fit=crop",
      stars: 4,
      text: "The SEO and content marketing strategies implemented by StellarServices have dramatically improved our organic traffic and conversion rates. Their team consistently delivers results that exceed our expectations."
    }
  ];

  return (
    <>
      <ServiceBanner 
        title="Digital Marketing Services"
        subtitle="Data-driven strategies that increase visibility, engage customers, and drive conversions."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
      />
      
      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
        <div className="text-center section-header">
            <h2 className="section-title">Strategic Digital Marketing Solutions</h2>
            <p className="section-description">
              We deliver results-focused digital marketing services that help you reach your target audience, build brand awareness, and drive business growth.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-container">
                <Search className="icon" size={28} />
              </div>
              <h3 className="service-title">Search Engine Optimization</h3>
              <p className="service-description">
                We improve your website's visibility in search engine results through technical optimization, content strategy, and authoritative link building.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Share2 className="icon" size={28} />
              </div>
              <h3 className="service-title">Social Media Marketing</h3>
              <p className="service-description">
                We build and manage your social media presence to increase brand awareness, engage with your audience, and drive website traffic.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Target className="icon" size={28} />
              </div>
              <h3 className="service-title">PPC Advertising</h3>
              <p className="service-description">
                We create and manage targeted pay-per-click campaigns that put your brand in front of potential customers at the right moment.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Mail className="icon" size={28} />
              </div>
              <h3 className="service-title">Email Marketing</h3>
              <p className="service-description">
                We develop personalized email campaigns that nurture leads, build customer loyalty, and drive repeat purchases.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <BarChart2 className="icon" size={28} />
              </div>
              <h3 className="service-title">Analytics & Reporting</h3>
              <p className="service-description">
                We track and analyze your marketing performance to provide actionable insights and continuously optimize your campaigns.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Users className="icon" size={28} />
              </div>
              <h3 className="service-title">Content Marketing</h3>
              <p className="service-description">
                We create valuable, relevant content that attracts and engages your target audience while establishing your brand authority.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Real Results That Drive Growth</h2>
            <p className="section-description">
              Our data-driven approach delivers measurable outcomes that matter to your business.
            </p>
          </div>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="icon-container">
                <TrendingUp className="icon" size={32} />
              </div>
              <h3 className="result-value">147%</h3>
              <p className="result-description">Average Increase in Organic Traffic</p>
            </div>
            
            <div className="result-card">
              <div className="icon-container">
                <Target className="icon" size={32} />
              </div>
              <h3 className="result-value">83%</h3>
              <p className="result-description">Average Increase in Conversion Rate</p>
            </div>
            
            <div className="result-card">
              <div className="icon-container">
                <Users className="icon" size={32} />
              </div>
              <h3 className="result-value">213%</h3>
              <p className="result-description">Average Growth in Social Media Engagement</p>
            </div>
            
            <div className="result-card">
              <div className="icon-container">
                <BarChart2 className="icon" size={32} />
              </div>
              <h3 className="result-value">42%</h3>
              <p className="result-description">Average Reduction in Cost per Acquisition</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="approach-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Our Marketing Approach</h2>
            <p className="section-description">
              We follow a strategic, data-driven methodology to deliver marketing campaigns that achieve your business objectives.
            </p>
          </div>
          
          <div className="approach-grid">
            <div className="approach-description">
              <div className="approach-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Research & Strategy</h3>
                  <p className="step-text">
                    We start by understanding your business, competitors, and target audience to develop a customized strategy aligned with your goals.
                  </p>
                </div>
              </div>
              
              <div className="approach-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Campaign Creation</h3>
                  <p className="step-text">
                    We craft compelling messages, design creative assets, and set up targeted campaigns across the most effective channels for your audience.
                  </p>
                </div>
              </div>
              
              <div className="approach-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Implementation & Optimization</h3>
                  <p className="step-text">
                    We launch your campaigns and continuously monitor performance to make data-driven adjustments that maximize results.
                  </p>
                </div>
              </div>
              
              <div className="approach-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Analysis & Reporting</h3>
                  <p className="step-text">
                    We provide comprehensive reports that demonstrate campaign performance, ROI, and actionable insights for future strategy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="approach-image">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop" 
                alt="Digital Marketing Approach" 
                className="approach-img"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="case-study-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Featured Case Study</h2>
            <p className="section-description">
              See how we transformed an e-commerce brand's digital presence and increased their revenue.
            </p>
          </div>
          
          <div className="case-study-grid">
            <div className="case-study-image">
              <img 
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=700&auto=format&fit=crop" 
                alt="E-commerce Marketing Case Study" 
                className="case-study-img"
              />
            </div>
            
            <div className="case-study-description">
              <h3 className="case-study-title">ActiveLife Sports: Multi-Channel Marketing Strategy</h3>
              <p className="case-study-text">
                ActiveLife Sports, an e-commerce retailer specializing in fitness equipment, came to us with a challenge: they were struggling to stand out in a competitive market and their customer acquisition costs were too high.
              </p>
              
              <div className="case-study-details">
                <div className="case-study-detail">
                  <h4 className="detail-title">The Challenge</h4>
                  <ul className="detail-list">
                    <li>High customer acquisition costs</li>
                    <li>Low conversion rates (1.2%)</li>
                    <li>Minimal social media presence</li>
                    <li>Poor organic search visibility</li>
                  </ul>
                </div>
                
                <div className="case-study-detail">
                  <h4 className="detail-title">Our Strategy</h4>
                  <ul className="detail-list">
                    <li>Comprehensive SEO audit and optimization</li>
                    <li>Content marketing focused on fitness education</li>
                    <li>Targeted PPC campaigns with improved tracking</li>
                    <li>Social media strategy featuring user-generated content</li>
                    <li>Email marketing automation for abandoned carts</li>
                  </ul>
                </div>
                
                <div className="case-study-detail">
                  <h4 className="detail-title">The Results</h4>
                  <ul className="detail-list">
                    <li>162% increase in organic traffic</li>
                    <li>Conversion rate improved to 3.8%</li>
                    <li>Customer acquisition cost reduced by 48%</li>
                    <li>Social media following grew by 215%</li>
                    <li>Overall revenue increased by 87%</li>
                  </ul>
                </div>
              </div>
              
              <a 
                href="#" 
                className="case-study-button"
              >
                Read Full Case Study
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Marketing Channels */}
      <section className="channels-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Digital Channels We Optimize</h2>
            <p className="section-description">
              We leverage the right mix of digital channels to reach your target audience and achieve your marketing objectives.
            </p>
          </div>
          
          <div className="channels-grid">
            <div className="channel-card">
              <Search className="channel-icon" size={32} />
              <h3 className="channel-title">Google</h3>
            </div>
            
            <div className="channel-card">
              <svg className="channel-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <h3 className="channel-title">Facebook</h3>
            </div>
            
            <div className="channel-card">
              <Instagram className="channel-icon" size={32} />
              <h3 className="channel-title">Instagram</h3>
            </div>
            
            <div className="channel-card">
              <svg className="channel-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0                 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <h3 className="channel-title">Twitter</h3>
            </div>
            
            <div className="channel-card">
              <svg className="channel-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <h3 className="channel-title">LinkedIn</h3>
            </div>
            
            <div className="channel-card">
              <Mail className="channel-icon" size={32} />
              <h3 className="channel-title">Email</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <ServicePricing 
        title="Digital Marketing Packages"
        subtitle="Choose the perfect marketing strategy to grow your business online"
        plans={pricingPlans}
      />
      
      {/* Testimonials */}
      <Testimonials 
        title="Client Success Stories"
        subtitle="See how our digital marketing strategies have transformed businesses"
        testimonials={testimonials}
      />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Grow Your Business Online?</h2>
            <p className="cta-subtitle">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <a 
              href="/contact" 
              className="cta-button"
            >
              Get Your Free Marketing Analysis
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;