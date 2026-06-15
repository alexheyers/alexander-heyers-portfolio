---
name: project-portfolio-award-winning
description: "alexander-heyers-portfolio — eigenständiges Git/GitHub-Repo (ab 14.06.2026) für die award-orientierte Bewerbungs-/Agenturseite alexander-heyers.de; statisches HTML, Glassmorphism-Apple × Anthropic-Claude × Flow-Party"
metadata:
  type: project
---

**Was (2026-06-14):** Strategie-Pivot vom alten `alexander-heyers-de/`-Ordner im Bootcamp-Repo zu einem **eigenständigen Git/GitHub-Repo**. O-Ton: „ich möchte das du das als neues git und github angelegt wird. baue die Seite mit allem besprochenem local fertig. nutze workflows um das alles auf höchstem niveau bei inhalt und design zu machen."

**Wo:**
- Lokal: `/Users/alexanderheyers/Documents/Claude/Projects/alexander-heyers-portfolio`
- GitHub: `https://github.com/alexheyers/alexander-heyers-portfolio.git` (origin)
- Ziel-Domain: `alexander-heyers.de` · Preview: `python3 -m http.server 8801`
- Stack: statisches HTML/CSS/JS (kein Framework), GSAP ScrollTrigger, Three.js (Hero-WebGL + Partikel-Porträt-Finale), Brand-System v1.1, Playfair Display/Lato/JetBrains Mono. Performance-Budget: 60 fps, LCP < 2,5 s, `prefers-reduced-motion`, Mobile-first.

**Seitenstruktur (Multi-Page):** `index.html` (kinematografische Landing, Reise warm/Bar → kühl/Code, ~420 Zeilen) · `fusion.html` = **Flaggschiff-Variante** (~2700 Zeilen, Glassmorphism-Apple × Anthropic-Claude × Flow-Party) · weitere Design-Explorationen `apple-anthropic.html`, `outstanding.html`, `wonder.html` · `fakten.html` = „Fast Lane" für eilige Recruiter · Tiefenseiten-Ordner `projekt/`, `automation/`, `claude-code/`, `showcases/` · `impressum.html`, `datenschutz.html`. Stand 15.06.: 24 Commits.

**Inhalt muss rein (O-Ton 14.06.):** n8n-Workflows, **Agents SDK / Managed Agents**, die besten Vibe-Coding-Sachen, kurz Lebenslauf + Transformation der letzten 3 Jahre (nur anreißen). Aus Sicht eines **Profi-Recruiters** die „geilste Seite" bauen. Kernbotschaft: 20 Jahre Hospitality + 3 Jahre KI, „Zwischen Tresen und Terminal" (siehe [[project-alexander-heyers-de]], [[user-alex-personal-facts]]).

**Design-Richtung (final, mehrere Iterationen):** Mischung aus **Glassmorphism Apple Style + Anthropic Claude Style + [the-flow-party.webflow.io]-Adaptionen**: smooth transitions, fade/zoom in-out, schöne Terminal-/Max-Style-Boxen, Scroll-Erlebnis bei dem Dinge auseinander entstehen/ineinander übergehen („ein Fest für die Augen"). Referenz-Recherche: awwwards.com/websites/design-agencies. „Award-winning" = NICHT bewegter Hintergrund + ein paar Bildlayer.

**Werkzeug-Workflow:** Playwright aktiviert (visuelle Verifikation), separater Recherche-Agent für neueste Grafik-/Frontend-/Animationstools, Workflows für Inhalt+Design auf höchstem Niveau. Modelle: Build der Agenturseite lief auf **Fable 5** („switch zu Fable 5 und mach daraus eine spektakuläre Agenturseite"); Opus 4.8 davor.

**Why:** Zentrales Bewerbungsprojekt für Job-Suche (verfügbar ab 01.08.2026, Remote DACH/EMEA). Building-in-Public ist Teil der Story — die Seite wurde selbst über orchestrierte KI-Agenten gebaut.

**How to apply:** Die wiederholte scharfe Qualitäts-Kritik („das ist ja nichts", „wo ist das spektakuläre Designwunder", „Findest du diese Seite wirklich award-winning?") ist Muster, nicht Einzelfall — siehe [[feedback-visible-iteration-required]]. Mess-Latte ist Awwwards-/Agentur-Niveau, nicht „besser als vorher". Immer sichtbar mehr liefern als man denkt nötig zu haben.

Verwandt: [[project-alexander-heyers-de]] · [[project-career-strategy-post-bootcamp]] · [[feedback-visible-iteration-required]]
