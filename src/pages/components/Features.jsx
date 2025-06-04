import React from 'react'
import { Database, Zap, Shield, Users, GitBranch, BarChart3 } from 'lucide-react';

const features = [
    { icon: Database, title: 'Data Discovery', desc: 'Find and understand your data assets' },
    { icon: Zap, title: 'Data Observability', desc: 'Monitor data quality and lineage' },
    { icon: Shield, title: 'Data Governance', desc: 'Ensure compliance and security' },
    { icon: Users, title: 'Collaboration', desc: 'Unite data teams and stakeholders' },
    { icon: GitBranch, title: 'Data Lineage', desc: 'Track data flow and dependencies' },
    { icon: BarChart3, title: 'Analytics', desc: 'Gain insights from metadata' }
  ];



const Features = () => {
  return (
     <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need for Modern Data Management
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get complete data context unified across discovery, observability, and governance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Features