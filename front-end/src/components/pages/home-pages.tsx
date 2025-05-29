import React from 'react';
import Hero from '../sections/hero';
import About from '../sections/about';
import Services from '../sections/services';
import ProcessSteps from '../sections/processsteps';
import Contact from '../sections/contact';

const HomePage: React.FC = () => {
  const handleHeroClick = () => {
    // Scroll to contact section or handle navigation
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Contact form submitted:', data);
    // Handle contact form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Welcome to Our Blood Donation Platform"
        subtitle="Connecting donors with those in need - Save lives with your donation"
        ctaText="Donate Blood Today"
        onCtaClick={handleHeroClick}
      />
      
      <About 
        title="About Blood Donation"
        description="Every donation can save up to three lives. Join our community of heroes who make a difference every day."
        features={[
          {
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            ),
            title: "Safe Process",
            description: "All donations follow strict medical protocols ensuring donor safety"
          },
          {
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            ),
            title: "Community Impact",
            description: "Join thousands of donors making a difference in their communities"
          },
          {
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Quick & Easy",
            description: "Simple registration process and convenient donation scheduling"
          }
        ]}
      />

      <ProcessSteps 
        title="How Blood Donation Works"
        steps={[
          {
            number: 1,
            title: "Register",
            description: "Sign up and complete your health questionnaire online"
          },
          {
            number: 2,
            title: "Schedule",
            description: "Book an appointment at your preferred location and time"
          },
          {
            number: 3,
            title: "Donate",
            description: "Visit the center for a quick 10-15 minute donation process"
          },
          {
            number: 4,
            title: "Save Lives",
            description: "Your donation can help save up to 3 lives immediately"
          }
        ]}
      />

      <Services 
        title="Our Services"
        services={[
          {
            title: "Regular Donation",
            description: "Standard blood donation for general medical needs",
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            ),
            features: ["Free health check", "Refreshments provided", "Donation certificate", "24/7 support"]
          },
          {
            title: "Plasma Donation",
            description: "Specialized plasma donation for specific treatments",
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            ),
            features: ["Longer process", "Higher compensation", "Special screening", "Research contribution"]
          },
          {
            title: "Emergency Response",
            description: "Priority calls for urgent medical emergencies",
            icon: (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            ),
            features: ["24/7 availability", "Rapid response", "Mobile units", "Critical care support"]
          }
        ]}
      />

      <div id="contact">
        <Contact onSubmit={handleContactSubmit} />
      </div>
    </div>
  );
};

export default HomePage;