import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/OkbaElkantara' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/okba-elkantara' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/okba_elkantara' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:techokba@gmail.com" className="hover:text-indigo-400">
                  techokba@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+213555000000" className="hover:text-indigo-400">
                  +213 555 000 000
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>El Kantara, Biskra, Algeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/attractions" className="hover:text-indigo-400">
                  Tourist Attractions
                </a>
              </li>
              <li>
                <a href="/accommodation" className="hover:text-indigo-400">
                  Where to Stay
                </a>
              </li>
              <li>
                <a href="/dining" className="hover:text-indigo-400">
                  Local Cuisine
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-indigo-400">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} El Kantara Tourism. Created by{' '}
            <a
              href="mailto:techokba@gmail.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Okba_Elkantara
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}