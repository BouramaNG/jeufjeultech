import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Construction, ArrowRight, Bell } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const placeholders = [
  { title: "Projet BTP", cat: "Construction", color: "#EFF6FF", accent: "#2563EB" },
  { title: "Smart Home", cat: "Domotique", color: "#F0FDF4", accent: "#22C55E" },
  { title: "Réseau d'entreprise", cat: "Installation Réseau", color: "#FDF4FF", accent: "#9333EA" },
  { title: "Application Mobile", cat: "Développement", color: "#FFF7ED", accent: "#F97316" },
  { title: "Data Center", cat: "Infrastructure", color: "#F0FDF4", accent: "#059669" },
  { title: "Système de surveillance", cat: "Sécurité", color: "#FFF1F2", accent: "#E11D48" },
];

export default function Realisations() {
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });

  return (
    <main data-testid="realisations-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-[#2563EB]/15 blur-[70px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#93C5FD] text-xs font-bold uppercase tracking-widest"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="realisations-page-title"
          >
            Nos Réalisations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-base md:text-lg max-w-xl"
          >
            Découvrez bientôt nos projets réalisés, de la construction aux
            applications digitales.
          </motion.p>
        </div>
      </section>

      {/* Coming Soon */}
      <section
        ref={contentRef}
        className="py-24 md:py-32 bg-[#F8FAFC]"
        data-testid="realisations-content"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Main "Coming Soon" block */}
          <div className="max-w-2xl mx-auto text-center mb-20">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="w-20 h-20 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Construction className="w-10 h-10 text-[#2563EB]" />
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-black text-[#0A1128] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="coming-soon-title"
            >
              Bientôt disponible
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="text-[#475569] text-base leading-relaxed mb-8"
            >
              Nous travaillons actuellement à la mise en ligne de notre portfolio.
              Retrouvez très prochainement nos projets BTP, Réseaux, Domotique et
              Digital avec photos, descriptions et témoignages clients.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                to="/contact"
                data-testid="realisations-contact-cta"
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-md hover:bg-[#1D4ED8] transition-colors duration-200"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                data-testid="realisations-notify-btn"
                className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#0A1128] font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-md hover:bg-white hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200"
              >
                <Bell className="w-4 h-4" />
                Être notifié
              </button>
            </motion.div>
          </div>

          {/* Placeholder cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                data-testid={`realisation-placeholder-${i}`}
              >
                {/* Placeholder image area */}
                <div
                  className="h-44 relative flex items-center justify-center"
                  style={{ backgroundColor: p.color }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center opacity-30"
                    style={{ backgroundColor: p.accent }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                      style={{ color: p.accent, backgroundColor: `${p.accent}15` }}
                    >
                      {p.cat}
                    </span>
                  </div>
                  {/* Blur overlay */}
                  <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="text-sm font-bold uppercase tracking-widest"
                        style={{ color: p.accent }}
                      >
                        {p.cat}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: p.accent }}
                    />
                    <span className="text-xs text-[#94A3B8] uppercase tracking-widest">
                      {p.cat}
                    </span>
                  </div>
                  <h3
                    className="text-[#0A1128] font-bold text-lg"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-[#94A3B8] text-xs">
                    <Construction className="w-3 h-3" />
                    <span>Bientôt disponible</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats strip */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="mt-16 bg-[#0A1128] rounded-2xl p-8 md:p-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { v: "500+", l: "Projets en cours de documentation" },
                { v: "9", l: "Secteurs couverts" },
                { v: "10+", l: "Années d'expérience" },
                { v: "200+", l: "Clients satisfaits" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-3xl md:text-4xl font-black text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-[#94A3B8] text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
