import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      level: 'Intermediate',
      icon: '🐍',
      color: 'bg-blue-500'
    },
    {
      name: 'SQL',
      level: 'Intermediate',
      icon: '🗄️',
      color: 'bg-indigo-500'
    },
    {
      name: 'Java',
      level: 'Basic',
      icon: '☕',
      color: 'bg-orange-500'
    },
    {
      name: 'Git/GitHub',
      level: 'Intermediate',
      icon: '📦',
      color: 'bg-gray-700'
    },
    {
      name: 'Software Testing',
      level: 'Intermediate',
      icon: '🧪',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 card-hover border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                    <span className="text-sm text-gray-600">{skill.level}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                    style={{
                      width: skill.level === 'Basic' ? '40%' : skill.level === 'Intermediate' ? '70%' : '90%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
