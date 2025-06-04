import React from 'react'

 const technologies = [
    'Apache Kafka', 'Snowflake', 'BigQuery', 'Databricks', 'Apache Airflow',
    'dbt', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    'Apache Spark', 'Tableau', 'Power BI', 'Looker', 'Jupyter',
    'Apache Hive', 'MySQL', 'Oracle', 'Redshift', 'Azure Data Factory'
  ];

const ScrollSection = () => {
  return (
    <section className="py-16 overflow-hidden bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-sm">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Works with Your Entire Data Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            80+ turnkey connectors make it easy to collect all your metadata from any data source
          </p>
        </div>

        {/* First Row - Moving Left */}
        <div className="flex space-x-8 animate-scroll-left mb-8">
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={`left-${index}`}
              className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 text-white font-medium hover:bg-white/20 transition-all cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex space-x-8 animate-scroll-right">
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
            <div 
              key={`right-${index}`}
              className="flex-shrink-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-6 py-3 text-blue-200 font-medium hover:from-blue-500/30 hover:to-indigo-500/30 transition-all cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>
        <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
      </section>
  )
}

export default ScrollSection