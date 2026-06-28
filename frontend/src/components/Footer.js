import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const services = [
  "BTP & Génie Civil",
  "Domotique",
  "Caméra Surveillance",
  "Décoration Intérieure",
  "Installation Réseau",
  "Data Center",
  "Télécoms & BTS",
  "Tirage Fibre Optique",
  "Apps Mobiles & Web",
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#0A1128] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-baseline gap-0.5 mb-5">
              <span
                className="font-black text-2xl text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                JeufJeul
              </span>
              <span
                className="font-black text-2xl text-[#2563EB] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                TECH
              </span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Votre partenaire technologique de confiance. Solutions intégrées pour la construction, les réseaux et le digital.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                data-testid="footer-facebook"
                className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                data-testid="footer-linkedin"
                className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                data-testid="footer-instagram"
                className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nos Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-[#94A3B8] text-sm hover:text-white flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#2563EB] group-hover:translate-x-1 transition-transform duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Expertise
            </h4>
            <ul className="space-y-2.5">
              {services.slice(5).map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-[#94A3B8] text-sm hover:text-white flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#2563EB] group-hover:translate-x-1 transition-transform duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-[#94A3B8] text-sm hover:text-white flex items-center gap-2 group transition-colors duration-200"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] group-hover:translate-x-1 transition-transform duration-200" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-[#94A3B8] text-sm hover:text-white flex items-center gap-2 group transition-colors duration-200"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] group-hover:translate-x-1 transition-transform duration-200" />
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">
                  Siège social — Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <a
                  href="tel:+237000000000"
                  className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                >
                  +237 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <a
                  href="mailto:contact@jeufjeultech.com"
                  className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                >
                  contact@jeufjeultech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} JeufJeulTECH. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[#475569] text-xs hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-[#475569] text-xs hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
