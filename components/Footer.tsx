import React from 'react';
import { LOGO_URL } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-gold transition-colors" aria-label={label}>
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-navy text-brand-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & Info */}
                    <div className="space-y-4">
                        <a href="#home" className="inline-flex items-center space-x-3">
                            <img src={LOGO_URL} alt="Manlyne Projects Logo" className="h-12 w-auto bg-white/20 p-2 rounded" />
                            <span className="font-serif font-bold text-xl text-white">Manlyne Projects</span>
                        </a>
                        <p className="text-sm text-gray-300">
                            Delivering first-class cleaning, plumbing, and landscaping solutions since 2009.
                        </p>
                        <div className="flex space-x-4">
                           <SocialIcon href="#" label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                           </SocialIcon>
                           <SocialIcon href="#" label="Twitter / X">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                           </SocialIcon>
                           <SocialIcon href="#" label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                           </SocialIcon>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Our Work</a></li>
                            <li><a href="#contact" className="hover:text-brand-gold transition-colors">Request a Quote</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                     <div>
                        <h3 className="text-lg font-serif font-bold text-white">Our Services</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-brand-gold transition-colors">Cleaning Services</a></li>
                            <li><a href="#services" className="hover:text-brand-gold transition-colors">Plumbing & Electrical</a></li>
                            <li><a href="#services" className="hover:text-brand-gold transition-colors">Landscaping & Garden</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                            <li className="flex items-start"><span className="font-semibold mr-2 w-12">Phone:</span> <a href="tel:0110796042" className="hover:text-brand-gold">011 079 6042</a></li>
                            <li className="flex items-start"><span className="font-semibold mr-2 w-12">Fax:</span> <span>086 590 6899</span></li>
                            <li className="flex items-start"><span className="font-semibold mr-2 w-12">Email:</span> <a href="mailto:info@manlyne.co.za" className="hover:text-brand-gold break-all">info@manlyne.co.za</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Manlyne Projects. All Rights Reserved.</p>
                     <p className="mt-1">CK No. 2016/518212/07 | Tax ref: 9986215169</p>
                     <p className="mt-4">Designed & Created by Lovemore Manyuwa</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;