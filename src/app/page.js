import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
// import Courses from '../../components/Courses';
import Portfolio from '../../components/Portfolio';
import Team from '../../components/Team';
import Testimonials from '../../components/Testimonials';
import ContactSection from '../../components/ContactSection';
export const metadata = {
  title: "Nu Begins | Web Development, SEO & Digital Marketing Experts",
  description:
    "Nu Begins is your go-to solution for web development, SEO, graphic design, and digital marketing. We create high-performance websites, boost search rankings, and drive business growth with AI-powered strategies. Elevate your online presence today!",
  keywords: [
    "web design",
    "ux design",
    "web development",
    "responsive web design",
    "web application",
    "user experience design",
    "web design services",
    "web development services",
    "seo",
    "digital marketing",
    "front end development",
    "back end development",
    "full stack development",
    "web design and development",
    "website creation",
    "web application development",
    "web design course",
    "web development course",
    "ai in web design",
    "ai for web development",
    "website maintenance",
    "web marketing",
    "user experience",
    "web graphic design",
    "website design",
    "web app development",
    "digital solutions",
    "web design and seo",
    "web development agency",
    "frontend development",
    "backend development",
    "web design and branding",
    "web design and marketing",
    "web design best practices",
    "web development best practices",
    "website optimization",
    "web app solutions",
    "web design trends",
    "web design tools",
    "web development tools",
    "e-commerce web design",
    "web design for mobile",
    "web design for developers",
    "web design principles",
    "web design portfolio",
    "graphic design",
    "digital design",
    "web design and user experience",
    "web design and social media",
    "web design and advertising",
    "web design and digital marketing",
    "web design for SEO",
    "web development frameworks",
    "content management systems",
    "website analytics",
    "website performance",
    "website security",
    "web hosting",
    "domain registration",
    "website migration",
    "web accessibility",
    "web standards",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Vue.js",
    "Angular",
    "PHP",
    "Python",
    "Ruby on Rails",
    "web development languages",
    "web development methodologies",
    "agile development",
    "waterfall development",
    "version control",
    "Git",
    "API development",
    "RESTful services",
    "web services",
    "cloud computing",
    "web performance optimization",
    "website usability",
    "A/B testing",
    "conversion rate optimization",
    "lead generation",
    "email marketing",
    "social media marketing",
    "content marketing",
    "search engine marketing",
    "pay-per-click advertising",
    "online reputation management",
    "digital branding",
    "digital strategy",
    "user interface design",
    "wireframing",
    "prototyping",
    "mockups",
    "user testing",
    "customer journey mapping",
    "digital project management",
    "remote work tools",
    "collaboration tools",
    "freelancing platforms",
    "online courses",
    "webinars",
    "networking",
    "professional development",
    "industry trends",
    "best practices"
],
  openGraph: {
    title: "Nu Begins | Web Development, SEO & Digital Marketing Experts",
    description:
      "Nu Begins is your go-to solution for web development, SEO, graphic design, and digital marketing. We create high-performance websites, boost search rankings, and drive business growth with AI-powered strategies. Elevate your online presence today!",
    url: "https://nubegins.in/",
    images: [
      {
        url: "https://nubegins.in/android-chrome-512x512.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nubegins.in/",
  },
  icons: {
    icon: "https://nubegins.in/favicon-32x32.png", // Default favicon
    apple: "https://nubegins.in/apple-touch-icon.png", // Apple Touch Icon
    shortcut: "https://nubegins.in/favicon.ico", // Shortcut Icon
  },
  other: {
    // Add custom meta tags here
    "title": "NuBegins Ai | Web Development, SEO & Digital Marketing Experts",
  },
};
const Page = () => {
  // Reveal animation on scroll
  // useEffect(() => {
  //   const revealElements = document.querySelectorAll('.reveal');
    
  //   const revealOnScroll = () => {
  //     for (let i = 0; i < revealElements.length; i++) {
  //       const windowHeight = window.innerHeight;
  //       const elementTop = revealElements[i].getBoundingClientRect().top;
  //       const elementVisible = 150;
        
  //       if (elementTop < windowHeight - elementVisible) {
  //         revealElements[i].classList.add('active');
  //       }
  //     }
  //   };
    
  //   window.addEventListener('scroll', revealOnScroll);
  //   revealOnScroll(); // Initial check
    
  //   return () => window.removeEventListener('scroll', revealOnScroll);
  // }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-kudevs-gray-50">
      <main>
        <Hero />
        
        <section id="services" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">WHAT WE OFFER</h4>
            <h2 className="gradient-text">Our Services</h2>
          </div>
          <Services />
        </section>
        
        {/* <section id="courses" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">LEARN WITH US</h4>
            <h2 className="gradient-text">Our Courses</h2>
          </div>
          <Courses />
        </section> */}
        
        <section id="portfolio" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">OUR WORK</h4>
            <h2 className="gradient-text">Portfolio</h2>
          </div>
          <Portfolio />
        </section>
        
        <section id="team" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">MEET THE EXPERTS</h4>
            <h2 className="gradient-text">Our Team</h2>
          </div>
          <Team />
        </section>
        
        <section id="testimonials" className="section-container reveal">
          <div className="section-title">
            <h4 className="section-subtitle">WHAT THEY SAY</h4>
            <h2 className="gradient-text">Testimonials</h2>
          </div>
          <Testimonials />
        </section>
        
        <section id="contact" className="section-container bg-kudevs-gray-50 reveal">
          <div className="section-title">
            <h4 className="section-subtitle">GET IN TOUCH</h4>
            <h2 className="gradient-text">Contact Us</h2>
          </div>
          <ContactSection />
        </section>
      </main>
          </div>
  );
};

export default Page;
