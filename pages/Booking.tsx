import React, { useState } from 'react';

const steps = [
  { id: 1, label: 'انتخاب سرویس' },
  { id: 2, label: 'زمان رزرو' },
  { id: 3, label: 'اطلاعات شما' },
  { id: 4, label: 'پرداخت' },
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('skin');

  const nextStep = () => setCurrentStep(prev => Math.min(4, prev + 1));
  const prevStep = () => setCurrentStep(prev => Math.max(1, prev - 1));

  return (
    <div className="pt-24 pb-20 bg-background-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Stepper */}
        <div className="mb-10 relative">
          <div className="absolute top-1/2 right-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0"></div>
          <div 
             className="absolute top-1/2 right-0 h-1 bg-primary -translate-y-1/2 rounded-full z-0 transition-all duration-500"
             style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
          <div className="relative z-10 flex justify-between w-full">
            {steps.map((step) => (
               <div key={step.id} className="flex flex-col items-center gap-2 bg-background-light px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${currentStep >= step.id ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                     {currentStep > step.id ? <span className="material-icons text-sm">check</span> : step.id}
                  </div>
                  <span className={`text-xs font-bold whitespace-nowrap hidden md:block ${currentStep >= step.id ? 'text-primary' : 'text-gray-400'}`}>{step.label}</span>
               </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
           {/* Step Content */}
           {currentStep === 1 && (
             <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">نوع مشاوره را انتخاب کنید</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div 
                      onClick={() => setSelectedService('skin')}
                      className={`cursor-pointer p-6 rounded-lg border-2 flex flex-col gap-4 ${selectedService === 'skin' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
                   >
                      <div className="flex justify-between">
                         <span className="material-icons bg-white p-2 rounded-full shadow text-primary">face</span>
                         {selectedService === 'skin' && <div className="w-4 h-4 rounded-full bg-primary"></div>}
                      </div>
                      <h3 className="font-bold text-lg">تحلیل پوست (پایه)</h3>
                      <div className="mt-auto flex justify-between items-center text-sm">
                         <span>۳۰ دقیقه</span>
                         <span className="font-bold text-primary">850,000 T</span>
                      </div>
                   </div>
                   
                   <div 
                      onClick={() => setSelectedService('audit')}
                      className={`cursor-pointer p-6 rounded-lg border-2 flex flex-col gap-4 ${selectedService === 'audit' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}
                   >
                       <div className="flex justify-between">
                         <span className="material-icons bg-white p-2 rounded-full shadow text-primary">inventory_2</span>
                         {selectedService === 'audit' && <div className="w-4 h-4 rounded-full bg-primary"></div>}
                      </div>
                      <h3 className="font-bold text-lg">آدیت کیف آرایش</h3>
                      <div className="mt-auto flex justify-between items-center text-sm">
                         <span>۱۲۰ دقیقه</span>
                         <span className="font-bold text-primary">3,000,000 T</span>
                      </div>
                   </div>
                </div>
             </div>
           )}

           {currentStep === 2 && (
             <div>
                <h2 className="text-2xl font-bold mb-6">زمان مشاوره</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white border rounded-lg p-4">
                      <div className="text-center font-bold mb-4 dir-ltr">November 2024</div>
                      <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 opacity-50">
                         <div>Sa</div><div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div>
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center">
                         {[...Array(30)].map((_, i) => (
                            <div key={i} className={`p-2 rounded-full cursor-pointer hover:bg-gray-100 ${i === 5 ? 'bg-primary text-white hover:bg-primary' : ''}`}>
                               {i + 1}
                            </div>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-sm text-gray-500">نوبت‌های صبح</h4>
                      <div className="flex flex-wrap gap-2">
                         <button className="px-4 py-2 border rounded-full hover:border-primary text-sm">09:00</button>
                         <button className="px-4 py-2 border rounded-full hover:border-primary text-sm">10:30</button>
                      </div>
                      <h4 className="font-bold text-sm text-gray-500 mt-4">نوبت‌های عصر</h4>
                      <div className="flex flex-wrap gap-2">
                         <button className="px-4 py-2 bg-primary text-white rounded-full text-sm shadow">15:30</button>
                         <button className="px-4 py-2 border rounded-full hover:border-primary text-sm">17:00</button>
                      </div>
                   </div>
                </div>
             </div>
           )}
           
           {currentStep === 3 && (
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold mb-6">اطلاعات شما</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-bold mb-2">نام و نام خانوادگی</label>
                       <input type="text" className="w-full rounded-lg border-gray-200 bg-gray-50 p-3" placeholder="مریم کریمی" />
                    </div>
                    <div>
                       <label className="block text-sm font-bold mb-2">شماره موبایل</label>
                       <input type="tel" className="w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-left" placeholder="0912..." />
                    </div>
                    <div className="md:col-span-2">
                       <label className="block text-sm font-bold mb-2">نگرانی اصلی پوست شما</label>
                       <textarea className="w-full rounded-lg border-gray-200 bg-gray-50 p-3" rows={3} placeholder="توضیحات کوتاه..."></textarea>
                    </div>
                 </div>
              </div>
           )}

            {currentStep === 4 && (
              <div className="text-center py-10">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons text-3xl">check</span>
                 </div>
                 <h2 className="text-2xl font-bold mb-2">همه چیز آماده است!</h2>
                 <p className="text-gray-500 mb-8">شما در حال رزرو پکیج تحلیل پوست برای تاریخ ۱۴ آبان ساعت ۱۵:۳۰ هستید.</p>
                 <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 inline-block mb-8">
                    <span className="text-sm text-gray-500">مبلغ قابل پرداخت:</span>
                    <div className="text-2xl font-bold text-primary">850,000 T</div>
                 </div>
              </div>
           )}

           {/* Navigation Buttons */}
           <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              <button 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-full font-medium ${currentStep === 1 ? 'opacity-0' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                 بازگشت
              </button>
              <button 
                onClick={currentStep === 4 ? () => alert("Payment logic") : nextStep}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-primary-dark transition-all flex items-center gap-2"
              >
                 {currentStep === 4 ? 'پرداخت نهایی' : 'ادامه'}
                 {currentStep !== 4 && <span className="material-icons text-sm rotate-180">arrow_right_alt</span>}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;