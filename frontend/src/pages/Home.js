import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  BrainCircuit,
  Camera,
  Palette,
  Network,
  Server,
  Radio,
  Wifi,
  Code2,
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  Zap,
  Users,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const featuredServices = [
  {
    icon: Building2,
    title: "BTP & Génie Civil",
    desc: "Construction, rénovation et aménagement. Des bâtiments qui durent.",
    color: "#F0F9FF",
    iconColor: "#0EA5E9",
  },
  {
    icon: BrainCircuit,
    title: "Domotique",
    desc: "Maisons intelligentes, contrôle automatisé et confort de vie.",
    color: "#F0FDF4",
    iconColor: "#22C55E",
  },
  {
    icon: Camera,
    title: "Caméra Surveillance",
    desc: "Sécurisation de vos espaces avec des systèmes de pointe.",
    color: "#FFF7ED",
    iconColor: "#F97316",
  },
  {
    icon: Network,
    title: "Installation Réseau",
    desc: "Infrastructure réseau fiable, câblage structuré et Wi-Fi.",
    color: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    icon: Server,
    title: "Data Center",
    desc: "Solutions datacenter, hébergement et sauvegarde sécurisée.",
    color: "#FDF4FF",
    iconColor: "#9333EA",
  },
  {
    icon: Code2,
    title: "Apps Mobiles & Web",
    desc: "Développement sur mesure d'applications digitales performantes.",
    color: "#FFF1F2",
    iconColor: "#E11D48",
  },
];

const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "200+", label: "Clients satisfaits" },
  { value: "50+", label: "Techniciens experts" },
];

const reasons = [
  {
    icon: Shield,
    title: "Fiabilité garantie",
    desc: "Des solutions éprouvées avec un suivi après-projet rigoureux.",
  },
  {
    icon: Zap,
    title: "Réactivité maximale",
    desc: "Intervention rapide, équipe disponible 7j/7 pour vos urgences.",
  },
  {
    icon: Users,
    title: "Équipe pluridisciplinaire",
    desc: "Ingénieurs, techniciens et designers qui collaborent pour vous.",
  },
];

const testimonials = [
  {
    name: "Marc A.",
    role: "Directeur, Entreprise BTP",
    text: "JeufJeulTECH a transformé nos bureaux avec une installation réseau impeccable et un système de surveillance de qualité professionnelle.",
    stars: 5,
  },
  {
    name: "Sophie N.",
    role: "Propriétaire, Villa moderne",
    text: "La domotique installée par leur équipe est parfaite. Je contrôle tout depuis mon téléphone. Service irréprochable.",
    stars: 5,
  },
  {
    name: "David K.",
    role: "CEO, StartUp Tech",
    text: "Notre application mobile développée par JeufJeulTECH dépasse toutes nos attentes. Délais respectés, qualité au rendez-vous.",
    stars: 5,
  },
];

function StatItem({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center"
      data-testid={`stat-${index}`}
    >
      <div
        className="text-5xl md:text-6xl font-black text-white mb-2"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {value}
      </div>
      <div className="text-[#94A3B8] text-sm uppercase tracking-widest font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const reasonsRef = useRef(null);
  const reasonsInView = useInView(reasonsRef, { once: true, margin: "-100px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  return (
    <main data-testid="home-page">
      {/* ======== HERO ======== */}
      <section
        className="relative min-h-screen bg-[#0A1128] flex items-center overflow-hidden"
        data-testid="hero-section"
      >
        {/* Grid background */}
        <div className="absolute inset-0 hero-grid-bg opacity-100" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#2563EB]/20 blur-[80px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/6 w-56 h-56 rounded-full bg-[#00E5FF]/10 blur-[60px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/6 w-40 h-40 rounded-full bg-[#2563EB]/10 blur-[50px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

        {/* Decorative ring */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 border border-[#2563EB] rounded-full animate-spin-slow" />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-[#00E5FF]/50 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#93C5FD] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              data-testid="hero-badge"
            >
              <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse" />
              Votre partenaire technologique de confiance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="hero-title"
            >
              Solutions{" "}
              <span className="text-[#2563EB]">Intégrées</span>
              <br />
              pour votre{" "}
              <span className="hero-text-gradient">Avenir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              data-testid="hero-desc"
            >
              BTP, Domotique, Réseaux, Surveillance, Décoration et Développement
              Digital — JeufJeulTECH concrétise vos projets avec expertise et
              passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                data-testid="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#1D4ED8] transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              {["Certifié ISO", "Service 7j/7", "Garantie 2 ans"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#2563EB]/60" />
          <div className="w-1 h-1 rounded-full bg-[#2563EB] animate-pulse" />
        </div>
      </section>

      {/* ======== FEATURED SERVICES ======== */}
      <section
        ref={servicesRef}
        className="py-24 md:py-32 bg-white"
        data-testid="home-services-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-14">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              Ce que nous faisons
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-black text-[#0A1128] mt-3 mb-4 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nos domaines d'expertise
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              className="text-[#475569] text-base leading-relaxed"
            >
              De la construction à l'application mobile, nous couvrons l'ensemble
              de vos besoins technologiques et bâtimentaires.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={servicesInView ? "visible" : "hidden"}
                  className="group service-card bg-white border border-[#E2E8F0] rounded-lg p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
                  data-testid={`service-card-${i}`}
                >
                  <div
                    className="service-icon-wrapper w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.iconColor }} />
                  </div>
                  <h3
                    className="text-[#0A1128] font-bold text-lg mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#2563EB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="mt-10 text-center"
          >
            <Link
              to="/services"
              data-testid="all-services-link"
              className="inline-flex items-center gap-2 text-[#2563EB] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
            >
              Voir tous nos services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ======== STATS ======== */}
      <section className="py-20 md:py-24 bg-[#0A1128]" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 divide-y-0 divide-x-0 md:divide-x md:divide-white/10">
            {stats.map((s, i) => (
              <StatItem key={s.label} value={s.value} label={s.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ======== WHY US ======== */}
      <section
        ref={reasonsRef}
        className="py-24 md:py-32 bg-[#F8FAFC]"
        data-testid="why-us-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center mb-14">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={reasonsInView ? "visible" : "hidden"}
              className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              Pourquoi nous choisir
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={reasonsInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-black text-[#0A1128] mt-3 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              L'excellence à chaque projet
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={reasonsInView ? "visible" : "hidden"}
                  className="bg-white border border-[#E2E8F0] rounded-lg p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  data-testid={`reason-card-${i}`}
                >
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3
                    className="text-[#0A1128] font-bold text-xl mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section
        ref={testimonialsRef}
        className="py-24 md:py-32 bg-white"
        data-testid="testimonials-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-14">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              Témoignages
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-black text-[#0A1128] mt-3 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ce que disent nos clients
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-7 hover:shadow-md transition-all duration-300"
                data-testid={`testimonial-card-${i}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div>
                  <div
                    className="text-[#0A1128] font-bold text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[#94A3B8] text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA BANNER ======== */}
      <section
        className="py-20 md:py-24 bg-[#2563EB] relative overflow-hidden"
        data-testid="cta-banner"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full hero-grid-bg" />
        </div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Discutons de vos besoins. Notre équipe vous répond sous 24h avec un
            devis personnalisé.
          </p>
          <Link
            to="/contact"
            data-testid="cta-banner-button"
            className="inline-flex items-center gap-2 bg-white text-[#2563EB] font-black text-sm uppercase tracking-wider px-10 py-4 rounded-md hover:bg-[#0A1128] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
