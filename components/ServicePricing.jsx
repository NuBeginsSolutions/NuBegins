"use client"
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ServicePricing = ({ title, subtitle, plans }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="service-pricing">
      <div className="container">
        <div className="header">
          <h2 className="pricing-title">{title}</h2>
          <p className="pricing-subtitle">{subtitle}</p>
          <div className="toggle-buttons">
            <button 
              onClick={() => setIsYearly(false)} 
              className={`toggle-button ${!isYearly ? 'active' : ''}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)} 
              className={`toggle-button ${isYearly ? 'active' : ''}`}
            >
              Yearly <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`} 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="badge">Most Popular</div>
              )}
              <div className="card-content">
                <h3 className="plan-title">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price-amount">
                    ${isYearly ? (parseInt(plan.price) * 12 * 0.8).toFixed(0) : plan.price}
                  </span>
                  <span className="price-duration">/{isYearly ? 'year' : 'month'}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <Check 
                        size={18} 
                        className={`feature-icon ${feature.included ? 'included' : 'excluded'}`} 
                      />
                      <span className={`feature-text ${feature.included ? 'included' : 'excluded'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`cta-button ${plan.popular ? 'popular' : ''}`}>
                  <Link href="/contact">{plan.buttonText}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
