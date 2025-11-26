import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Academic Projects',
      organization: 'B.Sc. Software Systems',
      period: 'Ongoing',
      description: 'Developing various software projects using Python, SQL, and Java. Focus on building database-driven applications and implementing software testing methodologies.',
      highlights: [
        'Database design and management with SQL',
        'Python application development',
        'Version control with Git and GitHub',
        'Software testing and quality assurance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Experience & Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 card-hover border border-blue-100 group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Currently seeking internship and project opportunities to apply and expand my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
