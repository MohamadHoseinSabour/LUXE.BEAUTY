import React, { useState, useRef, useEffect } from 'react';

// Reusable Before/After Slider Component
export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0fMUqxg2CZTJyHDb8d7qY8dBDr22LukYgul-sgurQdg7S4mx8e2PMaKYZm4lofWzpFanX-kLkUPAQRfl_0nKxXQKVvgoyNzeXvmVMqktrDzjCIdkebDXp6cOT9RmOtjbRX9y8ip_KRFfLkrOKHKIutAu4QJKEgq7-u8NPoUMmwbE2xvabKDJNjdFsOt2Noq7dAsvPjhnKxBFJ5ov9AVJZezyYxorORtsKJz-ilXir_Z6fAUtXLI9OqVNR5RAlIB-WY6X86o6NStY" 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div 
        className="absolute top-0 right-0 bottom-0 overflow-hidden border-l-2 border-white"
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQBTV1OlXkSZz-Xdi7cnbaK7MHuX1h7UVqzFIh0F5dllid8bypRDBYFxfvnGse4_fIS_X2vDV_u0Uob_EEVt0C4wbaAzL-437UAe9GQlpU1RkB9t6vUAuRepUV3KK1JmK1ebeE7gCR7oqge73Mf6GP9hbU0nMNNW3gQUDrm08HqSb7d-N_u1-z4ZBN7ejpS9-EYvib51furlO7Iov0m72rRcpEZsuZywxqWzjmD6RTa1IrisJ0KHnCrScUOUVUg70DykWsTkjmqo" 
          alt="Before" 
          className="absolute top-0 right-0 w-full h-full object-cover max-w-none"
          style={{ width: `${100 / (1 - sliderPosition / 100)}%` }} // Counter-scale logic simplified, actually usually we just need width of container
        />
        {/* Simplified approach for responsive container: rely on absolute positioning. 
            However, the 'clip-path' approach from CSS example is easier. 
            Let's switch to Clip Path style for better RTL handling without complex width calcs.
        */}
      </div>
      
       {/* Re-implementing with clip-path for cleaner code */}
       <div className="absolute inset-0 w-full h-full bg-black" style={{ display: 'none' }}></div> 
       
       {/* The "Before" image overlaid */}
       <div 
         className="absolute inset-0 w-full h-full"
         style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
       >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQBTV1OlXkSZz-Xdi7cnbaK7MHuX1h7UVqzFIh0F5dllid8bypRDBYFxfvnGse4_fIS_X2vDV_u0Uob_EEVt0C4wbaAzL-437UAe9GQlpU1RkB9t6vUAuRepUV3KK1JmK1ebeE7gCR7oqge73Mf6GP9hbU0nMNNW3gQUDrm08HqSb7d-N_u1-z4ZBN7ejpS9-EYvib51furlO7Iov0m72rRcpEZsuZywxqWzjmD6RTa1IrisJ0KHnCrScUOUVUg70DykWsTkjmqo"
            alt="Before"
            className="w-full h-full object-cover"
          />
       </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="material-icons text-primary text-sm rotate-90">code</span>
        </div>
      </div>
      
      <span className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-30">قبل</span>
      <span className="absolute top-4 left-4 bg-white/80 text-primary px-3 py-1 rounded-full text-xs backdrop-blur-sm z-30">بعد</span>
    </div>
  );
};

