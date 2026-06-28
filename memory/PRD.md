# JeufJeulTECH Platform — PRD

## Informations projet
- **Nom**: JeufJeulTECH
- **Type**: Site vitrine marketing (Frontend uniquement)
- **Langue**: Français
- **Date de création**: Février 2026

## Problème initial
Créer une plateforme ultra jolie et moderne pour une entreprise multi-services dans les domaines : BTP, domotique, caméra surveillance, décoration intérieure, installation réseau, data center, BTS/télécom, tirage fibre, création d'applications mobiles et web. Frontend uniquement (pas de backend pour le moment).

## Architecture
- **Stack**: React + Tailwind CSS + framer-motion + lucide-react
- **Routing**: React Router v7
- **Animations**: framer-motion (entrance/scroll animations)
- **Icons**: lucide-react
- **Fonts**: Space Grotesk (titres) + Inter (corps)
- **Couleurs**: Navy #0A1128 | Electric Blue #2563EB | White #FFFFFF | Muted #475569

## Pages implémentées

### 1. Accueil (/)
- Hero section dark navy avec grid animée et orbes lumineux
- Badge animé "Partenaire technologique"
- H1 avec texte gradient
- 2 CTAs: Découvrir nos services + Nous contacter
- 3 trust indicators (Certifié ISO, Service 7j/7, Garantie 2 ans)
- Grille 6 services featured (bento grid)
- Section stats: 10+ ans, 500+ projets, 200+ clients, 50+ techniciens
- Section "Pourquoi nous choisir" (3 colonnes)
- Témoignages clients (3 cards)
- CTA Banner electric blue

### 2. Services (/services)
- Header dark navy
- Grille complète 9 services:
  - BTP & Génie Civil
  - Domotique
  - Caméra de Surveillance
  - Décoration Intérieure
  - Installation Réseau
  - Data Center
  - Télécoms & BTS
  - Tirage Fibre Optique
  - Applications Mobiles & Web
- Chaque card: icon coloré, titre, description, liste de sous-services (CheckCircle)
- CTA bannière en bas

### 3. À propos (/a-propos)
- Header dark navy
- Section Mission/Vision: image équipe + texte + floating stats cards
- Stats section dark navy: 4 chiffres clés
- Valeurs (4 cards: Excellence, Confiance, Innovation, Collaboration)
- Section équipe (4 membres avec initiales colorées)
- CTA electric blue

### 4. Contact (/contact)
- Header dark navy
- Layout split: formulaire + infos contact
- Formulaire: Nom, Email, Téléphone, Service (dropdown), Message
- État de succès après soumission (useState)
- Infos: Adresse, Téléphone, Email, Disponibilité
- Map placeholder dark navy

### 5. Réalisations (/realisations)
- Header dark navy
- Section "Bientôt disponible" avec icône
- 6 placeholder cards avec couleurs thématiques
- Strip de stats dark navy en bas

## Composants partagés
- **Navbar**: Sticky glassmorphism, logo JeufJeul**TECH**, 5 liens + CTA Devis Gratuit, menu mobile
- **Footer**: Dark navy, logo, liens services, infos contact, réseaux sociaux

## Prochaines étapes (backlog)

### P0 - Backend (quand prêt)
- API FastAPI + MongoDB
- Formulaire de contact avec envoi email réel (via Resend ou SendGrid)
- CMS pour les réalisations

### P1 - Contenu réel
- Photos réelles des projets pour la page Réalisations
- Témoignages clients réels
- Coordonnées réelles (téléphone, adresse, email)
- Logo professionnel

### P2 - Fonctionnalités avancées
- Blog / Actualités
- Page devis interactive
- WhatsApp widget
- Google Maps intégré
- Multi-langue (FR/EN)
- SEO optimisation (meta tags, sitemap)

## Tests
- Taux de succès frontend: 100%
- Toutes les pages: OK
- Navigation: OK
- Formulaire contact: OK
- Responsive: OK
