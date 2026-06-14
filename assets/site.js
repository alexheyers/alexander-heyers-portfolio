/* site.js — gemeinsame Interaktionen für alle Subpages */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

/* ---- Lenis smooth scroll (gated) ---- */
let lenis = null;
if (!reduce && window.Lenis) {
  lenis = new Lenis({ lerp: .1, smoothWheel: true });
  if (window.gsap) { lenis.on('scroll', () => ScrollTrigger.update()); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const id = a.getAttribute('href'); if (id.length > 1) { e.preventDefault(); lenis.scrollTo(id, { duration: 1.3 }); } }));
}

/* ---- custom cursor ---- */
const cur = document.querySelector('.cur'), dot = document.querySelector('.cur-dot');
if (cur) {
  let cx = innerWidth / 2, cy = innerHeight / 2, dx = cx, dy = cy;
  addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; dot.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; });
  (function loop() { dx += (cx - dx) * .18; dy += (cy - dy) * .18; cur.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,.mag').forEach(el => { el.addEventListener('mouseenter', () => cur.classList.add('big')); el.addEventListener('mouseleave', () => cur.classList.remove('big')); });
}

/* ---- magnetic ---- */
document.querySelectorAll('.mag').forEach(el => {
  el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .22}px)`; });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

/* ---- reveal ---- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.rev').forEach(el => io.observe(el));

/* ---- count up ---- */
const cuObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const el = e.target, to = +el.dataset.to, dur = 1400; let s = null;
  function tick(t) { if (s === null) s = t; const p = Math.min((t - s) / dur, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString('de-DE'); if (p < 1) requestAnimationFrame(tick); }
  requestAnimationFrame(tick); cuObs.unobserve(el);
}), { threshold: .6 });
document.querySelectorAll('.count').forEach(el => cuObs.observe(el));
