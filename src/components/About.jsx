import React from 'react';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
                <img 
                  src={profileImg} 
                  alt="Mithul Sadhasivam" 
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-primary/20 transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Building Tomorrow's Solutions Today
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-semibold text-primary">Mithul Sadhasivam</span>, a dedicated 
                <span className="font-semibold"> B.Sc. Software Systems</span> student based in 
                <span className="font-semibold"> Erode, Tamil Nadu</span>. Currently in my final year, 
                I specialize in building efficient and scalable software solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in <span className="font-semibold text-gray-800">programming, database management, 
                and software testing</span>, I'm passionate about turning complex problems into elegant solutions. 
                My journey in software development is driven by curiosity, continuous learning, and a commitment to excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-gray-600">Years of Study</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                  <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                  <div className="text-sm text-gray-600">Technical Skills</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/mithuls"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
