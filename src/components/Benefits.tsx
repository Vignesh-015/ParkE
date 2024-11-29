import { Clock, Leaf, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Save valuable time with quick parking spot location and automated payment processing'
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Reduce emissions by minimizing the time spent searching for parking spaces'
  },
  {
    icon: MapPin,
    title: 'Urban Mobility',
    description: 'Improve traffic flow and reduce congestion in urban areas'
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Transform your parking experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white p-8 rounded-lg shadow-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300">
                <benefit.icon className="h-12 w-12 text-cyan-500 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}