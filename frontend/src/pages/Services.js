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
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const allServices = [
  {
    icon: Building2,
    title: "BTP & Génie Civil",
    desc: "De la conception à la livraison, nous prenons en charge vos projets de construction et de rénovation avec des matériaux de qualité supérieure.",
    items: ["Construction neuve", "Rénovation & extension", "Gros œuvre & second œuvre", "Aménagement extérieur", "Travaux publics"],
    color: "#EFF6FF",
    iconBg: "#0EA5E9",
    accent: "#0EA5E9",
  },
  {
    icon: BrainCircuit,
    title: "Domotique",
    desc: "Automatisez votre habitat ou vos locaux professionnels pour un confort, une sécurité et une efficacité énergétique optimaux.",
    items: ["Contrôle d'éclairage", "Automatisation portes & volets", "Gestion énergie", "Scénarios personnalisés", "Pilotage à distance"],
    color: "#F0FDF4",
    iconBg: "#22C55E",
    accent: "#22C55E",
  },
  {
    icon: Camera,
    title: "Caméra de Surveillance",
    desc: "Protection 24h/24 de vos biens et de vos proches grâce à des systèmes de vidéosurveillance professionnels.",
    items: ["CCTV & IP Caméras", "Enregistrement cloud & local", "Détection de mouvement", "Accès à distance", "Alarmes connectées"],
    color: "#FFF7ED",
    iconBg: "#F97316",
    accent: "#F97316",
  },
  {
    icon: Palette,
    title: "Décoration Intérieure",
    desc: "Transformez vos espaces de vie et de travail en environnements esthétiques, fonctionnels et inspirants.",
    items: ["Design d'intérieur sur mesure", "Choix matériaux & mobilier", "Aménagement bureaux", "Décoration résidentielle", "Suivi de chantier"],
    color: "#FFF1F2",
    iconBg: "#E11D48",
    accent: "#E11D48",
  },
  {
    icon: Network,
    title: "Installation Réseau",
    desc: "Infrastructure réseau professionnelle pour entreprises et particuliers : fiabilité, performance et sécurité.",
    items: ["Câblage structuré RJ45", "Réseau Wi-Fi professionnel", "VPN & sécurité réseau", "Audit & diagnostic réseau", "Maintenance & support"],
    color: "#EFF6FF",
    iconBg: "#2563EB",
    accent: "#2563EB",
  },
  {
    icon: Server,
    title: "Data Center",
    desc: "Conception, installation et gestion de salles serveurs sécurisées pour une haute disponibilité de vos données.",
    items: ["Architecture datacenter", "Rack & serveurs", "Refroidissement & alimentation", "Sauvegardes & redondance", "Supervision 24/7"],
    color: "#FDF4FF",
    iconBg: "#9333EA",
    accent: "#9333EA",
  },
  {
    icon: Radio,
    title: "Télécoms & BTS",
    desc: "Déploiement et maintenance d'équipements télécom, stations BTS et solutions de connectivité avancées.",
    items: ["Installation antennes BTS", "Réseaux GSM & 4G/5G", "Équipements télécom", "Maintenance préventive", "Audit de couverture"],
    color: "#F0FDF4",
    iconBg: "#059669",
    accent: "#059669",
  },
  {
    icon: Wifi,
    title: "Tirage Fibre Optique",
    desc: "Raccordement fibre pour particuliers et entreprises. Connexion ultra-rapide et stable partout.",
    items: ["Tirage fibre FTTH/FTTO", "Soudure fibre optique", "Mesures réflectométriques", "Armoires de raccordement", "Certification réseau"],
    color: "#FFFBEB",
    iconBg: "#D97706",
    accent: "#D97706",
  },
  {
    icon: Code2,
    title: "Applications Mobiles & Web",
    desc: "Développement d'applications mobiles iOS/Android et de sites web performants, modernes et sur mesure.",
    items: ["Applications iOS & Android", "Sites web & e-commerce", "Applications métier", "APIs & intégrations", "Maintenance & évolutions"],
    color: "#FFF1F2",
    iconBg: "#DC2626",
    accent: "#DC2626",
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      custom={index % 3}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
      data-testid={`full-service-card-${index}`}
    >
      {/* Card top accent */}
      <div className="h-1" style={{ backgroundColor: service.accent }} />
      <div className="p-7">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
          style={{ backgroundColor: service.color }}
        >
          <Icon className="w-6 h-6" style={{ color: service.iconBg }} />
        </div>
        <h3
          className="text-[#0A1128] font-bold text-xl mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {service.title}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-5">{service.desc}</p>
        <ul className="space-y-2">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-[#475569]">
              <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.accent }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <main data-testid="services-page">
      {/* Page Header */}
      <section
        ref={headerRef}
        className="relative pt-32 pb-20 bg-[#0A1128] overflow-hidden"
      >
        <div className="absolute inset-0 hero-grid-bg opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#2563EB]/15 blur-[70px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#93C5FD] text-xs font-bold uppercase tracking-widest"
          >
            JeufJeulTECH
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="services-page-title"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-base md:text-lg max-w-xl"
          >
            9 domaines d'expertise pour répondre à tous vos besoins en
            technologie, construction et digital.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-28 bg-[#F8FAFC]" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {allServices.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1128]" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Un projet en tête ?
          </h2>
          <p className="text-[#94A3B8] text-base mb-8">
            Contactez-nous pour un devis gratuit et personnalisé selon vos besoins.
          </p>
          <Link
            to="/contact"
            data-testid="services-contact-cta"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
