import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/30 via-transparent to-accent-950/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />

      <div className="container-max relative px-4 sm:px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white">GS Events</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">& Catering</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Creating unforgettable moments through exceptional event management, stunning decorations, and exquisite catering across India.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="transition-colors hover:text-primary-400">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary-400">About Us</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Services</Link></li>
              <li><Link to="/gallery" className="transition-colors hover:text-primary-400">Gallery</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Grand Weddings</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Thread Ceremonies</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Birthday Parties</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Corporate Events</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-400">Catering Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" />
                <span>info@gsevents.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} GS Events and Catering. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 text-accent-500 fill-accent-500" /> in India
          </p>
          <Link
            to="/admin-login"
            className="text-[11px] text-neutral-700 hover:text-neutral-500 transition-colors"
            aria-label="Admin login"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
