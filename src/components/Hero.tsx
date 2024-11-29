import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Smart Parking System Using Edge Computing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Redefining Urban Parking with Technology
            </p>
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-cyan-600 transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1740"
              alt="Smart Parking"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-cyan-500/10 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}