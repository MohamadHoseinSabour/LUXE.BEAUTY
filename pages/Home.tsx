import React from 'react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from './Portfolio'; // Reuse component

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center bg-[#FDFBF7] overflow-hidden pt-40 pb-20 lg:pt-24">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-[100px] hidden lg:block"></div>
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-gold/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Content - Visually Right in RTL */}
        <div className="w-full lg:w-1/2 space-y-8 text-right order-2 lg:order-1 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10 w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">پذیرش مشاوره پاییزه</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.3] tracking-tight">
            زیبایی شما، <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-primary italic">داستان منحصر</span>
              <svg className="absolute -bottom-3 right-0 w-full h-4 text-primary/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> 
             <span className="mr-2">به فرد شماست</span>
          </h1>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
             ما در لوکس بیوتی با ترکیب علم درماتولوژی و هنر زیبایی‌شناسی، مسیری اختصاصی برای درخشش طبیعی شما طراحی می‌کنیم.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/booking" className="group relative px-8 py-4 bg-primary text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/40 transition-all active:scale-95">
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
               <span className="relative font-bold text-base">رزرو وقت مشاوره</span>
            </Link>
            <Link to="/portfolio" className="group flex items-center gap-3 px-6 py-4 text-gray-700 font-bold hover:text-primary transition-colors">
               <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons text-lg rotate-180">arrow_right_alt</span>
               </span>
               <span className="underline decoration-transparent group-hover:decoration-primary underline-offset-4 transition-all">نمونه کارها</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-8 border-t border-gray-100 max-w-md">
             <div className="flex -space-x-4 space-x-reverse">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                     <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="client" className="w-full h-full object-cover"/>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-bold shadow-sm z-10">
                   +2k
                </div>
             </div>
             <div>
                <div className="flex text-yellow-400 text-sm mb-1">
                   {[1,2,3,4,5].map(i => <span key={i} className="material-icons text-base">star</span>)}
                </div>
                <p className="text-xs font-bold text-gray-500">رضایت زیباجویان ما</p>
             </div>
          </div>
        </div>

        {/* Image Content - Visually Left in RTL */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
           <div className="relative z-10 px-4 md:px-12 lg:px-0">
              {/* Main Image Container */}
              <div className="aspect-[4/5] rounded-[2.5rem] rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden shadow-2xl border-[6px] border-white relative group">
                 <img 
                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop" 
                   alt="Beauty Portrait" 
                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 
                 {/* Floating Glass Element */}
                 <div className="absolute bottom-8 right-8 left-8 bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-2xl shadow-xl">
                    <div className="flex justify-between items-center">
                       <div>
                          <p className="text-white/80 text-xs mb-1">محصول پیشنهادی ماه</p>
                          <p className="text-white font-bold text-sm">سرم ویتامین C خالص</p>
                       </div>
                       <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                          <span className="material-icons text-xl">arrow_back</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 w-24 h-24 bg-[#F2E6E8] rounded-full blur-xl -z-10"></div>
           <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/10 rounded-full -z-10"></div>
           <div className="absolute top-10 -right-4 text-[10rem] opacity-5 font-serif text-primary select-none z-0 pointer-events-none">Beauty</div>
        </div>

      </div>
    </div>
  </section>
);

const Logos = () => (
  <div className="bg-white py-10 border-b border-gray-100">
     <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">همکاری با برترین برندهای جهانی</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 font-serif font-bold text-2xl text-gray-800">
           <span>VOGUE</span>
           <span>ELLE</span>
           <span>CHANEL</span>
           <span>Harpers BAZAAR</span>
        </div>
     </div>
  </div>
);

const AboutPreview = () => (
  <section className="py-24 bg-background-light relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Content Side (Right in RTL) */}
        <div className="w-full md:w-1/2 space-y-6 text-right order-1 md:order-1">
           <h2 className="text-4xl font-serif font-bold text-gray-900">درباره سارا</h2>
           <h3 className="text-xl text-primary font-medium">مشاور زیبایی و بلاگر سبک زندگی</h3>
           <p className="text-gray-600 leading-8 text-lg">
             با بیش از ۱۰ سال تجربه در صنعت زیبایی و همکاری با معتبرترین مجلات مد خاورمیانه، من اینجا هستم تا تجربیاتم را با شما به اشتراک بگذارم. هدف من ساده‌سازی روتین‌های پیچیده و معرفی محصولاتی است که واقعاً کار می‌کنند.
           </p>
           <p className="text-gray-600 leading-8 text-lg">
             از تهران تا دبی، من به دنبال جدیدترین ترندها و علمی‌ترین روش‌های مراقبت از پوست هستم تا شما همیشه بهترین نسخه خودتان باشید.
           </p>
           <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { num: "10+", label: "سال تجربه" },
                { num: "50k+", label: "مخاطب فعال" },
                { num: "100+", label: "همکاری موفق" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <span className="block text-3xl font-bold text-primary font-display">{stat.num}</span>
                  <span className="text-xs text-gray-500 mt-1 block">{stat.label}</span>
                </div>
              ))}
           </div>
           <Link to="/about" className="inline-flex items-center text-primary font-bold mt-4 hover:gap-2 transition-all">
              بیشتر بدانید <span className="material-icons rotate-180 mr-1">arrow_right_alt</span>
           </Link>
        </div>

        {/* Image Side (Left in RTL) */}
        <div className="w-full md:w-1/2 relative order-2 md:order-2">
           <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM0ZR67gh8lBISS1YIfMqs7IzDhin-QJAP-r6_6ufAyLwxshO-QzqTEKw2iegcoIQFZSr0lQ5PD3DVv_vsyUHFM3jbl0kPcYD3ODmByRAAsAmwzR0yK90ShtbWKCDh_17-tZUOcUmvNFTEUmXGCKbmj6FEHaLz7E0ZK4k5UWV0iWEM2yk2S563N1ctkq9MamlYq1FzmuL4E3FQwBTcAiXPtOe4Higrr4MG1zC7CHmn7j_EDaQVuK_jtiv2TFvlywHKkTAL-hlVuoI" 
                alt="Sarah" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-xs text-center border border-white/50">
                <p className="font-serif italic text-gray-800 text-lg leading-relaxed">"زیبایی از درون آغاز می‌شود، من فقط به آن جلوه می‌دهم."</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
       <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">خدمات ما</span>
       <h2 className="text-3xl font-serif font-bold mb-12 text-gray-900">تجربه‌ای منحصر به فرد</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'face', title: 'مشاوره پوست و زیبایی', desc: 'آنالیز تخصصی نوع پوست شما و ارائه روتین شخصی‌سازی شده با بهترین محصولات موجود در بازار.' },
            { icon: 'brush', title: 'آموزش خودآرایی', desc: 'یادگیری تکنیک‌های مدرن میکاپ که با فرم صورت شما هماهنگ است، از آرایش روزانه تا مجلسی.' },
            { icon: 'storefront', title: 'همکاری تجاری', desc: 'ارائه استراتژی‌های اینفلوئنسر مارکتینگ و تولید محتوای خلاقانه برای برندهای آرایشی و بهداشتی.' },
          ].map((srv, i) => (
            <div key={i} className="group bg-background-light p-10 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-50">
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                  <span className="material-icons text-3xl">{srv.icon}</span>
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-900">{srv.title}</h3>
               <p className="text-gray-500 text-sm leading-7 mb-6">{srv.desc}</p>
               <Link to="/services" className="inline-flex items-center text-primary font-bold text-sm gap-1 hover:gap-2 transition-all">
                  اطلاعات بیشتر <span className="material-icons text-sm rotate-180">arrow_right_alt</span>
               </Link>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const BeforeAfterSection = () => (
  <section className="py-20 bg-background-light overflow-hidden">
    <div className="container mx-auto px-6">
       <div className="flex flex-col md:flex-row items-center gap-16">
         <div className="w-full md:w-5/12 order-1 md:order-1">
           <span className="text-primary font-bold tracking-widest text-sm uppercase">نتایج واقعی</span>
           <h2 className="text-4xl font-serif font-bold mt-2 mb-6 text-gray-900 leading-tight">تحول پوست با روتین صحیح</h2>
           <p className="text-gray-600 mb-8 leading-relaxed text-justify">
             ببینید چگونه یک مشاوره درست و استفاده از محصولات مناسب می‌تواند بافت و درخشش پوست را تغییر دهد. این نتیجه تنها پس از ۳ ماه روتین اختصاصی حاصل شده است.
           </p>
           
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALtHtqxtUpp53ji_ybap9VF7PxLiFqoWjg3Ql4DJFA960uFOPs1E9vyqkAUBdOmgh9CNCW5rsEGNRPiRLKXDysGjZEO8j7PaHVWr4-VyK5XHJrD4qCUNHAHQXUB1k107LnIMqDxHPMDvdugf5ywhVCiig2wh75wEVUhVmEZUU6Nl4Y_hIjP-TTJ-Ob6NhUnO428cupD1j8V3EIQG4H_U6mEwf6clRCFrwIhnyznjWeBpTExJbL4Fa9zBS7sr6ysDDRHbFn3nAAnrk" alt="User" className="w-12 h-12 rounded-full object-cover" />
              <div>
                 <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm">مریم کاظمی</h4>
                    <div className="flex text-yellow-400 text-xs">
                       {[1,2,3,4,5].map(i => <span key={i} className="material-icons text-base">star</span>)}
                    </div>
                 </div>
                 <p className="text-gray-500 text-xs leading-5 italic">
                    "باورم نمیشه پوستم اینقدر تغییر کرده، ممنونم از مشاوره‌های دقیق و دلسوزانه."
                 </p>
              </div>
           </div>
         </div>
         <div className="w-full md:w-7/12 h-[500px] order-2 md:order-2">
            <BeforeAfterSlider />
            <p className="text-center text-xs text-gray-400 mt-4">برای مقایسه بکشید</p>
         </div>
       </div>
    </div>
  </section>
);

const LatestArticles = () => (
  <section className="py-24 bg-white">
     <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">مجله زیبایی</span>
              <h2 className="text-3xl font-serif font-bold text-gray-900">جدیدترین مقالات</h2>
           </div>
           <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              مشاهده همه <span className="material-icons rotate-180">arrow_right_alt</span>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               title: 'چگونه استرس روزانه را مدیریت کنیم؟',
               tag: 'سبک زندگی',
               date: '۱۴ مهر ۱۴۰۲',
               time: '۵ دقیقه مطالعه',
               img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAywjt7V_hGtwXjI3dJLo_UrnVMdtQkIXj26K8zQe4KObX3zEvujuO5r4vPiFh1Wvpv7buqT0vdu5S76aKimJbM-NeOKVP1__EWqZjgesC0diYWm7Xn2_OdV9Dio_KNfEakDR7pvVQf2wZGdXZvR1D65FuIF8wXaiy8aqaFzx44SLiXNo9IH_KbBoYUfLinyT7ma2FnEzrJYWqQw-jq9ms_VJ7LA9IjYsg74BG0Ix7Wxzorq1bZ_wsq7aIntgjaoOH6G8nRSyym4Jo',
               desc: 'استرس دشمن شماره یک زیبایی شماست. تکنیک‌های ساده مدیتیشن و رژیم‌درمانی برای آرامش ذهن.'
             },
             { 
               title: 'ترندهای آرایشی سال جدید: بازگشت به نچرال',
               tag: 'آرایش',
               date: '۱۰ مهر ۱۴۰۲',
               time: '۷ دقیقه مطالعه',
               img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClMojlEVVD_vWQrDPfWT_D3l7tCsCA9Pp6_1L1nXOZqlEVg7eXTzVq165GmlC2DYMf1zm2QI3ba_GsCnBjF52UI_rnQ2hG4bClOTPn7N5keNOQWZ7966MsmY7oIqvdQTP0uRr6IKSQWwsr8772sKozdk9Fr-U2cKhNhGnxk_WHGzW6wuDEatzbxO8VUa2Rr-TGzI3mvhUbR4iwVueCZKlOXyA-lOfbhUIRoH36I8YTJ8VjA7Px9g8YPdiU556uW5JPxHuFOGWayjg',
               desc: 'دیگر خبری از کانتورینگ‌های سنگین نیست. امسال همه چیز درباره درخشش طبیعی و پوست شاداب است.'
             },
             { 
               title: '۵ سرم ضروری برای پوست‌های خشک در پاییز',
               tag: 'مراقبت پوست',
               date: '۵ مهر ۱۴۰۲',
               time: '۴ دقیقه مطالعه',
               img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDIfhpgybCbr_WVBvg_iu6sMrZ_-bgp8optwfjKwDt1WcqPhajb61W0XmhWD5SjSa2nQ-UwAENDe1MQ1p-l_d5gb_80ZgAuhmqpw03tuFS7TcpTP7o-ZJIaRyfOWvnWM6rdsY8hNkbCmEj5jhtCTJvSjdZKOHrFi1VJ6uwcI4RRnk_bu4NxjZoX8d_9BL_F8sNbOqYClkMNl6BhlFY-QjVQ1tbPO_cBH5Xoz73MHOv4lb2HzUxhWYDEDUJOmkO6D8bzRT2NCwvRkw',
               desc: 'با شروع فصل سرما، روتین پوستی شما نیاز به تغییرات اساسی دارد. در این مقاله بهترین سرم‌های آبرسان را بررسی می‌کنیم.'
             }
           ].map((post, i) => (
             <Link to="/blog" key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800">{post.tag}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                   <span>{post.date}</span>
                   <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                   <span>{post.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.desc}</p>
             </Link>
           ))}
        </div>
        
        <Link to="/blog" className="flex md:hidden items-center justify-center gap-2 text-primary font-bold mt-8 border border-primary/20 rounded-full py-3">
            مشاهده همه مقالات
        </Link>
     </div>
  </section>
);

const BrandCTA = () => (
   <section className="bg-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
         <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">آیا صاحب یک برند زیبایی هستید؟</h2>
         <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            بیایید با هم داستانی ماندگار خلق کنیم. همکاری در زمینه معرفی محصول، نقد و بررسی تخصصی و کمپین‌های تبلیغاتی.
         </p>
         <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/media-kit" className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all">
               دریافت مدیا کیت
            </Link>
            <a href="mailto:contact@luxe.com" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
               تماس با مدیریت
            </a>
         </div>
      </div>
   </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <AboutPreview />
      <ServicesPreview />
      <BeforeAfterSection />
      <LatestArticles />
      <BrandCTA />
    </>
  );
};

export default Home;