import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  features?: string[];
}

interface ServicesProps {
  title?: string;
  services?: Service[];
}

const Services: React.FC<ServicesProps> = ({
  title = "Our Services",
  services = []
}) => {
  const defaultServices: Service[] = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      price: "$2,999",
      features: ["React/Vue.js", "Node.js Backend", "Database Design", "Responsive Design"]
    },
    {
      title: "Mobile App",
      description: "Native and cross-platform mobile applications",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      price: "$4,999",
      features: ["iOS & Android", "React Native", "API Integration", "App Store Deploy"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and user-friendly interface design",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      price: "$1,999",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"]
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              {service.price && (
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
              )}
              {service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;