import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import {generateRandomToken,findDemoUser,addNewUser}  from '../utils/authStorage'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state)=>state.login)
  const initializeAuth= useAuthStore((state)=>state.initializeAuth)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated); 
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    password: ''
  });
  
useEffect(()=>{
  initializeAuth()
  if(isAuthenticated){
    navigate('/dashboard',{replace:true})
  }

},[initializeAuth,isAuthenticated,navigate])


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp){  
      const newUser = {
        ...formData,id:'user-'+Date.now()
      }
      const result = addNewUser(newUser);

      if(result.success){
        console.log('demo user registered',result.user)
        const userToken = generateRandomToken();
        login(result.user,userToken)
        navigate('/dashboard')
      }else{
        console.log("Login Failed")
        alert(result.message)
      }
    }else{
      const foundUser = findDemoUser(formData)

      if(foundUser){
        console.log("login success ")
        
        console.log(user)
        console.log(foundUser);
        const userToken = generateRandomToken();
        login(foundUser,userToken);
        navigate('/dashboard');
      }else{
         console.log('Demo login failed: Invalid credentials');
        alert('Invalid username or password. Please sign up first if you are a new user.');
      }
    }
    
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8 transform  transition-transform duration-300">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-white/70">
              {isSignUp ? 'Join us today and get started' : 'Sign in to your account'}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name field (only for sign up) */}
            {isSignUp && (
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-purple-400 transition-colors duration-200" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  required={isSignUp}
                />
              </div>
            )}

            {/* Email field */}
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-purple-400 transition-colors duration-200" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                required
              />
            </div>

            {/* Password field */}
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-purple-400 transition-colors duration-200" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-purple-400 transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Forgot password (only for login) */}
            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-white/70 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          {/* Social login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/70">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                <span className="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>

          {/* Toggle between login/signup */}
          <div className="mt-8 text-center">
            <p className="text-white/70">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>

        
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-bounce delay-2000"></div>
      </div>
    </div>
  );
}