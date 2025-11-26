import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'Python Programming',
      provider: 'Academic Curriculum',
      description: 'Comprehensive course covering Python fundamentals, data structures, and application development.',
      skills: ['Python Basics', 'Data Structures', 'File Handling', 'OOP Concepts'],
      icon: '🐍'
    },
    {
      title: 'Database Management',
      provider: 'Academic Curriculum',
      description: 'In-depth study of SQL, database design, normalization, and query optimization.',
      skills: ['SQL Queries', 'Database Design', 'Normalization', 'RDBMS'],
      icon: '🗄️'
    },
    {
      title: 'Software Testing',
      provider: 'Academic Curriculum',
      description: 'Study of software testing methodologies, test case design, and quality assurance practices.',
      skills: ['Test Planning', 'Test Cases', 'Bug Tracking', 'QA Practices'],
      icon: '🧪'
    },
    {
      title: 'Version Control with Git',
      provider: 'Self-Learning & Practice',
      description: 'Hands-on experience with Git and GitHub for version control and collaborative development.',
      skills: ['Git Commands', 'GitHub', 'Branching', 'Collaboration'],
      icon: '📦'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Courses & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 card-hover border border-blue-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{course.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {course.provider}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm">
                    Key Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I'm committed to continuous learning and staying updated with the latest technologies 
              in software development. Currently exploring advanced topics in software engineering 
              and actively seeking opportunities to expand my skill set through practical projects 
              and industry certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
