import ServiceBanner from '../../../components/ServiceBanner';
import ServicePricing from '../../../components/ServicePricing';
import Testimonials from '../../../components/Testimonial';
import { Code, Database, Globe, Server, Smartphone, Zap } from 'lucide-react';
export const metadata = {
  title: "Web Development Services | Build Your Dream Website",
  description:
    "Professional web development services to create responsive, high-performance websites tailored to your business needs. Let us bring your vision to life.",
  keywords: [
    "web development services",
    "responsive web design",
    "e-commerce websites",
    "custom web solutions",
    "web application development",
    "startup website development",
    "UI/UX design",
    "full-stack development",
    "frontend and backend"
  ],
  openGraph: {
    title: "Web Development Services | Nu Begins",
    description:
      "Professional web development services to create responsive, high-performance websites tailored to your business needs. Let us bring your vision to life.",
    url: "https://nubegins.in/web-development",
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
    canonical: "https://nubegins.in/web-development",
  },
  content: {
    heroTitle: "Innovative Web Development Solutions",
    heroSubtitle: "Crafting websites that deliver results and enhance user experience.",
    services: [
      {
        title: "Custom Website Development",
        description:
          "Tailor-made websites designed to meet your unique business needs and goals.",
      },
      {
        title: "E-Commerce Development",
        description:
          "Robust and secure online stores with seamless shopping experiences.",
      },
      {
        title: "Responsive Web Design",
        description:
          "Mobile-friendly designs that ensure your website looks great on any device.",
      },
      {
        title: "Web Application Development",
        description:
          "Dynamic web applications that simplify your business processes.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Keep your website updated and secure with our ongoing maintenance services.",
      },
    ],
    callToAction: "Build Your Online Presence with Us!",
  },
};


