import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const services = [
  "BTP & Génie Civil",
  "Domotique",
  "Caméra de Surveillance",
  "Décoration Intérieure",
  "Installation Réseau",
  "Data Center",
  "Télécoms & BTS",
  "Tirage Fibre Optique",
  "Applications Mobiles & Web",
  "Autre",
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Siège social — Cameroun",
    sub: "Disponible dans tout le pays",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+237 000 000 000",
    sub: "Lun–Ven, 8h–18h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@jeufjeultech.com",
    sub: "Réponse sous 24h",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "7j/7 pour les urgences",
    sub: "Support technique dédié",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main data-testid="contact-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#0A1128] overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-60" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#2563EB]/15 blur-[70px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#93C5FD] text-xs font-bold uppercase tracking-widest"
          >
            Parlons de votre projet
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            data-testid="contact-page-title"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94A3B8] text-base md:text-lg max-w-xl"
          >
            Notre équipe vous répond sous 24h avec un devis personnalisé.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Form */}
            <motion.div
              ref={formRef}
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              data-testid="contact-form-container"
            >
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm">
                {!submitted ? (
                  <>
                    <h2
                      className="text-2xl font-black text-[#0A1128] mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Envoyez-nous un message
                    </h2>
                    <p className="text-[#475569] text-sm mb-7">
                      Remplissez ce formulaire et nous vous recontactons rapidement.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-[#0A1128] uppercase tracking-wide mb-1.5">
                            Nom complet *
                          </label>
                          <input
                            data-testid="contact-name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Jean Dupont"
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm text-[#0A1128] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#0A1128] uppercase tracking-wide mb-1.5">
                            Email *
                          </label>
                          <input
                            data-testid="contact-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="jean@email.com"
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm text-[#0A1128] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-[#0A1128] uppercase tracking-wide mb-1.5">
                            Téléphone
                          </label>
                          <input
                            data-testid="contact-phone"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+237 000 000 000"
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm text-[#0A1128] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#0A1128] uppercase tracking-wide mb-1.5">
                            Service souhaité
                          </label>
                          <select
                            data-testid="contact-service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm text-[#0A1128] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all"
                          >
                            <option value="">Choisir un service</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A1128] uppercase tracking-wide mb-1.5">
                          Message *
                        </label>
                        <textarea
                          data-testid="contact-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Décrivez votre projet ou votre demande..."
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3 text-sm text-[#0A1128] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all resize-none"
                        />
                      </div>

                      <button
                        data-testid="contact-submit"
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold text-sm uppercase tracking-wider py-4 rounded-md hover:bg-[#1D4ED8] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    data-testid="contact-success"
                  >
                    <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
                    </div>
                    <h3
                      className="text-2xl font-black text-[#0A1128] mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Message envoyé !
                    </h3>
                    <p className="text-[#475569] text-sm mb-6">
                      Merci <strong>{form.name}</strong>. Notre équipe vous contactera sous 24h.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="text-[#2563EB] text-sm font-medium hover:underline"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <div ref={infoRef} className="space-y-6">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <h2
                  className="text-2xl font-black text-[#0A1128] mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Informations de contact
                </h2>
                <p className="text-[#475569] text-sm">
                  Disponibles pour discuter de vos projets et vous accompagner à
                  chaque étape.
                </p>
              </motion.div>

              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    custom={i + 1}
                    variants={fadeUp}
                    initial="hidden"
                    animate={infoInView ? "visible" : "hidden"}
                    className="flex gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
                    data-testid={`contact-info-${i}`}
                  >
                    <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94A3B8] uppercase tracking-wide font-medium mb-0.5">
                        {info.label}
                      </div>
                      <div
                        className="text-[#0A1128] font-bold text-base"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {info.value}
                      </div>
                      <div className="text-[#475569] text-xs mt-0.5">{info.sub}</div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Map placeholder */}
              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                className="bg-[#0A1128] rounded-xl overflow-hidden h-48 relative flex items-center justify-center mt-4"
                data-testid="map-placeholder"
              >
                <div className="absolute inset-0 hero-grid-bg opacity-40" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Cameroun
                  </p>
                  <p className="text-[#94A3B8] text-xs mt-1">
                    Disponible sur tout le territoire
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
