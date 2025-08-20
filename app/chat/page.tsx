import { 
  Heart, 
  Camera, 
  Image, 
  MessageSquare, 
  Star, 
  Database, 
  ArrowLeft, 
  RefreshCw, 
  Maximize2,
  Monitor,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ChatPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#1C1C1E] pt-16">
        {/* Loading/Setup Section */}
        <div className="flex flex-col items-center justify-center pt-32 pb-16">
          <div className="w-24 h-24 mb-6">
            <Heart className="w-full h-full text-[#888888]" />
          </div>
          <p className="text-xl text-gray-300 mb-12">Spinning up preview...</p>
          
          {/* Features List */}
          <div className="max-w-md space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <span className="text-gray-300">Instantly preview your changes</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-gray-300">Set custom knowledge for every edit</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <Database className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-gray-300">Connect Supabase for backend</span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#2C2C2E] border-t border-gray-700">
          <div className="p-4">
            {/* Top Row - Credits and Settings */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white" />
                </div>
                <span className="text-white font-medium">Lovable</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>10:31 PM on Aug 19</span>
                <div className="w-4 h-4 bg-gray-400 rounded">⋯</div>
              </div>
            </div>

            {/* Middle Row - Camera and Images Buttons */}
            <div className="flex justify-center space-x-4 mb-4">
              <button className="bg-[#2C2C2C] hover:bg-gray-700 transition-colors rounded-xl px-6 py-4 flex flex-col items-center space-y-2">
                <Camera className="w-6 h-6 text-white" />
                <span className="text-white text-sm">Camera</span>
              </button>
              
              <button className="bg-[#2C2C2C] hover:bg-gray-700 transition-colors rounded-xl px-6 py-4 flex flex-col items-center space-y-2">
                <Image className="w-6 h-6 text-white" />
                <span className="text-white text-sm">Images</span>
              </button>
            </div>

            {/* Bottom Row - Settings Toggles */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span className="text-white">Chat Mode</span>
                </div>
                <div className="w-12 h-6 bg-[#4A4A4A] rounded-full relative">
                  <div className="w-5 h-5 bg-[#888888] rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-white" />
                  <span className="text-white">Legacy Mode</span>
                </div>
                <div className="w-12 h-6 bg-[#4A4A4A] rounded-full relative">
                  <div className="w-5 h-5 bg-[#888888] rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">ⓘ</span>
                  </div>
                  <span className="text-white">Agent Features and Pricing</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}