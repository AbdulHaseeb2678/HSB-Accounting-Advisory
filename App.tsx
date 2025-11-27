import React, { useState } from 'react';
import { Menu, X, BarChart3, Calculator, FileCheck, Landmark, CheckCircle, Mail, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { Button } from './components/Button';
import { Logo } from './components/Logo';
import { AIAssistant } from './components/AIAssistant';
import { ServiceItem, TestimonialItem } from './types';

// Data Definitions
const SERVICES: ServiceItem[] = [
  {
    title: "Bookkeeping",
    description: "Accurate, timely, and compliant bookkeeping services. We ensure your books are always ready for review and tax season.",
    icon: FileCheck
  },
  {
    title: "Tax Preparation",
    description: "Strategic tax planning and preparation for individuals and businesses. Maximize deductions while staying compliant.",
    icon: Calculator
  },
  {
    title: "Payroll Services",
    description: "Seamless payroll processing, tax filing, and compliance management so you can focus on your team.",
    icon: Landmark
  },
  {
    title: "Business Advisory",
    description: "Data-driven insights to help you make informed decisions, manage cash flow, and scale your business.",
    icon: BarChart3
  }
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart Inc.",
    quote: "HSB Accounting transformed how we view our financials. They aren't just bookkeepers; they are strategic partners in our growth.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Michael Chen",
    role: "Freelance Architect",
    quote: "Professional, timely, and incredibly knowledgeable. Tax season used to be a nightmare, now it's a breeze.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "David Ross",
    role: "Owner, Ross Retail",
    quote: "The advisory services helped us identify key areas to cut costs. Highly recommend HSB to any small business owner.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const CALENDLY_LINK = "https://calendly.com/abdulhbwork/30min";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="hover:opacity-90 transition">
                <Logo className="h-10" />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary-700 font-medium transition">Services</a>
              <a href="#about" className="text-slate-600 hover:text-primary-700 font-medium transition">About Us</a>
              <a href="#testimonials" className="text-slate-600 hover:text-primary-700 font-medium transition">Testimonials</a>
              <Button href={CALENDLY_LINK} target="_blank" variant="primary" size="sm">
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a onClick={() => setIsMenuOpen(false)} href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Services</a>
              <a onClick={() => setIsMenuOpen(false)} href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">About Us</a>
              <a onClick={() => setIsMenuOpen(false)} href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Testimonials</a>
              <div className="px-3 py-2">
                <Button href={CALENDLY_LINK} target="_blank" fullWidth>Book Consultation</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section className="relative bg-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/1920/1080?grayscale&blur=2" 
              alt="Office background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                Precision Accounting <br/> 
                <span className="text-sky-400">For Growing Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
                We handle the numbers so you can focus on the vision. Professional bookkeeping, tax strategy, and advisory services tailored to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={CALENDLY_LINK} target="_blank" size="lg" variant="secondary">
                  Schedule Free Consultation
                </Button>
                <Button href="#services" size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
                  View Our Services
                </Button>
              </div>
            </div>
            {/* Hero Image/Illustration Element */}
            <div className="md:w-2/5 mt-12 md:mt-0 relative hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Monthly Status</p>
                    <p className="font-bold text-xl">Books Balanced</p>
                  </div>
                </div>
                 <div className="space-y-3">
                   <div className="h-2 bg-white/20 rounded w-full"></div>
                   <div className="h-2 bg-white/20 rounded w-5/6"></div>
                   <div className="h-2 bg-white/20 rounded w-4/6"></div>
                 </div>
                 <div className="mt-6 pt-6 border-t border-white/20">
                   <p className="text-sky-300 font-semibold flex items-center gap-2">
                     <BarChart3 size={18} />
                     24% Growth YoY
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 font-serif sm:text-4xl">Expert Financial Solutions</h2>
              <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive accounting services designed to keep your business compliant and profitable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="group p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Trust Section */}
        <section id="about" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/600/600?grayscale" alt="Team meeting" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary-900/30"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 font-serif mb-6">Why Choose HSB Accounting?</h2>
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    At <span className="font-semibold text-primary-700">HSB Accounting & Advisory</span>, we believe that behind every number is a story. Our mission is to help you write a success story by providing clarity, compliance, and confidence in your financials.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Dedicated Support Team",
                      "Cloud-Based Modern Technology",
                      "Proactive Tax Planning",
                      "Transparent Flat-Rate Pricing"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="text-accent-600 flex-shrink-0" size={20} />
                        <span className="text-slate-800 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Button href={CALENDLY_LINK} target="_blank" variant="outline">Learn More About Us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section (Embedded) */}
        <section id="booking" className="py-20 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Optimize Your Finances?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Schedule your free 30-minute discovery call directly below.
            </p>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto h-[700px]">
               {/* Using standard iframe for Calendly as requested by prompt to 'embed' */}
              <iframe 
                src={`${CALENDLY_LINK}?hide_landing_page_details=1&hide_gdpr_banner=1`} 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Schedule Appointment"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 font-serif mb-16">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-4xl text-white font-serif">"</div>
                  <p className="text-slate-600 italic mb-6 mt-4 relative z-10">{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer Area */}
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
              <div className="space-y-4">
                <Logo className="h-8 brightness-0 invert" />
                <p className="text-slate-400 text-sm">
                  Professional accounting tailored to your needs. We provide the financial clarity you need to grow your business with confidence.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="hover:text-sky-400 transition">Services</a></li>
                  <li><a href="#about" className="hover:text-sky-400 transition">About Us</a></li>
                  <li><a href="#testimonials" className="hover:text-sky-400 transition">Testimonials</a></li>
                  <li><a href={CALENDLY_LINK} target="_blank" className="hover:text-sky-400 transition">Book Online</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>Bookkeeping</li>
                  <li>Tax Preparation</li>
                  <li>Payroll Management</li>
                  <li>Financial Advisory</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-sky-500 mt-0.5" />
                    <span>123 Business Avenue,<br/>Suite 101, Finance City</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-sky-500" />
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-sky-500" />
                    <span>hello@hsbaccounting.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} HSB Accounting & Advisory. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <AIAssistant />
    </div>
  );
}

export default App;