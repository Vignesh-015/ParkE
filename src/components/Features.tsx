import { Car, CreditCard, LineChart, Shield, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Real-time Availability',
    description: 'Get instant updates on parking spot availability through our mobile app'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Encrypted payment processing for safe and convenient transactions'
  },
  {
    icon: LineChart,
    title: 'Dynamic Pricing',
    description: 'Smart pricing based on demand and time of day'
  },
  {
    icon: Car,
    title: 'Automated Guidance',
    description: 'Navigate directly to available parking spots'
  },
  {
    icon: Zap,
    title: 'Edge Computing',
    description: 'Real-time processing for minimal latency'
  },
  {
    icon: CreditCard,
    title: 'Contactless Access',
    description: 'Touchless entry and exit for seamless experience'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cutting-edge Features
          </h2>
          <p className="text-xl text-gray-600">
            Experience the future of parking management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-cyan-500 transition-all duration-300 group"
            >
              <feature.icon className="h-12 w-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}