const PortfolioItem = ({ img, category, title, tall }: { img: string, category: string, title: string, tall?: boolean }) => (
  <div className={`break-inside-avoid mb-6 group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500`}>
    <img src={img} alt={title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">{category}</span>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <div className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center">
         <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
            هنرِ <span className="font-serif italic text-primary">زیبایی</span>
         </h1>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از بهترین لحظات زیبایی. جایی که مینیمالیسم با تجمل روبرو می‌شود.
         </p>
         
         {/* Filter */}
         <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['همه', 'آرایش عروس', 'مراقبت پوست', 'قبل و بعد', 'همکاری‌ها'].map(tag => (
                <button key={tag} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${tag === 'همه' ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 border border-transparent hover:border-primary hover:text-primary'}`}>
                    {tag}
                </button>
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
           <PortfolioItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuD2e1vtXL4YS5PGYanroNnJm13rrcy2dNWIXF5jtqzakTZUzTsVxd4sI4n-myUQZN0NjJcdl5ccKI_PmhX17ekguBAajxQRevYDdxKQGAuxup6Ven6a8jesHu3jWFe5tNGStd9fOFwznh5BTDA90AgJrn_P2MQBiqksdT0s8XAw4vBh0paM2cBraSAC-tmDLlSVDEH3C6VTTk5XX8wV1YF7VMB3XMVpp1ZqjNjdPGbSRWHV4dRtUZLRH69KCxmWKWpWgkaKoCTZ2j8"
              category="آرایش" title="درخشش شبانه"
           />
           <PortfolioItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuB1VtmC_1EcglxtTlTMoJgNgGHuZmiavLyGg5ZwQPaaXmSyzcwmOVDBV0jThSyuWPltrbCGWQd-jtvofh1gNwGGLJKz0HWhijcGyHfNjMFvE7VFqhJB16x87LhUNq1GLjsnjNsM_Va2_2yjf6FnaFc7jWlJ_1-Y02slI4EMraO2KSvGJe2j_3u9TGMg3Cad64ZBcEQzM8Dt-wR5UsotEIX-iB2OwtqgPoRRqO0YseFf_tu_ytB-BAEgJLj8QRzNqFsYvlZTcYCMVz8"
              category="محصولات" title="روتین صبحگاهی"
           />
           <PortfolioItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAn94vkYQ_vwQ6j19GvlIZLaWQA8xSO5T499w2HjN5IZVJ1Jh8Ph4xltpbykk7utE4oeScanmRoKOmQ2XAGSef2VXsvpkGuARFX3FS4-N4IFhTgxVS8UblurWisLPV1KHO6cBKqWMnOW6EljSvTGBqvZ4_Lwqhi_XBldqhSnJKn_cFcfTDaoAra8O81jNfaTa0LWu8qMdVC98r5srauWk4GElmTUZuxrJU8moEwSpnICmmNPxIwDXzip8xyUp_FSv0gGk_PdCFznyw"
              category="طبیعی" title="زیبایی مینیمال"
           />
           <PortfolioItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZPAvk2_dNoYL-R__L1i-4e9FHpPYjF6OyxCom4aI5eZfYj0dhcfT1lGFXbbkaBtetnK6blzgOaiQnpXnHr5YgzrVeQIRowaFNxmvXrKlHqA234wOUPOZI7YkQ3Fw-_Rw5YnCPs3TjXG7nEkeZ8i8Yczzg_-L4M_rhP7wp-lI4-fOmtle5hZnaXVDfVDgqZ7_M_IfuCPcW80vaX-LbVJYdJrBDrCeV13DdYt8peu0FOmNiKgZMEOGtGPtc4jM-Mhle8z_f1_eKww"
              category="ابزار" title="ملزومات حرفه‌ای"
           />
            <PortfolioItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDDIfhpgybCbr_WVBvg_iu6sMrZ_-bgp8optwfjKwDt1WcqPhajb61W0XmhWD5SjSa2nQ-UwAENDe1MQ1p-l_d5gb_80ZgAuhmqpw03tuFS7TcpTP7o-ZJIaRyfOWvnWM6rdsY8hNkbCmEj5jhtCTJvSjdZKOHrFi1VJ6uwcI4RRnk_bu4NxjZoX8d_9BL_F8sNbOqYClkMNl6BhlFY-QjVQ1tbPO_cBH5Xoz73MHOv4lb2HzUxhWYDEDUJOmkO6D8bzRT2NCwvRkw"
              category="مراقبت" title="جوانسازی پوست"
           />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24">
         <h2 className="text-3xl font-light mb-8 text-right">ویدئوهای آموزشی</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: 'آموزش سایه چشم دودی', time: '2:45', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARD0rDppSoWgY-Kea6OLOQB3xl9rGomd0KStH3GSVgRgfdEBH2X4cZgvWiYuZKCIi4C6vD2gcwJBsqhJ6hYdpn57nGySgpcD5HHqnVjwzNRLox719GZ6MHiwre3Fs6CKhH6wTQmT5qbR4Tya2Viakr-9rVMHrvK9tfOlV92jSYV_PQA2ubBUhU3v_TDVXuZmvyU1pgMyT3rSVtbgecl42XgqVqkgE0vmD0ZGrji-Anz7RkkngApMFB_fdpGr5LZjX06KAgMbW1PRU' },
               { title: 'پشت صحنه عکاسی مدلینگ', time: '1:15', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJDnIHnhEpnx4rBkP4UvepY7UbrQWJ60k8ovgVtTBtE6B28wuUx5XHTaLqVpUJuiuD3gU5a4tbBFQT2W3ryo8V24booWw1NhQxYzTKlgkfDstjrIg-oqhKfQPFbpaNptyqjQClS3wN6aakLA6Vj4kFEM8mIoj_QyacFkjrwZKWK_0lOn_vJnWZ9H2L72ZZULQTxmV5kSiGRDPL0EX8YdOxfI-f-VJ5TX-TO4m2s6f7yi1sp-D1jbEzSw3UcRUiedPGGe8MT7VYRoo' },
               { title: 'ولاگ روزانه مراقبت پوست', time: '5:20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBka5nfAnHQMAH81La5KBplxSqbWrarRPu6B-y4kM3EEE6_IEqdzKeqPEn1Tfdjx7JaPomDU59WTZrRux9gTE7AQKPOlDxCvGhMrKFDMID5ZMMjf4m62ySvqbojjFOEiDPXySgpf3sGLuBVJNdnkhzwhDUl5W9gFzMB-HLfJ3yl-E3gLDPN9ifp_y1AMaUsoUDKcyWCN_Ja8C-uVyVBcoZgy6pyJW8gWXBoRaAaYtcZOcwffa-1t9hg3_1jEZIwRufSBXsS2kfYOQ0' },
            ].map((video, i) => (
                <div key={i} className="group relative rounded-lg overflow-hidden aspect-[4/5] bg-gray-200">
                    <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/50">
                            <span className="material-icons text-white text-4xl ml-1">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-medium text-sm">{video.title}</p>
                        <p className="text-gray-300 text-xs">{video.time} دقیقه</p>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Portfolio;