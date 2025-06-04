import React from 'react'
import {ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()

  return (
     <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Trusted by thousands of data teams worldwide
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Best Open Source
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Data Catalog Solution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A single place for all your data and all your data practitioners to build and manage 
              high quality data assets at scale. Built by the founders of Apache Hadoop, Apache Atlas, and Uber Databook.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg" onClick={()=>navigate('/login')}>
                Get Started Free
                <ChevronRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">80+</div>
                <div className="text-gray-400">Connectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-400">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero