
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountryGrid from './components/CountryGrid';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Corporate from './components/Corporate';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HowItWorks from './components/HowItWorks';
import { WHATSAPP_NUMBER, getWhatsAppLink, COMPANY_NAME } from './constants';

const App: React.FC = () => {
  const openWhatsApp = () => {
    window.open(getWhatsAppLink(`Hi ${COMPANY_NAME}, I'd like to book an appointment for a Visa.`), '_blank');
  };

  return (
    <div className="min-h-screen bg-professional selection:bg-[#ffd700]/30">
      <Header />
      <Hero />
      
      {/* Quick Services Overview Strip */}
      <div className="bg-white/5 backdrop-blur-md py-12 border-y border-white/5 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: 'fa-calendar-check', text: 'Priority Slots' },
            { icon: 'fa-plane', text: 'Travel Itinerary' },
            { icon: 'fa-hotel', text: 'Hotel Booking' }
          ].map((item) => (
            <div key={item.text} className="flex flex-col sm:flex-row items-center justify-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center text-[#ffd700] group-hover:bg-[#ffd700] group-hover:text-[#001026] transition-all duration-300">
                <i className={`fa-solid ${item.icon} text-xl`}></i>
              </div>
              <span className="font-black text-white text-sm sm:text-base uppercase tracking-[0.2em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <HowItWorks />
      <CountryGrid />
      
      {/* Direct WhatsApp Action Section */}
      <section className="bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#001026] rounded-[50px] p-8 md:p-20 flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/10">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
             
             <div className="relative w-64 h-64 sm:w-96 sm:h-96 flex-shrink-0">
                <div className="absolute inset-0 bg-[#ffd700]/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.15)]">
                   <i className="fa-brands fa-whatsapp text-[#25D366] text-9xl sm:text-[12rem]"></i>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#ffd700] text-[#001026] w-14 h-14 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-20">
                  <i className="fa-solid fa-bolt text-2xl sm:text-5xl"></i>
                </div>
             </div>
             
             <div className="text-center md:text-left text-white relative z-10 flex-1">
                <h2 className="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-[#ffd700]">
                  READY TO START?<br/>
                  <span className="text-white">CONSULT WITH US</span><br/>
                  <span className="text-[#ffd700]">TODAY.</span>
                </h2>
                <p className="mt-8 text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                  Have questions about your visa application? Our specialists are available for a free initial assessment via WhatsApp to guide you through the process.
                </p>
                <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={openWhatsApp}
                    className="px-12 py-5 bg-[#ffd700] text-[#001026] text-xl font-black rounded-3xl shadow-2xl hover:bg-white hover:scale-105 transition-all flex items-center group"
                  >
                    START ASSESSMENT < i className="fa-brands fa-whatsapp ml-3 text-3xl group-hover:scale-110 transition-transform"></i>
                  </button>
                  <div className="flex flex-col justify-center text-left">
                    <p className="text-[10px] font-black text-[#ffd700] uppercase tracking-[0.2em] mb-1">Office Hours (9am-6pm)</p>
                    <p className="text-xl font-black text-white">+44 7426 416286</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Services />
      
      <Corporate />
      <ContactForm />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-32 bg-[#001026] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter leading-none uppercase text-[#ffd700]">Expert Visa <br /><span className="text-white">Assistance</span></h2>
           <p className="text-white/70 text-xl mb-12 font-medium max-w-2xl mx-auto">
             {COMPANY_NAME} specializes in professional visa documentation and priority appointment booking support.
           </p>
           <a 
             href="#contact"
             className="px-16 py-6 bg-white text-[#001026] font-black text-2xl rounded-[2.5rem] shadow-2xl hover:bg-[#ffd700] hover:text-white transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center mx-auto group"
           >
             GET STARTED <i className="fa-solid fa-paper-plane ml-4 text-2xl group-hover:translate-x-2 transition-transform"></i>
           </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
