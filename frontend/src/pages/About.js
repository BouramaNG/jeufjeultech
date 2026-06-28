import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award, Users, Handshake, Lightbulb, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Nous nous engageons à livrer des prestations de la plus haute qualité, sans compromis.",
  },
  {
    icon: Handshake,
    title: "Confiance",
    desc: "La transparence et l'honnêteté sont au cœur de chaque relation client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Nous adoptons les technologies de demain pour vos projets d'aujourd'hui.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Une équipe soudée qui travaille ensemble pour votre réussite.",
  },
];

const team = [
  { name: "Jean-Paul M.", role: "Directeur Général & Fondateur", initials: "JM" },
  { name: "Christelle D.", role: "Responsable BTP", initials: "CD" },
  { name: "Eric T.", role: "Ingénieur Réseaux", initials: "ET" },
  { name: "Aline B.", role: "Chef Projet Digital", initials: "AB" },
];

const stats = [
  { value: "10+", label: "Années d'existence" },
  { value: "500+", label: "Projets livrés" },
  { value: "9", label: "Domaines d'expertise" },
  { value: "200+", label: "Clients fidèles" },
];

export default function About() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <main data-testid="about-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-[#2563EB]/15 blur-[70px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#93C5FD] text-xs font-bold uppercase tracking-widest"
          >
            Notre histoire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="about-page-title"
          >
            À propos de nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-base md:text-lg max-w-xl"
          >
            Depuis plus de 10 ans, JeufJeulTECH construit l'avenir numérique et
            bâtimentaire de ses clients avec passion.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        ref={missionRef}
        className="py-24 md:py-32 bg-white"
        data-testid="mission-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1744627049721-73c27008ad28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjB0ZWFtJTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzgyNjc3OTQ4fDA&ixlib=rb-4.1.0&q=85"
                  alt="JeufJeulTECH équipe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#E2E8F0]">
                <div
                  className="text-3xl font-black text-[#2563EB]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  10+
                </div>
                <div className="text-[#475569] text-xs mt-1">Années d'expertise</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-[#2563EB] rounded-xl p-5 shadow-lg">
                <div
                  className="text-3xl font-black text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  9
                </div>
                <div className="text-white/80 text-xs mt-1">Domaines</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
            >
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">
                Qui sommes-nous
              </span>
              <h2
                className="text-3xl md:text-4xl font-black text-[#0A1128] mt-3 mb-5 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Bâtir l'avenir avec technologie et savoir-faire
              </h2>
              <p className="text-[#475569] text-base leading-relaxed mb-5">
                Fondée il y a plus de 10 ans, JeufJeulTECH est une entreprise
                multidisciplinaire qui allie expertise technique et créativité pour
                offrir des solutions sur mesure à ses clients.
              </p>
              <p className="text-[#475569] text-base leading-relaxed mb-8">
                De la construction de bâtiments à la création d'applications
                mobiles, en passant par les réseaux télécom et la domotique, notre
                équipe de professionnels certifiés accompagne chaque projet avec
                rigueur et passion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4
                      className="text-[#0A1128] font-bold text-base mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Notre mission
                    </h4>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      Offrir des solutions tech et bâtimentaires accessibles et performantes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4
                      className="text-[#0A1128] font-bold text-base mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Notre vision
                    </h4>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      Devenir le leader régional des solutions intégrées multi-secteurs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef}
        className="py-20 bg-[#0A1128]"
        data-testid="about-stats-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                className="text-center"
                data-testid={`about-stat-${i}`}
              >
                <div
                  className="text-4xl md:text-5xl font-black text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-[#94A3B8] text-xs uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef}
        className="py-24 md:py-32 bg-[#F8FAFC]"
        data-testid="values-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mx-auto text-center mb-14">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              Ce qui nous guide
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-black text-[#0A1128] mt-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nos valeurs fondamentales
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={valuesInView ? "visible" : "hidden"}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  data-testid={`value-card-${i}`}
                >
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3
                    className="text-[#0A1128] font-bold text-lg mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        ref={teamRef}
        className="py-24 md:py-32 bg-white"
        data-testid="team-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-14">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              className="text-[#2563EB] text-xs font-bold uppercase tracking-widest"
            >
              Notre équipe
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-black text-[#0A1128] mt-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Les experts derrière chaque projet
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                className="text-center group"
                data-testid={`team-member-${i}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center mx-auto mb-4 text-white font-black text-xl group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {member.initials}
                </div>
                <h4
                  className="text-[#0A1128] font-bold text-base"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.name}
                </h4>
                <p className="text-[#475569] text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2563EB] relative overflow-hidden" data-testid="about-cta">
        <div className="absolute inset-0 hero-grid-bg opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Travaillons ensemble
          </h2>
          <p className="text-white/80 text-base mb-8">
            Rejoignez les centaines de clients qui nous font confiance.
          </p>
          <Link
            to="/contact"
            data-testid="about-cta-btn"
            className="inline-flex items-center gap-2 bg-white text-[#2563EB] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-md hover:bg-[#0A1128] hover:text-white transition-all duration-300"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
