import React from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img 
                  src={profileImg} 
                  alt="Mithul Sadhasivam" 
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-primary/20 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in animation-delay-200">
              Hi, I'm <span className="text-primary">Mithul Sadhasivam</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 animate-fade-in animation-delay-400">
              B.Sc. Software Systems Student
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
              Passionate about building efficient software solutions with a strong foundation in programming, 
              database management, and software testing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-center pt-4 animate-fade-in animation-delay-600">
              <a
                href="#about"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                Explore My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
