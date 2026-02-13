import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, desc, price, duration, features, icon, isPromo }: any) => (
  <div className={`rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${isPromo ? 'bg-primary text-white transform md:scale-105 z-10' : 'bg-white border border-gray-100'}`}>
     <div className="mb-6 flex justify-center">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${isPromo ? 'bg-white/20' : 'bg-primary/5 text-primary'}`}>
             <span className="material-icons text-5xl">{icon}</span>
        </div>
     </div>
     <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${isPromo ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
     </div>
     <div className={`flex justify-between items-center rounded-full px-4 py-2 mb-6 ${isPromo ? 'bg-black/20' : 'bg-background-light'}`}>
        <span className="font-bold">{price}</span>
        <span className="text-xs opacity-70">{duration}</span>
     </div>
     <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm">
               <span className="material-icons text-base mt-0.5">check_circle</span>
               {f}
            </li>
        ))}
     </ul>
     <Link to="/booking" className={`w-full py-3 rounded-full font-bold text-center transition-colors ${isPromo ? 'bg-white text-primary hover:bg-gray-100' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
        رزرو نوبت
     </Link>
  </div>
);

const Services = () => {
  return (
    <div className="pt-20 pb-20 bg-background-light">
       <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">پکیج‌های اختصاصی</h1>
          <p className="text-gray-500 text-lg">خدماتی طراحی شده برای نیازهای مدرن و سبک زندگی شما.</p>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          <ServiceCard 
             title="مشاوره مراقبت پوست"
             desc="شناخت نوع پوست و دریافت روتین صبح و شب کاملاً شخصی‌سازی شده."
             price="۱.۵۰۰.۰۰۰ تومان"
             duration="۴۵ دقیقه"
             icon="face"
             features={['آنالیز کامل نوع پوست', 'لیست خرید محصولات', '۱ ماه پشتیبانی واتس‌اپ']}
          />
          <ServiceCard 
             title="استادی در میکاپ"
             desc="آموزش تکنیک‌های خودآرایی متناسب با فرم صورت شما."
             price="۲.۲۰۰.۰۰۰ تومان"
             duration="۹۰ دقیقه"
             icon="brush"
             features={['آموزش عملی ویدئویی', 'پیدا کردن کرم‌پودر مناسب', 'تکنیک‌های کانتورینگ']}
          />
          <ServiceCard 
             title="آدیت کیف آرایش"
             desc="پاکسازی کامل میز آرایش شما و جایگزینی هوشمندانه."
             price="۳.۰۰۰.۰۰۰ تومان"
             duration="۱۲۰ دقیقه"
             icon="inventory_2"
             isPromo={true}
             features={['بررسی تک‌تک محصولات', 'جلوگیری از خریدهای اشتباه', 'سازماندهی میز آرایش', 'لیست خرید ضروری']}
          />
          <ServiceCard 
             title="درخشش عروس"
             desc="برنامه ۳ ماهه جامع برای آماده‌سازی پوست برای روز بزرگ."
             price="۵.۰۰۰.۰۰۰ تومان"
             duration="پکیج ۳ ماهه"
             icon="diamond"
             features={['برنامه غذایی پوست', '۳ جلسه مشاوره چکاپ', 'مشاوره انتخاب میکاپ آرتیست']}
          />
       </div>

       {/* Comparison Table */}
       <div className="max-w-5xl mx-auto px-6 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-8 text-center">مقایسه ویژگی‌ها</h2>
          <div className="overflow-x-auto">
             <table className="w-full text-right">
                <thead>
                   <tr className="border-b-2 border-primary/10 text-primary">
                      <th className="p-4">ویژگی‌ها</th>
                      <th className="p-4 text-center">مراقبت پوست</th>
                      <th className="p-4 text-center">استادی میکاپ</th>
                      <th className="p-4 text-center">آدیت کیف آرایش</th>
                      <th className="p-4 text-center">پکیج عروس</th>
                   </tr>
                </thead>
                <tbody className="text-sm">
                   {[
                      { name: 'مدت زمان', v1: '۴۵ دقیقه', v2: '۹۰ دقیقه', v3: '۱۲۰ دقیقه', v4: '۳ ماه' },
                      { name: 'آنالیز محصولات', v1: false, v2: true, v3: true, v4: true },
                      { name: 'لیست خرید', v1: true, v2: true, v3: true, v4: true },
                      { name: 'پشتیبانی', v1: '۱ ماه', v2: '۲ هفته', v3: '۱ ماه', v4: '۳ ماه' },
                   ].map((row: any, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                         <td className="p-4 font-bold">{row.name}</td>
                         <td className="p-4 text-center">{typeof row.v1 === 'boolean' ? (row.v1 ? 'check' : 'remove') : row.v1}</td>
                         <td className="p-4 text-center">{typeof row.v2 === 'boolean' ? (row.v2 ? 'check' : 'remove') : row.v2}</td>
                         <td className="p-4 text-center text-primary font-bold">{typeof row.v3 === 'boolean' ? (row.v3 ? 'check' : 'remove') : row.v3}</td>
                         <td className="p-4 text-center">{typeof row.v4 === 'boolean' ? (row.v4 ? 'check' : 'remove') : row.v4}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
};

export default Services;