import React from 'react'
import ContactSection from '../../../components/ContactSection'

const page = () => {
  return (
    <section id="contact" className="section-container bg-kudevs-gray-50 reveal" style={{marginTop:"5rem"}}>
    <div className="section-title">
      <h4 className="section-subtitle">GET IN TOUCH</h4>
      <h2 className="gradient-text">Contact Us</h2>
    </div>
    <ContactSection />
  </section>
  )
}

export default page
