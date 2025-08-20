import { 
  ArrowLeft, 
  ChevronDown, 
  Settings, 
  Pencil, 
  Moon, 
  ChevronRight,
  Heart
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function ProjectPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#1A1A1A] pt-16">
        {/* Browser Header Simulation */}
        <div className="bg-[#242424] p-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white rounded">⋯</div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-xs font-bold">:D</div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-lg">+</div>
            </div>
            
            <div className="bg-[#333333] rounded-lg px-4 py-2 flex items-center space-x-2">
              <div className="w-4 h-4 bg-white rounded"></div>
              <span className="text-white text-sm">lovable.dev/projects/c2b29b54</span>
              <div className="w-4 h-4 bg-white rounded">🏠</div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#D9534F] rounded-full flex items-center justify-center">
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
              <div className="w-9 h-9 bg-[#D9534F] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black text-lg">+</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="space-y-6 text-white">
            {/* Arabic Content */}
            <div className="space-y-4 text-right" dir="rtl">
              <p className="text-lg">استخرج التوزيع وشغل 5.</p>
              <code className="block bg-gray-800 p-3 rounded text-sm font-mono text-left">
                MedicalLabAnalyzer.exe
              </code>
              <p className="text-lg">سجل الدخول بالمستخدمين التجريبيين 6.</p>
              
              {/* Table */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center mb-2 font-semibold">
                  <span>المستخدم</span>
                  <span>كلمة المرور</span>
                  <span>الدور</span>
                </div>
                <div className="border-t border-gray-600 pt-2">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <span>admin</span>
                    <span>admin</span>
                    <span>المدير</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mt-2">
                    <span>lab</span>
                    <span>123</span>
                    <span>فني المختبر</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center mt-2">
                    <span>reception</span>
                    <span>123</span>
                    <span>المستقبل</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg">ويتم حفظ ، Offline جميع التحاليل تعمل .7</p>
              <p className="text-lg">المحلية SQLite النتائج في قاعدة بيانات</p>
              
              <div className="border-t border-gray-600 pt-4 mt-6">
                <p className="text-lg">---</p>
              </div>
              
              <p className="text-lg">إذا أحببت، يمكنني أن أجهز لك **رابط مباشر**</p>
              <p className="text-lg">النهائي كامل مع كل الملفات ZIP لتحميل</p>
              <p className="text-lg">بحيث يكون **جاهز** Offline والكود الجاهز</p>
              <p className="text-lg">للتثبيت والبناء والتنفيذ مباشرة **على أي جهاز**</p>
              <p className="text-lg">Windows.</p>
              
              <p className="text-lg font-semibold mt-6">هل تريد أن أفعل ذلك الآن؟</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#202020] border-t border-gray-700">
          <div className="p-4">
            {/* Credits Section */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">Credits</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#4285F4] rounded-full"></div>
                <span className="text-gray-400 text-sm">Daily credits used first</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div className="bg-[#4285F4] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">5 left ></span>
            </div>
            
            {/* Settings Menu */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-white" />
                  <span className="text-white">Settings</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Pencil className="w-5 h-5 text-white" />
                  <span className="text-white">Rename project</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-white" />
                  <span className="text-white">Appearance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">System</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}