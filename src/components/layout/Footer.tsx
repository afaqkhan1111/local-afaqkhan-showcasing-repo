import React from "react";
import { Facebook, Instagram, Github, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white py-10 md:py-12">
      <div className="container-custom">
        {/* Desktop/Tablet layout */}
        <div className="hidden md:grid grid-cols-3 gap-10 md:gap-8 justify-items-center items-start text-center">
          {/* About Section */}
          <div className="flex flex-col items-center col-span-1">
            <h3 className="text-2xl font-bold mb-4">Afaq Khan</h3>
            <p className="mb-4 text-gray-300 max-w-xs text-left">
              Creating exceptional digital experiences that help businesses thrive in the digital age.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/nexgen-soluation-fyp/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/hypersoftdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="GitHub">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/share/1MzTKdkcVP/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/nexgensolutionsfyp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@NexGenSoluationsFYP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="YouTube">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start text-left col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-2 text-gray-300">Peshawar, Pakistan</p>
            <p className="mb-2 text-gray-300">Email: afaqkhan.net.com</p>
            <p className="mb-2 text-gray-300">Phone: +92 3709425104</p>
          </div>
        </div>

        {/* Mobile layout: Quick Links on the right, Contact Info on the left */}
        <div className="md:hidden">
          {/* About Section (full width) */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Afaq Khan</h3>
            <p className="mb-4 text-gray-300 max-w-xs">
              Creating exceptional digital experiences that help businesses thrive in the digital age.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/nexgen-soluation-fyp/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/hypersoftdev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="GitHub">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/share/1MzTKdkcVP/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/nexgensolutionsfyp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@NexGenSoluationsFYP" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="YouTube">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 items-start">
            {/* Contact Info (left) */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <p className="mb-2 text-gray-300">Peshawar, Pakistan</p>
              <p className="mb-2 text-gray-300">Email: afaqkhan.net.com</p>
              <p className="mb-2 text-gray-300">Phone: +92 3709425104</p>
            </div>

            {/* Quick Links (right) */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-accent transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-accent transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 md:mt-8 md:pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Afaq Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;