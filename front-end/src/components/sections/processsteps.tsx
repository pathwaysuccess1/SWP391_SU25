import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessStepsProps {
  title?: string;
  steps?: Step[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title = "Our Process",
  steps = []
}) => {
  const defaultSteps: Step[] = [
    {
      number: 1,
      title: "Discovery",
      description: "We understand your needs and requirements"
    },
    {
      number: 2,
      title: "Planning",
      description: "Create detailed project roadmap and timeline"
    },
    {
      number: 3,
      title: "Development",
      description: "Build your solution with best practices"
    },
    {
      number: 4,
      title: "Launch",
      description: "Deploy and monitor your project"
    }
  ];

  const displaySteps = steps.length > 0 ? steps : defaultSteps;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displaySteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.icon || step.number}
                </div>
                {index < displaySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;