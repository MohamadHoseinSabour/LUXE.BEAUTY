import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import About from './pages/About';
import MediaKit from './pages/MediaKit';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-primary font-bold" : "hover:text-primary transition-colors";

  return (
    <nav className="fixed w-full z-50 bg-background-light/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-wide">
          LUXE<span className="text-gray-400 font-sans font-light">.BEAUTY</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className={isActive('/')}>خانه</Link>
          <Link to="/about" className={isActive('/about')}>درباره من</Link>
          <Link to="/services" className={isActive('/services')}>خدمات</Link>
          <Link to="/portfolio" className={isActive('/portfolio')}>نمونه کارها</Link>
          <Link to="/blog" className={isActive('/blog')}>بلاگ</Link>
          <Link to="/media-kit" className={isActive('/media-kit')}>همکاری</Link>
        </div>

        <div className="hidden md:flex">
          <Link to="/booking" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-all shadow-lg shadow-primary/20">
            رزرو مشاوره
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-2">
          <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-light border-b border-gray-200 p-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4 text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">خانه</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">درباره من</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">خدمات</Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">نمونه کارها</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">بلاگ</Link>
            <Link to="/media-kit" onClick={() => setIsOpen(false)} className="py-2 text-gray-700 hover:text-primary">همکاری با برندها</Link>
            <Link to="/booking" onClick={() => setIsOpen(false)} className="py-3 bg-primary text-white rounded-lg">رزرو مشاوره</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tight mb-6 block text-white">
              LUXE<span className="text-primary font-sans font-light">.BEAUTY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-7 mb-6">
              مجله تخصصی و پلتفرم مشاوره زیبایی، متمرکز بر سلامت پوست، آرایش مدرن و سبک زندگی لوکس.
            </p>
            <div className="flex gap-4">
               {['instagram', 'twitter', 'linkedin'].map(icon => (
                 <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                   <span className="text-xs opacity-70">Social</span>
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-light">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">خانه</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">درباره من</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">خدمات مشاوره</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">رزرو وقت</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-primary-light">موضوعات داغ</h4>
             <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">روتین پوست چرب</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ترندهای آرایشی ۲۰۲۴</a></li>
                <li><a href="#" className="hover:text-white transition-colors">محصولات وگان</a></li>
                <li><a href="#" className="hover:text-white transition-colors">مراقبت مو</a></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-primary-light">خبرنامه</h4>
            <p className="text-gray-400 text-sm mb-4">آخرین اخبار زیبایی را دریافت کنید.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="آدرس ایمیل شما" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full bg-primary text-white font-bold rounded-full px-4 py-3 text-sm hover:bg-primary-light transition-colors">
                عضویت
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Luxe Beauty Consultancy. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">قوانین و مقررات</a>
            <a href="#" className="hover:text-white">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-background-light">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/media-kit" element={<MediaKit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}