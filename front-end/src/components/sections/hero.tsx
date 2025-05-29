import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to Our Platform",
  subtitle = "Build amazing experiences with our modern solutions",
  ctaText = "Get Started",
  onCtaClick,
  backgroundImage
}) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {subtitle}
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
