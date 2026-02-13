import React from 'react';

const About = () => {
  return (
    <div className="bg-background-light">
       <div className="py-24 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">مسیر زیبایی</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
       </div>
       
       <div className="max-w-4xl mx-auto px-6 pb-24 relative">
          <div className="absolute top-0 bottom-0 right-1/2 w-px bg-gray-300 hidden md:block"></div>
          
          <div className="space-y-24">
             {/* Timeline 1 */}
             <div className="relative md:flex items-center gap-12 group">
                <div className="hidden md:block absolute top-0 right-1/2 mr-[-12px] w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                <div className="md:w-1/2 md:pl-12 order-1 mb-6 md:mb-0">
                   <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqfOZOW08zc1wY6PXCi1JbDq3IbiMiJDjJdl8Nl5N_8n-0-5pzS5RoTiIxGLmlSzVoz-LZ2KIe2vHjDPumc64rKPRLUOtYg5tqUrPOgpUiY7-ABn4tAgfBeV_IYp4vq4ReEKdplBZQ7q6SasUAsL-NoY-wvY5w-86mRGU3TZjXCRtkZqKt5XACaz8GtiRZfFO5UUsc90kJnxgzBkg0Z85pJ7HkN3vVTN8OwnsUcJhKYVcnC_i_EfWMovpdanJ_PzvPaFH44dccrQM" className="w-full h-full object-cover" alt="Beginning" />
                   </div>
                </div>
                <div className="md:w-1/2 md:pr-12 order-2 text-right">
                   <span className="text-primary font-bold block mb-2">۱۳۸۸ - تهران</span>
                   <h3 className="text-2xl font-bold mb-4">کشف اشتیاق</h3>
                   <p className="text-gray-600 leading-loose text-justify">
                      همه چیز از حیاط خانه مادربزرگم شروع شد، جایی که عطر گلاب و روغن بادام همیشه در هوا بود. من یاد گرفتم که زیبایی آیینی است برای احترام به خود.
                   </p>
                </div>
             </div>
             
             {/* Timeline 2 */}
             <div className="relative md:flex items-center gap-12 group flex-row-reverse">
                <div className="hidden md:block absolute top-0 right-1/2 mr-[-12px] w-6 h-6 rounded-full bg-white border-4 border-primary shadow-lg"></div>
                <div className="md:w-1/2 md:pr-12 order-1 mb-6 md:mb-0">
                    <div className="aspect-square w-3/4 mx-auto rounded-full overflow-hidden shadow-xl border-8 border-white">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Qn3V19yqC9E3gnxjDJbKnyRAf7bK7TKIpJCrVkWGgFbLGCbspWoJtZKqyb2cCY0BjX7QC5rt_kqbNBqJeDyMeZBAzDwRcZBqPMg8JMy4CLPaNgXnO1OUtzpRaO28_RtEEXEBs6uOPH2sBBadd0_qYkHtLv4nXXuG9w_nUlSCOojjcfXsrS3Ik2UB8g-MkUSj7xy1Je5gmOcXIewvLTsi8wNgH2OhpTfTW838hQFFfKwWLABe3cWB_I9zi9QP8q1kvllwRv_uD18" className="w-full h-full object-cover" alt="Paris" />
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 text-right">
                   <span className="text-primary font-bold block mb-2">۱۳۹۴ - پاریس</span>
                   <h3 className="text-2xl font-bold mb-4">تخصص و دانش</h3>
                   <p className="text-gray-600 leading-loose text-justify">
                      برای درک عمیق‌تر پوست، به پاریس سفر کردم. تحصیل در رشته درماتولوژی زیبایی دیدگاه من را تغییر داد. آنجا بود که فهمیدم "مینیمالیسم" بهترین رویکرد است.
                   </p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default About;