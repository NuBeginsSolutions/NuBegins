import ServiceBanner from '../../../components/ServiceBanner';
import ServicePricing from '../../../components/ServicePricing';
import Testimonials from '../../../components/Testimonial';
import { Palette, PenTool, Image, Layout, Layers, Type, FileImage, Figma } from 'lucide-react';
export const metadata = {
  title: "Graphic Design Services | Stand Out with Stunning Visuals",
  description:
    "Professional graphic design services to create logos, branding materials, and marketing assets that leave a lasting impression. Transform your ideas into visuals.",
  keywords: [
    "graphic design services",
    "logo design",
    "branding design",
    "business cards",
    "flyer design",
    "brochure design",
    "social media graphics",
    "custom illustrations",
    "startup branding solutions"
  ],
  openGraph: {
    title: "Graphic Design Services | Nu Begins",
    description:
      "Professional graphic design services to create logos, branding materials, and marketing assets that leave a lasting impression. Transform your ideas into visuals.",
    url: "https://nubegins.in/graphic-design",
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
    canonical: "https://nubegins.in/graphic-design",
  },
  content: {
    heroTitle: "Creative Graphic Design Services",
    heroSubtitle: "Visuals that speak volumes for your brand.",
    services: [
      {
        title: "Logo Design",
        description:
          "Unique and memorable logos that reflect your brand's identity.",
      },
      {
        title: "Branding Design",
        description:
          "Complete branding packages, including color palettes, typography, and brand guidelines.",
      },
      {
        title: "Marketing Materials",
        description:
          "Eye-catching brochures, flyers, and banners that captivate your audience.",
      },
      {
        title: "Social Media Graphics",
        description:
          "Custom-designed graphics tailored for your social media campaigns.",
      },
      {
        title: "Custom Illustrations",
        description:
          "Bespoke illustrations that add a personal touch to your brand's story.",
      },
    ],
    callToAction: "Let’s Create Something Amazing Together!",
  },
};