const page = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "999",
      description: "Perfect for small businesses starting their online journey",
      features: [
        { text: "Responsive Design", included: true },
        { text: "5 Pages", included: true },
        { text: "Contact Form", included: true },
        { text: "CMS Integration", included: false },
        { text: "E-commerce Functionality", included: false },
        { text: "Custom Animations", included: false },
        { text: "SEO Optimization", included: false },
        { text: "Maintenance", included: false }
      ],
      buttonText: "Choose Basic"
    },
    {
      name: "Professional",
      price: "2499",
      description: "Comprehensive solution for growing businesses",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Unlimited Pages", included: true },
        { text: "Advanced Contact Form", included: true },
        { text: "CMS Integration", included: true },
        { text: "E-commerce Functionality", included: true },
        { text: "Custom Animations", included: true },
        { text: "SEO Optimization", included: false },
        { text: "1 Month Maintenance", included: true }
      ],
      popular: true,
      buttonText: "Choose Professional"
    },
    {
      name: "Enterprise",
      price: "4999",
      description: "Full-featured solution for established companies",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Unlimited Pages", included: true },
        { text: "Advanced Forms & Features", included: true },
        { text: "CMS Integration", included: true },
        { text: "E-commerce Functionality", included: true },
        { text: "Custom Animations", included: true },
        { text: "SEO Optimization", included: true },
        { text: "3 Months Maintenance", included: true }
      ],
      buttonText: "Choose Enterprise"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "FashionTrend",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "Working with StellarServices transformed our online presence. Our e-commerce site now loads faster, looks stunning, and has increased our conversion rates by 40%!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "TechFirst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "The team at StellarServices delivered a website that exceeded our expectations. Their attention to detail and technical expertise is unmatched in the industry."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Founder",
      company: "GreenEco",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop",
      stars: 4,
      text: "StellarServices helped us create a website that truly represents our brand values. The custom functionalities they developed have streamlined our operations considerably."
    }
  ];

  return (
    <>
      <ServiceBanner 
        title="Web Development Services"
        subtitle="Building stunning, high-performance websites that drive results for your business."
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1920&auto=format&fit=crop"
      />
      
      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Web Solutions That Empower Your Business</h2>
            <p className="section-description">
              We create custom web experiences that perfectly align with your business goals, ensure technical excellence, and deliver               exceptional user experiences.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-container">
                <Globe className="icon" size={28} />
              </div>
              <h3 className="service-title">Responsive Web Design</h3>
              <p className="service-description">
                We create visually stunning websites that adapt perfectly to all devices, ensuring your site looks and functions flawlessly on desktops, tablets, and smartphones.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Code className="icon" size={28} />
              </div>
              <h3 className="service-title">Custom Web Applications</h3>
              <p className="service-description">
                We develop tailor-made web applications with advanced functionalities that address your specific business challenges and streamline your operations.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Smartphone className="icon" size={28} />
              </div>
              <h3 className="service-title">Mobile-First Development</h3>
              <p className="service-description">
                Our mobile-first approach ensures your website provides an optimal experience on smartphones and tablets, reaching users wherever they are.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Database className="icon" size={28} />
              </div>
              <h3 className="service-title">E-commerce Solutions</h3>
              <p className="service-description">
                We build powerful online stores with secure payment gateways, inventory management, and user-friendly interfaces that convert visitors into customers.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Server className="icon" size={28} />
              </div>
              <h3 className="service-title">CMS Integration</h3>
              <p className="service-description">
                We implement content management systems that make it easy for you to update and manage your website content without any technical knowledge.
              </p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <Zap className="icon" size={28} />
              </div>
              <h3 className="service-title">Performance Optimization</h3>
              <p className="service-description">
                We optimize your website for lightning-fast loading speeds, smooth performance, and efficient resource usage to deliver the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-description">
              We follow a systematic approach to deliver web solutions that meet your business objectives and exceed your expectations.
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <h3 className="step-title">1. Discovery & Planning</h3>
              <p className="step-description">
                We start by understanding your business, goals, target audience, and requirements to create a comprehensive development plan.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">2. Design & Prototyping</h3>
              <p className="step-description">
                We create wireframes and visual designs that align with your brand identity and provide the best user experience for your audience.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">3. Development</h3>
              <p className="step-description">
                Our developers bring the designs to life using the latest technologies and best practices to ensure a high-quality, responsive website.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">4. Testing & Quality Assurance</h3>
              <p className="step-description">
                We thoroughly test your website across different devices and browsers to ensure it works flawlessly and provides a seamless user experience.
              </p>
            </div>
            
            <div className="process-step">
              <h3 className="step-title">5. Launch & Support</h3>
              <p className="step-description">
                We deploy your website to production, provide training on how to use it, and offer ongoing support to ensure your continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="featured-project">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Featured Web Project</h2>
            <p className="section-description">
              See how we transformed an outdated website into a high-converting digital experience.
            </p>
          </div>
          
          <div className="project-grid">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=700&auto=format&fit=crop" 
                alt="Featured Project" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            
            <div className="project-description">
              <h3 className="project-title">E-commerce Transformation for StyleBoutique</h3>
              <p className="project-text">
                StyleBoutique came to us with an outdated online store that was slow, difficult to navigate, and losing customers. We designed and developed a new e-commerce platform that was not only visually stunning but also optimized for conversions.
              </p>
              
              <div className="project-results">
                <div className="result-item">
                  <strong>67% Increase in Conversion Rate</strong>
                  <span>Through strategic UX improvements and streamlined checkout process</span>
                </div>
                
                <div className="result-item">
                  <strong>3x Faster Loading Time</strong>
                  <span>Through performance optimization and efficient code</span>
                </div>
                
                <div className="result-item">
                  <strong>42% Reduction in Bounce Rate</strong>
                  <span>With improved mobile experience and intuitive navigation</span>
                </div>
              </div>
              
              <a 
                href="#" 
                className="project-button"
              >
                View Full Case Study
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="text-center section-header">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-description">
              We leverage the latest and most reliable technologies to build scalable and future-proof web solutions.
            </p>
          </div>
          
          <div className="technologies-grid">
            {['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'Laravel', 'Vue.js', 'PHP', 'MongoDB', 'MySQL', 'AWS', 'Netlify'].map((tech, index) => (
              <div 
                key={tech}
                className="technology-card"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <span className="technology-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <ServicePricing 
        title="Transparent Pricing Packages"
        subtitle="Choose the perfect web development package for your business needs"
        plans={pricingPlans}
      />
      
      {/* Testimonials */}
      <Testimonials 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from businesses we've helped succeed online"
        testimonials={testimonials}
      />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Transform Your Online Presence?</h2>
          <p className="cta-subtitle">
            Let's build a website that drives real results for your business.
          </p>
          <a 
            href="/contact" 
            className="cta-button"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default page;