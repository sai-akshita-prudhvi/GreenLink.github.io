/* ==========================================================================
   GreenLink — Design tokens
   ========================================================================== */
:root{
  --forest:      #2E7D32;   /* dark green  — from brand kit */
  --leaf:        #66BB6A;   /* light green — from brand kit */
  --water:       #4FC3F7;   /* sky blue    — from brand kit */
  --paper:       #FFFFFF;   /* white       — from brand kit */

  --forest-deep: #103018;   /* near-black green, for high-contrast text/panels */
  --forest-ink:  #163B22;   /* body copy on paper */
  --mist:        #F4FAF5;   /* off-white page background */
  --mist-dim:    #E8F3EA;   /* subtle section band */
  --water-deep:  #1E88C7;   /* deeper blue for contrast on light bg */
  --sand:        #FFFFFF;

  --font-display: "Fraunces", "Poppins", serif;
  --font-head:    "Poppins", "Segoe UI", sans-serif;
  --font-body:    "Inter", "Segoe UI", sans-serif;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;

  --shadow-soft: 0 12px 32px -16px rgba(16, 48, 24, 0.25);
  --shadow-card: 0 8px 24px -12px rgba(16, 48, 24, 0.18);

  --container: 1180px;
}

*, *::before, *::after{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior: auto; }
  *{ animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}

body{
  margin: 0;
  font-family: var(--font-body);
  color: var(--forest-ink);
  background: var(--mist);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4{
  font-family: var(--font-head);
  color: var(--forest-deep);
  line-height: 1.15;
  margin: 0 0 0.5em;
  font-weight: 700;
  letter-spacing: -0.01em;
}

p{ margin: 0 0 1em; }
a{ color: inherit; }
img{ max-width: 100%; display: block; }
ul{ margin: 0; padding: 0; list-style: none; }

.container{
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2.5rem);
}

.eyebrow{
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--forest);
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
}
.eyebrow::before{
  content: "";
  width: 22px;
  height: 2px;
  background: var(--water);
  display: inline-block;
}

