"use client"
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = ({ title, subtitle, testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="header">
          <h2 className="testimonials-title">{title}</h2>
          <p className="testimonials-subtitle">{subtitle}</p>
        </div>

        <div className="testimonials-content">
          {/* Desktop Testimonials */}
          <div className="desktop-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="testimonial-card"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`star ${i < testimonial.stars ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div>
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-details">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials */}
          <div className="mobile-carousel">
            <div className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`star ${i < testimonials[currentIndex].stars ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              <div className="author">
                <div className="author-image">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                </div>
                <div>
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-details">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button onClick={goToPrev} className="carousel-btn">
                <ChevronLeft size={20} />
              </button>
              <button onClick={goToNext} className="carousel-btn">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
