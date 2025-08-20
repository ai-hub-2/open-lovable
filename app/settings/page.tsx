import { 
  Settings, 
  Globe, 
  BarChart3, 
  TrendingUp, 
  GraduationCap, 
  Shield, 
  Users, 
  CreditCard, 
  User, 
  FlaskConical,
  Zap,
  Github,
  ChevronRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function SettingsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#1A1A1A] pt-16">
        {/* Browser Header Simulation */}
        <div className="bg-[#242424] p-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded"></div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-xs font-bold">:D</div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-lg">+</div>
            </div>
            
            <div className="bg-[#333333] rounded-lg px-4 py-2 flex items-center space-x-2">
              <div className="w-4 h-4 bg-white rounded"></div>
              <span className="text-white text-sm">lovable.dev/projects/c2b29b54</span>
              <div className="w-4 h-4 bg-white rounded">🏠</div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-lg">+</div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-[#1A1A1A] p-4 border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">←</div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-lg">lab-opus</span>
                <div className="w-4 h-4 bg-white rounded flex items-center justify-center text-black text-xs">▼</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#FF8C00] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-lg">+</div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-[#212121] rounded-t-2xl min-h-screen">
            {/* Settings Title */}
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold text-white">Settings</h1>
            </div>

            {/* Settings Content */}
            <div className="px-8 pb-8 space-y-8">
              {/* Project Section */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Project</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Settings className="w-5 h-5 text-white" />
                    <span className="text-white">Project Settings</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Globe className="w-5 h-5 text-white" />
                    <span className="text-white">Domains</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <BarChart3 className="w-5 h-5 text-white" />
                    <span className="text-white">Analytics</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span className="text-white">Page Speed</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <GraduationCap className="w-5 h-5 text-white" />
                    <span className="text-white">Knowledge</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-white">Security</span>
                  </div>
                </div>
              </div>

              {/* Workspace Section */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Workspace</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-[#E53935] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="text-white">mushari's Lovable</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white">People</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <CreditCard className="w-5 h-5 text-white" />
                    <span className="text-white">Plans & Billing</span>
                  </div>
                </div>
              </div>

              {/* Account Section */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Account</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <User className="w-5 h-5 text-white" />
                    <span className="text-white">mushari aldowsari</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <FlaskConical className="w-5 h-5 text-white" />
                    <span className="text-white">Labs</span>
                  </div>
                </div>
              </div>

              {/* Integrations Section */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Integrations</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-[#3ECF8E] rounded flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white">Supabase</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Github className="w-5 h-5 text-white" />
                    <span className="text-white">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}