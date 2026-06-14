# Alexander Heyers — Portfolio

**„Zwischen Tresen und Terminal."** — 20 Jahre Hospitality-Operations, 3 Jahre KI & Automation.
Ich übersetze Geschäfts-Bedürfnisse in funktionierende Systeme und dirigiere KI auf Agentur-Niveau.

→ Live: [alexander-heyers.de](https://www.alexander-heyers.de) · Verfügbar ab 01.08.2026 · Remote DACH/EMEA

## Über diese Seite

Award-orientierte Multi-Page-Portfolio-Seite. Eine kinematografische Landing (Reise von „warm" / Bar nach „kühl" / Code) plus Tiefenseiten zu Projekten, Automation, Claude-Code-Arbeitsweise und Design-Showcases.

Gebaut Building-in-Public — Teil der eigenen Story: Diese Seite und ihre Showcases wurden selbst über orchestrierte KI-Agenten gebaut.

## Stack

- Statisches HTML/CSS/JS (kein schweres Framework)
- GSAP ScrollTrigger — Scroll-Choreografie
- Three.js — WebGL-Hero + Partikel-Porträt-Finale
- Brand-System v1.1 · Playfair Display / Lato / JetBrains Mono
- Performance-Budget: 60 fps, LCP < 2,5 s, `prefers-reduced-motion`-Fallback, Mobile-first

## Lokal ansehen

```bash
python3 -m http.server 8801
# dann öffnen: http://localhost:8801/
```

(Über `localhost` öffnen — das Partikel-Porträt liest das Foto pixelweise und benötigt einen Server.)

## Struktur

```
index.html            Landing — die Reise + Beweis-Wand
projekt/              Flaggschiff-Produkt (AI-Adoption-Studio)
automation/           n8n-Workflows + Voice-Agent
claude-code/          „Wie ich mit Claude Code baue"
showcases/            3D-/Design-Galerie
fakten.html           Schnellversion (Fast Lane)
assets/               Bilder, Schriften
```

---

© Alexander Heyers · Mosbach
