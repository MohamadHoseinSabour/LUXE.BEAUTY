import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ img, cat, date, title, excerpt }: any) => (
  <article className="group flex flex-col h-full bg-white rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-primary/5 cursor-pointer">
     <div className="relative overflow-hidden aspect-[4/3]">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">{cat}</span>
     </div>
     <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
           <span>{date}</span>
           <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
           <span>5 دقیقه مطالعه</span>
        </div>
        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">{excerpt}</p>
        <div className="mt-auto pt-4 border-t border-primary/5 flex justify-between items-center">
           <span className="text-primary text-sm font-medium group-hover:underline">بخوانید</span>
        </div>
     </div>
  </article>
);

const Blog = () => {
  return (
    <div className="bg-background-light pt-12 pb-24">
       {/* Hero / Featured Post */}
       <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="group relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO2Ix5vmgeFMXoAsRWjZbdjcU3pu8bEygyoNghC1JK53gEoicNw8z-d6fqHnljf6FitsqzomMKAFFWbeMeVyC03JSfsiexoI8mNzb7FP5cxaVgOAEyHXfhxq_AJQO5EfBvrpUc59M5uu4DTu0bh_RIlXXpaMlXxywcHEUF8wIfX1JpeqdJdp1VA0iuRmtkiYYmkPi3XS17R7OH5eUj6IsyR2Lkjy_rnYaO2shrMsZS18UsTZAmCVEtlbHaxDiaYt9VK53z888_n28" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute bottom-0 right-0 p-8 md:p-12 z-20 max-w-3xl text-white">
                <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Skincare</span>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">رازهای باستانی گلاب ایرانی برای پوستی درخشان</h1>
                <p className="text-lg text-white/80 line-clamp-2 max-w-2xl mb-6">کشف کنید چگونه این اکسیر سنتی می‌تواند روتین زیبایی مدرن شما را متحول کند.</p>
                <div className="flex items-center gap-2 border-b border-white/30 pb-1 w-fit hover:border-white transition-colors">
                   <span>ادامه مطلب</span>
                   <span className="material-icons text-sm rotate-180">arrow_right_alt</span>
                </div>
             </div>
          </div>
       </div>

       {/* Main Grid */}
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Posts */}
          <div className="lg:col-span-8">
             <div className="flex gap-4 overflow-x-auto pb-6 mb-4 no-scrollbar">
                {['همه', 'مراقبت پوست', 'آرایش', 'عطر', 'سبک زندگی'].map((cat, i) => (
                   <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-full border transition-colors ${i===0 ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}>
                      {cat}
                   </button>
                ))}
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BlogCard 
                   img="https://lh3.googleusercontent.com/aida-public/AB6AXuClMojlEVVD_vWQrDPfWT_D3l7tCsCA9Pp6_1L1nXOZqlEVg7eXTzVq165GmlC2DYMf1zm2QI3ba_GsCnBjF52UI_rnQ2hG4bClOTPn7N5keNOQWZ7966MsmY7oIqvdQTP0uRr6IKSQWwsr8772sKozdk9Fr-U2cKhNhGnxk_WHGzW6wuDEatzbxO8VUa2Rr-TGzI3mvhUbR4iwVueCZKlOXyA-lOfbhUIRoH36I8YTJ8VjA7Px9g8YPdiU556uW5JPxHuFOGWayjg"
                   cat="آرایش" title="مینیمالیسم در کیف آرایش شما" date="Sep 15, 2023" excerpt="چگونه با استفاده از محصولات کمتر، ظاهری زیباتر و طبیعی‌تر داشته باشیم."
                />
                <BlogCard 
                   img="https://lh3.googleusercontent.com/aida-public/AB6AXuAywjt7V_hGtwXjI3dJLo_UrnVMdtQkIXj26K8zQe4KObX3zEvujuO5r4vPiFh1Wvpv7buqT0vdu5S76aKimJbM-NeOKVP1__EWqZjgesC0diYWm7Xn2_OdV9Dio_KNfEakDR7pvVQf2wZGdXZvR1D65FuIF8wXaiy8aqaFzx44SLiXNo9IH_KbBoYUfLinyT7ma2FnEzrJYWqQw-jq9ms_VJ7LA9IjYsg74BG0Ix7Wxzorq1bZ_wsq7aIntgjaoOH6G8nRSyym4Jo"
                   cat="تندرستی" title="آیین حمام ایرانی برای آرامش ذهن" date="Aug 28, 2023" excerpt="بازگشتی به سنت‌های قدیمی حمام و پاکسازی بدن که روح را جلا می‌بخشد."
                />
                <BlogCard 
                   img="https://lh3.googleusercontent.com/aida-public/AB6AXuA6AWa_bh3mRI_gmDo99qLuTt4qkSd_T1cRI_757ISYodSJViiPl8p7l7XHjs0KBFSTAwnpolgsfOMZ6IUq8_Ya7LlRH9Pge_8vIOnTDjepLaWJ2JUP26UivVT4Lsq0NYdunNlShyhCcMs7Agd-5Zy47X6wyDmTUosXTK_jlmQSbCpPTBVxC5D-lGqpsX0Hilem-RsO-zfbv-lMEpEJhXaDfBDzyasgWuexWBfal92clzxtZaGgsNqWfu3rG0QlX4MvBi2CANyJnXw"
                   cat="عطر" title="انتخاب عطر امضا" date="Aug 12, 2023" excerpt="چگونه عطری را پیدا کنیم که بازتاب‌دهنده شخصیت درونی ما باشد؟"
                />
                <BlogCard 
                   img="https://lh3.googleusercontent.com/aida-public/AB6AXuABro10W5M0mKeVQtnfdim8QSmqTf-rYqkGdGbbjpssrfq8YDunwx1mvtU-R8xlASWaNlMILw9Dq8gAvHuhM5DMNvuY9TCCk0VtyX-wXSzuo3Dw8gEuODO7Va-WsVtJgnA1Sm7ifirzDaoA3WYsln1YdTSXH5Zp1PWPCqwVPBkwL3nbCJzmagM1tYUPH8Xg6ux40RQlWPsDz-KeNO9NEoNTCDz9IpPzqbdDBAiT03EXny9gxe63XCjrjByKiOet37R7P74gki_nIk4"
                   cat="مواد طبیعی" title="زعفران: طلای سرخ در روتین" date="Jul 30, 2023" excerpt="خواص شگفت‌انگیز زعفران برای شفافیت پوست و کاهش لکه‌های تیره."
                />
             </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
             <div className="bg-white p-8 rounded-lg border border-primary/5 text-center">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALtHtqxtUpp53ji_ybap9VF7PxLiFqoWjg3Ql4DJFA960uFOPs1E9vyqkAUBdOmgh9CNCW5rsEGNRPiRLKXDysGjZEO8j7PaHVWr4-VyK5XHJrD4qCUNHAHQXUB1k107LnIMqDxHPMDvdugf5ywhVCiig2wh75wEVUhVmEZUU6Nl4Y_hIjP-TTJ-Ob6NhUnO428cupD1j8V3EIQG4H_U6mEwf6clRCFrwIhnyznjWeBpTExJbL4Fa9zBS7sr6ysDDRHbFn3nAAnrk" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/20 p-1" alt="Blogger" />
                <h3 className="font-bold text-xl mb-2">سلام، سارا هستم</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">عاشق زیبایی، هنر و فرهنگ ایرانی. تجربیاتم را در مورد زیبایی مینیمال با شما به اشتراک می‌گذارم.</p>
                <Link to="/about" className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">داستان من</Link>
             </div>
             
             {/* Newsletter Widget */}
             <div className="bg-primary/5 p-8 rounded-lg border border-primary/10 text-center">
                <h4 className="font-bold text-lg mb-2">خبرنامه</h4>
                <p className="text-xs text-gray-500 mb-4">آخرین ترندها و نکات زیبایی را دریافت کنید.</p>
                <input className="w-full mb-3 px-4 py-3 rounded-lg border border-primary/20 text-sm focus:outline-none focus:border-primary" placeholder="ایمیل شما" />
                <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-bold">عضویت</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Blog;