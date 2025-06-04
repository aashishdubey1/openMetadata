import React from 'react'

import { Database,Menu } from 'lucide-react'

import { Link, useNavigate } from 'react-router-dom'

const Header = ({isMenuOpen,isScrolled,setIsMenuOpen}) => {

    const navigate = useNavigate()

  return (
     <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OpenMetadata</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Product</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Community</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105" onClick={()=>navigate('/login')}>
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Product</Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Solutions</Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Community</Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">Blog</Link>
              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all">
                Get Started
              </button>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header