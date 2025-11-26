import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'mithuld321@gmail.com',
      link: 'mailto:mithuld321@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7904212501',
      link: 'tel:+917904212501'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Erode, Tamil Nadu',
      link: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/mithuls',
      link: 'https://www.linkedin.com/in/mithuls'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about technology and software development. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100 overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start group"
                  >
                    <div className="bg-primary text-white p-3 rounded-lg mr-4 group-hover:bg-secondary transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-800 font-medium group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you have a question, want to discuss a project, or just want to say hi, 
              I'd love to hear from you. Don't hesitate to reach out through any of the channels above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mithuld321@gmail.com"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/mithuls"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
