import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { services, galleryImages, testimonials, LOGO_URL, HERO_IMAGE_URL } from './constants';
import type { GalleryImage, Testimonial } from './types';
import { AnimatedSection } from './hooks/useOnScreen';

const Hero: React.FC = () => (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-brand-navy opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}></div>
        <div className="relative z-20 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Manlyne Projects</h1>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-gold mt-2">Cleaning & Plumbing Services</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                Hospital-grade cleaning, reliable plumbing & striking landscapes — trained teams, insured, BEE Level 4.
            </p>
            <a href="#contact" className="mt-8 inline-block bg-brand-gold text-brand-navy font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                Request a Quote
            </a>
        </div>
    </section>
);

const Services: React.FC = () => (
    <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
                <h2 className="text-4xl font-serif font-bold text-brand-navy">Our Premier Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    We provide a comprehensive range of services, executed with professionalism and precision.
                </p>
            </AnimatedSection>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <AnimatedSection key={index}>
                        <div className="bg-brand-cream p-8 rounded-lg shadow-lg h-full flex flex-col">
                            <div className="flex-shrink-0 mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                                {service.icon}
                            </div>
                            <h3 className="mt-6 text-2xl font-serif font-bold text-brand-navy">{service.title}</h3>
                            <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                            <ul className="mt-4 text-left space-y-2">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-5 h-5 mr-2 text-brand-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

const About: React.FC = () => (
    <section id="about" className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                 <AnimatedSection>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy">Welcome to Manlyne Projects</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-gray-700">
                        Manlyne Projects (trading as Manlyne Cleaning Services) was established in 2009 to deliver first-class cleaning, plumbing and landscaping solutions. We are fully insured, BEE Level 4 affiliated and committed to professional standards, continuous training and exceptional customer service.
                    </p>
                </AnimatedSection>
            </div>
            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy">Our Vision & Mission</h3>
                            <p className="mt-2 text-gray-600">Our vision is to be the leading service provider in our industry, known for our reliability and innovation. Our mission is to build lasting client relationships through professional, trained staff, continuous improvement, and a passion for what we do.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy">Our Way of Doing Business</h3>
                            <p className="mt-2 text-gray-600">We believe in a partnership approach. We listen to our customer's feedback and constantly innovate our methods and equipment to deliver value-for-money and superior results. Cleaning is our passion, and excellence is our standard.</p>
                        </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <h4 className="text-xl font-serif font-bold text-brand-navy border-b pb-2 border-gray-200">Company Details</h4>
                        <ul className="mt-4 space-y-3 text-gray-700">
                            <li className="flex justify-between"><strong>Established:</strong> <span>2009</span></li>
                            <li className="flex justify-between"><strong>CK No.:</strong> <span>2016/518212/07</span></li>
                            <li className="flex justify-between"><strong>Tax Ref:</strong> <span>9986215169</span></li>
                            <li className="flex justify-between"><strong>Insurance:</strong> <span>Fully Insured</span></li>
                            <li className="flex justify-between items-center"><strong className="mr-4">BEE Affiliation:</strong> <span className="text-right font-bold text-brand-gold bg-brand-navy px-2 py-1 rounded">Level 4</span></li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </section>
);

const WhyChooseUs: React.FC = () => (
  <section id="why-us" className="py-20 bg-white" style={{backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`}}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <AnimatedSection>
          <h2 className="text-4xl font-serif font-bold text-brand-navy">Why Choose Manlyne Projects?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Our commitment to excellence is what sets us apart. We invest in our people, our equipment, and our client relationships.
          </p>
        </AnimatedSection>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Highly Trained Staff', description: 'Our team undergoes continuous professional training to master the latest techniques and safety standards.', icon: '🎓' },
          { title: 'State-of-the-Art Equipment', description: 'We use industry-leading, specialized equipment to ensure efficient and high-quality results for every job.', icon: '🔬' },
          { title: 'Customer Partnership', description: 'We work with you, not just for you. Your feedback is vital to our shared success and long-term partnership.', icon: '🤝' },
          { title: 'Safety & Compliance', description: 'We adhere to the strictest safety protocols and are fully insured, giving you complete peace of mind.', icon: '🛡️' },
          { title: 'Reliability & Trust', description: 'Founded in 2009, our track record of reliability makes us a trusted partner for businesses and homeowners alike.', icon: '📅' },
          { title: 'Passion for Perfection', description: 'For us, cleaning and maintenance is more than a job—it\'s a passion. We take pride in delivering perfection.', icon: '❤️' },
        ].map((item, index) => (
          <AnimatedSection key={index}>
            <div className="bg-brand-cream p-6 rounded-lg shadow-lg text-center h-full">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const Gallery: React.FC<{ onImageClick: (image: GalleryImage) => void }> = ({ onImageClick }) => {
    const [filter, setFilter] = useState<'all' | GalleryImage['category']>('all');
    const filters: { key: typeof filter, label: string }[] = [
        { key: 'all', label: 'All' },
        { key: 'cleaning', label: 'Cleaning' },
        { key: 'plumbing', label: 'Plumbing' },
        { key: 'landscaping', label: 'Landscaping' },
        { key: 'renovation', label: 'Renovation' },
    ];

    const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

    return (
        <section id="gallery" className="py-20 bg-brand-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy">Our Work</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">A showcase of our commitment to quality and craftsmanship.</p>
                </AnimatedSection>
                <AnimatedSection className="mt-8 flex justify-center space-x-2 md:space-x-4">
                    {filters.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors ${
                                filter === key ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy hover:bg-gray-200'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </AnimatedSection>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map(image => (
                         <AnimatedSection key={image.id}>
                            <div className="group relative overflow-hidden rounded-lg cursor-pointer" onClick={() => onImageClick(image)}>
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">{image.caption}</p>
                                </div>
                            </div>
                         </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="mt-8 relative max-w-3xl mx-auto h-48">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <blockquote className="text-xl italic">"{testimonial.quote}"</blockquote>
              <cite className="block mt-4 not-italic font-semibold text-brand-gold">{testimonial.author}, <span className="text-gray-300 font-normal">{testimonial.company}</span></cite>
            </div>
          ))}
        </div>
         <div className="flex justify-center space-x-3 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-gold' : 'bg-gray-500 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC<{ setFormSubmitted: (submitted: boolean) => void }> = ({ setFormSubmitted }) => {
    const [formData, setFormData] = useState({ name: '', tel: '', email: '', enquiry: '' });
    const [errors, setErrors] = useState({ name: '', tel: '', email: '', enquiry: '' });

    const validate = () => {
        const newErrors = { name: '', tel: '', email: '', enquiry: '' };
        let isValid = true;
        if (!formData.name) {
            newErrors.name = 'Contact Name is required.';
            isValid = false;
        }
        if (!formData.tel) {
            newErrors.tel = 'Contact Tel is required.';
            isValid = false;
        } else if (!/^\+?\(?\d{1,4}\)?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,9}$/.test(formData.tel)) {
            newErrors.tel = 'Please enter a valid phone number.';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email Address is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
            isValid = false;
        }
        if (!formData.enquiry) {
            newErrors.enquiry = 'Enquiry message is required.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // In a real app, you would send this data to a server.
            // e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            setFormSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Contact Name *</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-navy focus:border-brand-navy`} />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Contact Tel *</label>
                <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.tel ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-navy focus:border-brand-navy`} />
                {errors.tel && <p className="mt-1 text-sm text-red-600">{errors.tel}</p>}
            </div>
             <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-navy focus:border-brand-navy`} />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">Enquiry *</label>
                <textarea name="enquiry" id="enquiry" rows={4} value={formData.enquiry} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.enquiry ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-navy focus:border-brand-navy`}></textarea>
                {errors.enquiry && <p className="mt-1 text-sm text-red-600">{errors.enquiry}</p>}
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-brand-navy bg-brand-gold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-transform transform hover:scale-105">
                    Send Enquiry
                </button>
            </div>
        </form>
    );
};

const Contact: React.FC<{ setFormSubmitted: (submitted: boolean) => void }> = ({ setFormSubmitted }) => (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="text-4xl font-serif font-bold text-brand-navy">Request a Quote</h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">Get in touch with us today for a no-obligation consultation and quote.</p>
            </AnimatedSection>
            <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 bg-brand-cream p-8 rounded-lg shadow-xl">
                 <AnimatedSection>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy">Contact Information</h3>
                    <p className="mt-2 text-gray-600">We are ready to assist you. Reach out via phone, fax, or email.</p>
                    <div className="mt-8 space-y-4 text-gray-700">
                        <p className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><strong className="mr-2">Telephone:</strong> <a href="tel:0110796042" className="hover:text-brand-gold">011 079 6042</a></p>
                        <p className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg><strong className="mr-2">Fax Number:</strong> 086 590 6899</p>
                        <p className="flex items-center"><svg className="w-6 h-6 mr-3 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><strong className="mr-2">Email:</strong> <a href="mailto:info@manlyne.co.za" className="hover:text-brand-gold">info@manlyne.co.za</a></p>
                    </div>
                 </AnimatedSection>
                 <AnimatedSection>
                    <ContactForm setFormSubmitted={setFormSubmitted} />
                 </AnimatedSection>
            </div>
        </div>
    </section>
);


const App: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleImageClick = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const closeFormModal = () => {
        setFormSubmitted(false);
    };

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <About />
                <WhyChooseUs />
                <Testimonials />
                <Gallery onImageClick={handleImageClick} />
                <Contact setFormSubmitted={setFormSubmitted} />
            </main>
            <Footer />
            
            <a href="tel:0110796042" className="fixed bottom-4 right-4 bg-brand-gold text-brand-navy p-4 rounded-full shadow-lg z-30 md:hidden hover:bg-yellow-500 transition-colors" aria-label="Call Now">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>

            <Modal isOpen={!!selectedImage} onClose={closeModal}>
                {selectedImage && (
                    <div>
                        <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[80vh] object-contain rounded-md" />
                        <p className="mt-2 text-center text-gray-700 font-semibold">{selectedImage.caption}</p>
                    </div>
                )}
            </Modal>

            <Modal isOpen={formSubmitted} onClose={closeFormModal}>
                <div className="p-8 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="mt-4 text-2xl font-serif text-brand-navy">Thank you!</h3>
                    <p className="mt-2 text-gray-600">Your enquiry has been sent successfully. We will get back to you shortly.</p>
                    <p className="mt-4 text-sm text-gray-500">A confirmation has been sent to info@manlyne.co.za.</p>
                    <button onClick={closeFormModal} className="mt-6 inline-block bg-brand-navy text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
                        Close
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default App;