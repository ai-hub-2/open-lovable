import { ChevronDown, ExternalLink, Users, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-[#E74C3C] to-[#FF8C00] pt-16">
        {/* Main Content */}
        <div className="bg-[#1A1A1A] min-h-screen">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-white">From the Community</h1>
              <button className="text-white hover:text-gray-300 transition-colors">
                View All
              </button>
            </div>
            
            {/* Filter Dropdowns */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="bg-[#2C2C2C] rounded-lg px-4 py-3 flex items-center space-x-2 cursor-pointer hover:bg-gray-700 transition-colors">
                <span className="text-white">Popular</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
              <div className="bg-[#2C2C2C] rounded-lg px-4 py-3 flex items-center space-x-2 cursor-pointer hover:bg-gray-700 transition-colors">
                <span className="text-white">Discover</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            {/* Project 1: Pulse Robot Template */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Preview Section */}
              <div className="p-8 bg-gradient-to-r from-orange-400 to-yellow-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-2">*Pulse Robot*</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Atlas: Where Code Meets Motion
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                      The humanoid companion that learns and adapts alongside you.
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                      Explore Demo
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-48 h-48 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">pulse-robot-template</h3>
                      <p className="text-gray-600">26,872 Remixes</p>
                    </div>
                  </div>
                  <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                    Website
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">Why Humanoid</p>
              </div>
            </div>

            {/* Project 2: Cryptocurrency Trading Dashboard */}
            <div className="bg-[#2C2C2C] rounded-3xl shadow-lg overflow-hidden">
              {/* Preview Section */}
              <div className="p-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Crypto Dashboard</h3>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">Market Cap</p>
                      <p className="text-white font-bold">$2.1T</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">24h Volume</p>
                      <p className="text-white font-bold">$584.2B</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <p className="text-gray-400 text-sm">BTC Dominance</p>
                      <p className="text-white font-bold">42.1%</p>
                    </div>
                  </div>
                  
                  {/* Charts Placeholder */}
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Bitcoin Price</p>
                      <div className="h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded"></div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-2">Bitcoin Performance</p>
                      <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Table */}
                  <div className="mt-6">
                    <p className="text-gray-400 text-sm mb-2">Top Cryptocurrencies</p>
                    <div className="bg-gray-700 rounded-lg p-3">
                      <div className="flex justify-between text-white text-sm">
                        <span>Bitcoin</span>
                        <span>$43,250</span>
                      </div>
                      <div className="flex justify-between text-white text-sm mt-2">
                        <span>Ethereum</span>
                        <span>$2,650</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">cryptocurrency-trading-das...</h3>
                      <p className="text-gray-400">15,432 Remixes</p>
                    </div>
                  </div>
                  <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                    Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}