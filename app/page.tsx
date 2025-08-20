'use client';

import { Heart, Plus, Globe, ArrowUp, Upload, FileText, Code, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-[#2C3040] via-[#504060] to-[#F07060] pt-16">
        {/* Header Section */}
        <div className="text-center pt-20 pb-16 px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Build something Lovable
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create apps and websites by chatting with AI
          </p>
        </div>

        {/* Main Chat Input */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="bg-[#2C2C2C] rounded-3xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Ask Lovable to create a blog about..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none"
              />
            </div>
            
            {/* Control Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <Plus className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                  <Globe className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <button className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowUp className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Option Buttons */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex justify-center space-x-6">
            <button className="bg-[#2C2C2C] hover:bg-gray-700 transition-colors rounded-xl px-6 py-4 flex items-center space-x-3">
              <Upload className="w-5 h-5 text-white" />
              <span className="text-white font-medium">File uploader</span>
            </button>
            
            <button className="bg-[#2C2C2C] hover:bg-gray-700 transition-colors rounded-xl px-6 py-4 flex items-center space-x-3">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Markdown editor</span>
            </button>
            
            <button className="bg-[#2C2C2C] hover:bg-gray-700 transition-colors rounded-xl px-6 py-4 flex items-center space-x-3">
              <Code className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Hacker</span>
            </button>
          </div>
        </div>

        {/* Community Section */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">From the Community</h2>
            <button className="text-white hover:text-gray-300 transition-colors">
              View All
            </button>
          </div>
          
          {/* Community Content Placeholder */}
          <div className="text-center text-gray-300 py-12">
            <p>Community projects will appear here</p>
          </div>
        </div>
      </div>
    </>
  );
}