/* focus visibility */
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible{
  outline: 3px solid var(--water);
  outline-offset: 3px;
}

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn{
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.98rem;
  padding: 0.85em 1.7em;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.btn-primary{
  background: var(--forest);
  color: #fff;
  box-shadow: var(--shadow-soft);
}
.btn-primary:hover{ background: #256b29; transform: translateY(-2px); }

.btn-ghost{
  background: transparent;
  border-color: rgba(16,48,24,0.18);
  color: var(--forest-deep);
}
.btn-ghost:hover{ border-color: var(--forest); transform: translateY(-2px); }

.btn-on-dark{
  background: var(--water);
  color: var(--forest-deep);
}
.btn-on-dark:hover{ background: #7fd6ff; transform: translateY(-2px); }

.btn-outline-on-dark{
  background: transparent;
  border-color: rgba(255,255,255,0.4);
  color: #fff;
}
.btn-outline-on-dark:hover{ border-color: #fff; transform: translateY(-2px); }

/* ==========================================================================
   Header / nav
   ========================================================================== */
.site-header{
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(244, 250, 245, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(16,48,24,0.08);
}
.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 0;
}
.brand{
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}
.brand img{ height: 42px; width: auto; }
.brand-word{
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--forest-deep);
  letter-spacing: -0.01em;
}
.brand-word span{ color: var(--leaf); }

.nav-links{
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-links a{
  text-decoration: none;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--forest-ink);
  position: relative;
  padding: 0.25rem 0;
}
.nav-links a::after{
  content: "";
  position: absolute;
  left: 0; bottom: -4px;
  width: 0%;
  height: 2px;
  background: var(--water);
  transition: width 0.25s ease;
}
.nav-links a:hover::after, .nav-links a.active::after{ width: 100%; }
.nav-links a.active{ color: var(--forest); }

.nav-cta{ display: flex; align-items: center; gap: 1rem; }

.nav-toggle{
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
}
.nav-toggle span{
  display: block;
  width: 26px;
  height: 2px;
  background: var(--forest-deep);
  margin: 6px 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

@media (max-width: 860px){
  .nav-links{
    position: fixed;
    top: 72px; left: 0; right: 0;
    background: var(--paper);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 0.5rem clamp(1.25rem, 4vw, 2.5rem) 1rem;
    box-shadow: var(--shadow-card);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .nav-links.open{ transform: translateY(0); opacity: 1; pointer-events: auto; }
  .nav-links a{ width: 100%; padding: 0.85rem 0; border-bottom: 1px solid var(--mist-dim); }
  .nav-cta .btn-ghost{ display: none; }
  .nav-toggle{ display: block; }
}

/* ==========================================================================
   Hero
   ========================================================================== */
.hero{
  position: relative;
  overflow: hidden;
  padding: clamp(3.5rem, 8vw, 6.5rem) 0 clamp(4rem, 9vw, 7rem);
  background:
    radial-gradient(1100px 480px at 85% -10%, rgba(79,195,247,0.16), transparent 60%),
    radial-gradient(900px 500px at -10% 110%, rgba(102,187,106,0.18), transparent 55%),
    var(--mist);
}
.hero-grid{
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.hero h1{
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 600;
  margin-bottom: 0.4em;
}
.hero h1 em{
  font-style: normal;
  color: var(--forest);
  position: relative;
}
.hero-lede{
  font-size: 1.12rem;
  color: #375943;
  max-width: 46ch;
  margin-bottom: 1.75rem;
}
.hero-actions{ display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.25rem; }

.hero-stats{ display: flex; gap: clamp(1.5rem, 4vw, 2.75rem); }
.hero-stats div strong{
  display: block;
  font-family: var(--font-head);
  font-size: 1.8rem;
  color: var(--forest-deep);
  font-weight: 700;
}
.hero-stats div span{ font-size: 0.85rem; color: #4a6b56; }

.hero-art{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-art-ring{
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffffff, var(--mist-dim) 70%);
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-art-ring img{ width: 62%; height: auto; }
.hero-art-ring::before{
  content: "";
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 2px dashed rgba(46,125,50,0.25);
  animation: spin 60s linear infinite;
}
@keyframes spin{ to{ transform: rotate(360deg); } }

@media (max-width: 900px){
  .hero-grid{ grid-template-columns: 1fr; }
  .hero-art{ order: -1; }
  .hero-art-ring{ width: min(72%, 300px); margin: 0 auto; }
}

/* ==========================================================================
   Pillars strip (brand's 5 pillars)
   ========================================================================== */
.pillars{
  padding: clamp(3rem, 6vw, 4.5rem) 0;
  background: var(--paper);
  border-top: 1px solid var(--mist-dim);
  border-bottom: 1px solid var(--mist-dim);
}
.pillars-grid{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}
.pillar{
  text-align: left;
  padding: 0 1rem 0 0;
  border-left: 3px solid var(--mist-dim);
  padding-left: 1.1rem;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.pillar.in-view{ opacity: 1; transform: translateY(0); }
.pillar .pillar-icon{
  width: 34px; height: 34px;
  margin-bottom: 0.75rem;
  color: var(--forest);
}
.pillar h3{ font-size: 1rem; margin-bottom: 0.3em; }
.pillar p{ font-size: 0.88rem; color: #4a6b56; margin: 0; }

@media (max-width: 980px){
  .pillars-grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px){
  .pillars-grid{ grid-template-columns: 1fr; }
}

/* ==========================================================================
   Tracker (signature element)
   ========================================================================== */
.tracker{
  position: relative;
  padding: clamp(4rem, 9vw, 6.5rem) 0;
  background: linear-gradient(180deg, var(--forest-deep) 0%, #0c2416 100%);
  color: #fff;
  overflow: hidden;
}
.tracker::before{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(700px 380px at 15% 10%, rgba(102,187,106,0.18), transparent 60%),
    radial-gradient(700px 420px at 90% 90%, rgba(79,195,247,0.14), transparent 60%);
  pointer-events: none;
}
.tracker-inner{
  position: relative;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}
.tracker .eyebrow{ color: var(--leaf); }
.tracker .eyebrow::before{ background: var(--water); }
.tracker h2{
  color: #fff;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.9rem, 4vw, 2.6rem);
}
.tracker p.tracker-copy{ color: rgba(255,255,255,0.75); max-width: 48ch; }

.tracker-meta{
  display: flex;
  gap: 2.25rem;
  margin-top: 1.75rem;
  flex-wrap: wrap;
}
.tracker-meta div strong{
  display: block;
  font-family: var(--font-head);
  font-size: 1.4rem;
}
.tracker-meta div span{ font-size: 0.82rem; color: rgba(255,255,255,0.6); }

/* the vessel: a rounded container that fills like water as the goal is approached */
.vessel-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.vessel{
  position: relative;
  width: min(100%, 300px);
  height: 300px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.14);
  overflow: hidden;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.25);
}
.vessel-fill{
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 0%;
  background: linear-gradient(180deg, var(--water) 0%, var(--water-deep) 100%);
  transition: height 1.4s cubic-bezier(.22,.9,.3,1);
}
.vessel-fill::before{
  content: "";
  position: absolute;
  top: -1px; left: -25%;
  width: 150%; height: 24px;
  background: radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 65%) repeat-x;
  background-size: 60px 24px;
  animation: wave-drift 5s linear infinite;
  opacity: 0.7;
}
@keyframes wave-drift{ from{ transform: translateX(0); } to{ transform: translateX(-60px); } }

.vessel-readout{
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: var(--font-head);
}
.vessel-readout .count{
  font-size: clamp(2.2rem, 5vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.35);
}
.vessel-readout .unit{
  font-size: 0.85rem;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.vessel-goal{ font-size: 0.85rem; color: rgba(255,255,255,0.6); }
.vessel-goal strong{ color: #fff; }

.tracker-updated{
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  font-style: italic;
}

@media (max-width: 900px){
  .tracker-inner{ grid-template-columns: 1fr; }
  .vessel-wrap{ order: -1; }
}

/* ==========================================================================
   Generic section scaffolding (used across inner pages)
   ========================================================================== */
.section{ padding: clamp(3.5rem, 7vw, 5.5rem) 0; }
.section-alt{ background: var(--paper); border-top: 1px solid var(--mist-dim); border-bottom: 1px solid var(--mist-dim); }
.section-head{ max-width: 62ch; margin-bottom: 2.5rem; }
.section-head h2{ font-family: var(--font-display); font-weight: 600; font-size: clamp(1.8rem, 3.6vw, 2.4rem); }

.page-hero{
  padding: clamp(2.75rem, 6vw, 4rem) 0 clamp(2.25rem, 5vw, 3rem);
  background: linear-gradient(180deg, var(--mist-dim), var(--mist));
}
.page-hero h1{ font-family: var(--font-display); font-weight: 600; font-size: clamp(2.1rem, 4.4vw, 2.9rem); }
.page-hero p{ max-width: 60ch; color: #375943; font-size: 1.05rem; }

/* Mission page */
.values-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
.value-card{
  background: var(--paper);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--mist-dim);
}
.value-card .num{
  font-family: var(--font-head);
  font-weight: 700;
  color: var(--water-deep);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
}
.value-card h3{ margin-top: 0.5rem; }
@media (max-width: 900px){ .values-grid{ grid-template-columns: 1fr; } }

.timeline{ display: flex; flex-direction: column; gap: 0; border-left: 2px solid var(--mist-dim); margin-left: 0.4rem; }
.timeline-item{ position: relative; padding: 0 0 2.25rem 2rem; }
.timeline-item:last-child{ padding-bottom: 0; }
.timeline-item::before{
  content: "";
  position: absolute; left: -7px; top: 4px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--leaf); border: 2px solid var(--paper); box-shadow: 0 0 0 2px var(--leaf);
}
.timeline-item h4{ margin-bottom: 0.2em; }
.timeline-item .when{ font-size: 0.8rem; color: var(--forest); font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }

/* Founders page */
.founders-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.founder-card{
  background: var(--paper);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--mist-dim);
}
.founder-photo{
  aspect-ratio: 4/3.4;
  background: linear-gradient(135deg, var(--mist-dim), #dcefe1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.founder-photo svg{ width: 40%; color: var(--forest); opacity: 0.55; }
.founder-body{ padding: 1.4rem 1.5rem 1.6rem; }
.founder-body h3{ margin-bottom: 0.1em; font-size: 1.15rem; }
.founder-role{ font-size: 0.82rem; font-weight: 700; color: var(--water-deep); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.7em; }
.founder-body p{ font-size: 0.92rem; color: #4a6b56; margin-bottom: 0; }
@media (max-width: 980px){ .founders-grid{ grid-template-columns: 1fr 1fr; } }
@media (max-width: 620px){ .founders-grid{ grid-template-columns: 1fr; } }

/* Contact page */
.contact-grid{ display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.contact-form{ display: grid; gap: 1.1rem; }
.field label{ display: block; font-family: var(--font-head); font-weight: 600; font-size: 0.88rem; margin-bottom: 0.4em; color: var(--forest-deep); }
.field input, .field select, .field textarea{
  width: 100%;
  font-family: var(--font-body);
  font-size: 0.98rem;
  padding: 0.75em 0.9em;
  border-radius: var(--radius-sm);
  border: 1.5px solid rgba(16,48,24,0.18);
  background: var(--paper);
  color: var(--forest-ink);
}
.field textarea{ resize: vertical; min-height: 120px; }
.field input:focus, .field select:focus, .field textarea:focus{ border-color: var(--forest); }
.form-note{ font-size: 0.82rem; color: #4a6b56; }

.contact-info{ display: grid; gap: 1.25rem; }
.info-card{
  background: var(--paper);
  border: 1px solid var(--mist-dim);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-card);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.info-card svg{ width: 22px; height: 22px; color: var(--forest); flex-shrink: 0; margin-top: 2px; }
.info-card h3{ font-size: 1rem; margin-bottom: 0.2em; }
.info-card p{ margin: 0; font-size: 0.92rem; color: #4a6b56; }
.social-row{ display: flex; gap: 0.75rem; margin-top: 0.4rem; }
.social-row a{
  width: 38px; height: 38px;
  border-radius: 50%;
  background: var(--mist-dim);
  display: flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease;
}
.social-row a:hover{ background: var(--leaf); }
.social-row svg{ width: 17px; height: 17px; color: var(--forest-deep); }

@media (max-width: 860px){ .contact-grid{ grid-template-columns: 1fr; } }

/* CTA band (reused) */
.cta-band{
  background: linear-gradient(120deg, var(--forest) 0%, #256b29 100%);
  color: #fff;
  border-radius: var(--radius-lg);
  padding: clamp(2.25rem, 5vw, 3.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.cta-band h2{ color: #fff; font-family: var(--font-display); font-weight: 600; font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 0.2em; }
.cta-band p{ color: rgba(255,255,255,0.85); margin: 0; }

/* ==========================================================================
   Footer
   ========================================================================== */
.site-footer{
  background: var(--forest-deep);
  color: rgba(255,255,255,0.75);
  padding: clamp(2.5rem, 5vw, 3.5rem) 0 1.75rem;
}
.footer-grid{
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  margin-bottom: 1.5rem;
}
.footer-brand{ display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.9rem; }
.footer-brand img{ height: 34px; }
.footer-brand span{ font-family: var(--font-head); font-weight: 700; color: #fff; font-size: 1.15rem; }
.footer-col h4{ color: #fff; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; }
.footer-col ul{ display: grid; gap: 0.6rem; }
.footer-col a{ text-decoration: none; color: rgba(255,255,255,0.72); font-size: 0.92rem; }
.footer-col a:hover{ color: var(--water); }
.footer-bottom{ display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
@media (max-width: 760px){ .footer-grid{ grid-template-columns: 1fr; } }
