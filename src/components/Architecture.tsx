import { Cloud, Database, Laptop, Router, Smartphone } from 'lucide-react';

export function Architecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 to-white" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            System Architecture
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive view of our technical infrastructure
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg" />
          <div className="relative grid md:grid-cols-3 gap-8 p-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                <Smartphone className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">User Layer</h3>
                <p className="text-gray-600">Mobile apps and user interfaces for seamless interaction</p>
              </div>
            </div>

            <div className="text-center md:mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                <Router className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Edge Layer</h3>
                <p className="text-gray-600">Local processing units for real-time data handling</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                <Cloud className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cloud Layer</h3>
                <p className="text-gray-600">Centralized management and data analytics</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Database className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Storage</h3>
              <p className="text-gray-600">Distributed database system for efficient data management</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Laptop className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Management Console</h3>
              <p className="text-gray-600">Administrative interface for system monitoring and control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}