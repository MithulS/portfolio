import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc. Software Systems',
      institution: 'University',
      location: 'Erode, Tamil Nadu',
      period: 'Ongoing',
      description: 'Pursuing Bachelor of Science in Software Systems with focus on programming, database management, and software engineering principles.',
      coursework: [
        'Programming in Python',
        'Database Management Systems (SQL)',
        'Object-Oriented Programming (Java)',
        'Software Testing & Quality Assurance',
        'Data Structures and Algorithms',
        'Web Technologies'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {edu.location}
                    </p>
                  </div>
                  <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Relevant Coursework:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-start bg-white p-3 rounded-lg shadow-sm"
                      >
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