const page = () => {
  const pricingPlans = [
    {
      name: "Basic Design",
      price: "399",
      description: "Essential design solutions for startups and small businesses",
      features: [
        { text: "Logo Design", included: true },
        { text: "Business Card Design", included: true },
        { text: "Social Media Graphics (3)", included: true },
        { text: "Brand Guidelines", included: false },
        { text: "Packaging Design", included: false },
        { text: "Unlimited Revisions", included: false },
        { text: "Print-Ready Files", included: true },
        { text: "Source Files", included: false }
      ],
      buttonText: "Choose Basic"
    },
    {
      name: "Brand Identity",
      price: "599",
      description: "Complete branding solutions for established businesses",
      features: [
        { text: "Logo Design", included: true },
        { text: "Business Card & Stationery", included: true },
        { text: "Social Media Graphics (10)", included: true },
        { text: "Brand Guidelines", included: true },
        { text: "Packaging Design", included: true },
        { text: "Up to 5 Revisions", included: true },
        { text: "Print-Ready Files", included: true },
        { text: "Source Files", included: true }
      ],
      popular: true,
      buttonText: "Choose Brand Identity"
    },
    {
      name: "Enterprise Design",
      price: "799",
      description: "Comprehensive design services for large organizations",
      features: [
        { text: "Logo Design", included: true },
        { text: "Complete Stationery Design", included: true },
        { text: "Social Media Graphics (20)", included: true },
        { text: "Detailed Brand Guidelines", included: true },
        { text: "Packaging & Product Design", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Print-Ready Files", included: true },
        { text: "Source Files & Usage Rights", included: true }
      ],
      buttonText: "Choose Enterprise"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "David Williams",
      role: "Founder",
      company: "Organic Blends",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "StellarServices transformed our brand identity completely. Our new logo and packaging design has helped us stand out on shelves and increase sales by 35% in just three months!"
    },
    {
      id: 2,
      name: "Jessica Lee",
      role: "Marketing Manager",
      company: "FitLife",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=150&auto=format&fit=crop",
      stars: 5,
      text: "The creativity and attention to detail from the design team was exceptional. They truly understood our vision and created a visual identity that resonates with our audience."
    },
    {
      id: 3,
      name: "Robert Garcia",
      role: "CEO",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      stars: 4,
      text: "We needed a complete rebrand that would reflect our innovative technology, and StellarServices delivered beyond our expectations. Their designs are clean, modern, and perfectly aligned with our company values."
    }
  ];

  return (
    <>
      <ServiceBanner 
        title="Graphic Design Services"
        subtitle="Creating captivating visual identities that make your brand unforgettable."
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1920&auto=format&fit=crop"
      />
      
      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="text-center section-header">
            <h2>Design Services That Elevate Your Brand</h2>
            <p>
              We craft stunning visual assets that communicate your brand's unique story, capture attention, and create memorable impressions.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-container">
                <PenTool className="icon" size={28} />
              </div>
              <h3>Logo & Brand Identity</h3>
              <p>
                We create distinctive logos and comprehensive brand identities that communicate your values and resonate with your target audience.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-container">
                <Layout className="icon" size={28} />
              </div>
              <h3>Print Design</h3>
              <p>
                From business cards to brochures, we design print materials that effectively communicate your message and leave a lasting impression.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-container">
                <FileImage className="icon" size={28} />
              </div>
              <h3>Digital Graphics</h3>
              <p>
                We create eye-catching graphics for websites, social media, digital ads, and other online platforms to enhance your digital presence.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-container">
                <Layers className="icon" size={28} />
              </div>
              <h3>Packaging Design</h3>
              <p>
                We design packaging that stands out on shelves, protects your product, and communicates your brand's story and values.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-container">
                <Type className="icon" size={28} />
              </div>
              <h3>Typography & Lettering</h3>
              <p>
                We craft custom typography and lettering that gives your brand a unique voice and enhances your visual communication.
              </p>
            </div>
            <div className="service-card">
              <div className="icon-container">
                <Image className="icon" size={28} />
              </div>
              <h3>Illustration & Iconography</h3>
              <p>
                We create custom illustrations and icon sets that simplify complex ideas and add a unique character to your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Creative Process */}
      <section className="creative-process">
        <div className="container">
          <div className="text-center section-header">
            <h2>Our Creative Process</h2>
            <p>
              We follow a structured yet flexible approach to deliver designs that meet your objectives and exceed your expectations.
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3>Discovery</h3>
              <p>
                We start by understanding your business, brand values, target audience, and design objectives through in-depth discussions.
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3>Concept</h3>
              <p>
                We brainstorm and develop multiple creative concepts that align with your brand and meet your design objectives.
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3>Refinement</h3>
              <p>
                Based on your feedback, we refine the selected concept, fine-tuning every detail to perfection.
              </p>
            </div>
            <div className="process-card">
              <div className="process-number">4</div>
              <h3>Delivery</h3>
              <p>
                We deliver the final designs in all required formats, along with guidelines for consistent implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Showcase */}
      <section className="portfolio-showcase">
        <div className="container">
          <div className="text-center section-header">
            <h2>Design Portfolio</h2>
            <p>
              Browse through our selected works to see the quality and versatility of our graphic design services.
            </p>
          </div>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Brand Identity Design" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Eco Food Packaging</h3>
                <p>Brand Identity, Packaging Design</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Logo Design" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Minimal Logo Collection</h3>
                <p>Logo Design, Brand Identity</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Social Media Graphics" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Fitness Social Campaign</h3>
                <p>Social Media Graphics, Digital Design</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1547351724-2cbb1aa7da0f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Product Packaging" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Luxury Cosmetics Line</h3>
                <p>Packaging Design, Product Design</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Illustration Project" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Children's Book Illustrations</h3>
                <p>Illustration, Character Design</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1586267633144-3e2340b1ec2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Brand Guidelines" 
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3>Tech Startup Brand Book</h3>
                <p>Brand Guidelines, Print Design</p>
                <a href="#" className="portfolio-link">View Project</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="view-portfolio-button"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <div className="text-center section-header">
            <h2>Design Tools We Master</h2>
            <p>
              We leverage the industry's leading tools to create exceptional designs that meet your business objectives.
            </p>
          </div>
          
          <div className="tools-grid">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Procreate', 'After Effects', 'Blender', 'Cinema 4D', 'Affinity Designer', 'Lightroom', 'Dimension'].map((tool, index) => (
              <div 
                key={tool}
                className="tool-card"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <span className="tool-name">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="featured-project">
        <div className="container">
          <div className="text-center section-header">
            <h2>Featured Design Project</h2>
            <p>
              See how we reimagined a brand to increase market presence and customer engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="before-after">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=700&auto=format&fit=crop" 
                  alt="Before Rebranding" 
                  className="rounded-xl shadow-xl w-full"
                />
                <p className="text-center text-gray-500 italic">Before - Outdated brand identity</p>
              </div>
              <div className="space-y-6 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1605446846216-f94044c61889?q=80&w=700&auto=format&fit=crop" 
                  alt="After Rebranding" 
                  className="rounded-xl shadow-xl w-full"
                />
                <p className="text-center text-gray-500 italic">After - Modern, cohesive brand system</p>
              </div>
            </div>
            
            <div className="project-description">
              <h3 className="text-2xl font-bold mb-4">Complete Rebrand for Horizon Coffee</h3>
              <p className="text-gray-600 mb-6">
                Horizon Coffee approached us with an outdated brand identity that failed to communicate their commitment to quality and sustainability. We created a comprehensive rebrand that included a new logo, packaging design, marketing materials, and store elements.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="check-icon">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">52% Increase in Brand Recognition</strong>
                    <span className="text-gray-600">Through a distinctive and memorable visual identity</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="check-icon">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">28% Sales Increase</strong>
                    <span className="text-gray-600">Directly attributed to new packaging design</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="check-icon">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">3 Industry Design Awards</strong>
                    <span className="text-gray-600">Recognizing excellence in branding and packaging design</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                The rebrand positioned Horizon Coffee as a premium, environmentally conscious brand that resonates with modern consumers. The cohesive visual system works across all touchpoints to create a memorable and distinctive brand experience.
              </p>
              
              <a 
                href="#" 
                className="view-case-study-button"
              >
                View Full Case Study
              </a>
            </div>
          </div>
        </div>
        </section>
      
      {/* Pricing */}
      <ServicePricing 
        title="Graphic Design Packages"
        subtitle="Choose the perfect design package to elevate your brand"
        plans={pricingPlans}
      />
      
      {/* Testimonials */}
      <Testimonials 
        title="Client Success Stories"
        subtitle="Hear from businesses that transformed their visual identity with our design services"
        testimonials={testimonials}
      />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
            <p className="cta-subtitle">
              Let's create a visual identity that captures attention and drives business growth.
            </p>
            <a 
              href="/contact" 
              className="cta-button"
            >
              Get Your Free Design Consultation
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default page;