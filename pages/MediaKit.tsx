import React from 'react';

const StatCard = ({ label, value, sub, icon }: any) => (
  <div className="p-6 bg-white rounded-lg flex flex-col justify-between border border-gray-100 shadow-sm">
     <div className="flex justify-between items-start mb-4">
        <span className="text-gray-500 text-sm font-medium">{label}</span>
        <span className="material-icons text-primary/40">{icon}</span>
     </div>
     <div className="text-4xl font-extrabold text-primary">{value}</div>
     {sub && <div className="text-xs text-gray-400 mt-2">{sub}</div>}
  </div>
);

const MediaKit = () => {
  return (
    <div className="bg-background-light pb-24">
       <div className="bg-white pt-24 pb-32 px-6 text-center border-b border-gray-100">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4">
             <span className="w-8 h-[1px] bg-primary"></span>
             کیت رسانه‌ای ۲۰۲۴
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">همکاری با <span className="text-primary">LUXE</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">ارتباط زیبایی لوکس با مخاطبان اختصاصی فارسی زبان. استراتژی‌های داده‌محور برای داستان‌سرایی تأثیرگذار.</p>
       </div>

       <div className="max-w-7xl mx-auto px-6 -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
             <StatCard label="مجموع دنبال‌کنندگان" value="۳۵۰k+" sub="+۱۲٪ رشد ماهانه" icon="people" />
             <StatCard label="نرخ تعامل" value="۸.۵٪" sub="بالاتر از میانگین صنعت" icon="favorite" />
             <StatCard label="بازدید ماهانه" value="۱.۲M" icon="visibility" />
             <div className="p-6 bg-primary text-white rounded-lg flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                   <span className="text-white/80 text-sm">مخاطبان خانم</span>
                   <span className="material-icons text-white/60">pie_chart</span>
                </div>
                <div className="text-4xl font-extrabold relative z-10">۸۵٪</div>
                <div className="text-xs text-white/60 mt-2 relative z-10">۲۴ تا ۳۵ سال</div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 md:p-16 shadow-xl border border-gray-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h2 className="text-3xl font-bold mb-6">درخواست همکاری</h2>
                   <p className="text-gray-500 mb-8 leading-relaxed">لطفاً جزئیات کمپین خود را وارد کنید. من معمولاً ظرف ۴۸ ساعت کاری پاسخ می‌دهم.</p>
                   <div className="space-y-4 text-gray-600">
                      <div className="flex items-center gap-3">
                         <span className="material-icons text-primary/50">email</span>
                         hello@luxebeauty.com
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="material-icons text-primary/50">location_on</span>
                         تهران / تورنتو (دفتر مجازی)
                      </div>
                   </div>
                </div>
                <form className="space-y-6">
                   <div>
                      <label className="block text-sm font-bold mb-2">نام برند</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none" placeholder="نام برند شما" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold mb-2">ایمیل</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none" placeholder="email@company.com" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold mb-2">نوع همکاری</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none">
                         <option>پست اسپانسر شده</option>
                         <option>سفیر برند</option>
                         <option>ارسال محصول</option>
                      </select>
                   </div>
                   <button className="w-full bg-primary text-white py-4 rounded-lg font-bold shadow-lg hover:bg-primary-light transition-colors">ارسال درخواست</button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default MediaKit;