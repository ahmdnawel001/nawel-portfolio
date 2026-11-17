 
 
 
 
 
 "use client";



import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Cloud, Phone, MessageCircle, Terminal, Container, Server, Code2, Workflow, ExternalLink } from "lucide-react";

const skills = [
  { name: "AWS", detail: "Cloud fundamentals", icon: Cloud },
  { name: "Linux", detail: "Command line & system basics", icon: Terminal },
  { name: "Docker", detail: "Containers & networking", icon: Container },
  { name: "Nginx", detail: "Web server & reverse proxy", icon: Server },
  { name: "Git & GitHub", detail: "Version control workflows", icon: Github },
  { name: "Python", detail: "Programming fundamentals", icon: Code2 },
  { name: "CI/CD", detail: "Learning deployment workflows", icon: Workflow },
  { name: "Networking", detail: "TCP/IP, DNS & proxy concepts", icon: Cloud },
];

const projects = [
  {
    number: "01", title: "Docker Network Lab", type: "CONTAINERS / NETWORKING",
    description: "A hands-on lab exploring custom Docker networks, container-to-container communication and connectivity testing.",
    stack: ["Docker", "Linux", "Networking"], status: "LEARNING PROJECT"
  },
  {
    number: "02", title: "Nginx Container Lab", type: "WEB SERVER / DOCKER",
    description: "A practical container exercise investigating Nginx, container behaviour and the fundamentals of reverse proxying.",
    stack: ["Nginx", "Docker", "Linux"], status: "LEARNING PROJECT"
  },
  {
    number: "03", title: "Collegiva", type: "WEB APPLICATION",
    description: "A student-focused college discovery concept for exploring UG and PG courses, college information, budgets and accommodation.",
    stack: ["Next.js", "Web Development"], status: "PERSONAL PROJECT"
  },
  {
    number: "04", title: "Wedding Photography Website", type: "FRONTEND / DEPLOYMENT",
    description: "A cinematic photography portfolio concept with gallery presentation, private client galleries and a deployment workflow.",
    stack: ["Next.js", "React", "Vercel"], status: "PERSONAL PROJECT"
  },
];

const reveal = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } } };

function Particles() {
  return <div className="particles" aria-hidden="true">
    {Array.from({ length: 26 }).map((_, i) => <i key={i} style={{
      left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%`,
      animationDelay: `${(i % 9) * -.8}s`, animationDuration: `${5 + (i % 6)}s`,
      opacity: .18 + (i % 5) * .1
    }} />)}
    <div className="red-haze haze-one" /><div className="red-haze haze-two" />
  </div>;
}

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState("2026");
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.25 });
  useEffect(() => setYear(String(new Date().getFullYear())), []);
  const close = () => setMenuOpen(false);

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} />
    <div className="grain" />
    <Particles />
    <header className="topbar">
      <a className="brand" href="#home" onClick={close}><span className="brand-mark">AN<span>.</span></span><span>AHAMMED NAWEL</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        {[["Home", "#home"], ["About", "#about"], ["Experience", "#creative"], ["Projects", "#projects"], ["Certification", "#skills"], ["Contact", "#contact"]].map(([label, href]) =>
          <a key={label} href={href} onClick={close}>{label}<span>↗</span></a>)}
        <a className="nav-cta" href="#projects" onClick={close}>View My Work <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-meta"><span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="meta-line" /> CLOUD / AWS / DEVOPS</div>
      <div className="hero-layout">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
          <p className="eyebrow">HELLO, I’M <span className="eyebrow-line" /></p>
          <h1>AHAMMED<br/><span>NAWEL<span className="red-dot">.</span></span></h1>
          <div className="hero-role"><span className="role-bar" /> CLOUD / AWS / DEVOPS</div>
        </motion.div>
        <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, y: 35, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: .25, ease: [0.22, 1, 0.36, 1] }}>
          <div className="portrait-frame"><img src="nawel.png" alt="Portrait of Ahammed Nawel" /></div>
          
          <span className="portrait-orbit" aria-hidden="true" />
        </motion.div>
        <motion.aside className="hero-side-copy" initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, delay: .65 }}>
          <span className="side-index">// BUILDING WHAT’S NEXT</span>
          <h2>BUILDING<br/>WHAT’S<br/><em>NEXT.</em></h2>
          <p>Designing, deploying and managing scalable cloud infrastructure with automation and reliability at the core.</p>
          <div className="hero-actions"><a href="#projects" className="hero-button hero-button-light">View My Work <ArrowUpRight size={15}/></a><a href="#contact" className="hero-button">HIRE  <Mail size={15}/></a></div>
        </motion.aside>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      <div className="hero-index">01 / 04</div>
    </section>

    <section className="section-wrap about section-pad" id="about">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        <span className="section-kicker">01 — WHO AM I?</span><span className="heading-rule" />
        <h2>CURIOUS BY<br/><em>DEFAULT.</em></h2>
      </motion.div>
      <div className="about-grid">
        <div className="about-stamp"><div className="stamp-ring">CLOUD MINDED · ALWAYS LEARNING · CLOUD MINDED · ALWAYS LEARNING ·</div><div className="stamp-core">AN<span>.</span></div></div>
        <div className="about-copy">
          <p className="lead">I’m Ahammed Nawel — a BCA graduate, aspiring Cloud & DevOps professional, and creative professional behind the camera.</p>
          <p>What interests me most is what happens behind the screen: how applications are hosted, how servers communicate, how containers work and how cloud infrastructure helps services stay available. I enjoy understanding the full journey from writing code to running an application.</p>
          <p>My learning is practical. I’ve explored Linux commands and system basics, created Docker containers and networks, tested container-to-container communication, worked with Nginx and practised Git and GitHub workflows. I’ve also worked on web projects using Next.js, which helps me understand the application side of the infrastructure I want to manage.</p>
          <p>I’m currently strengthening my AWS and DevOps foundation. I like breaking unfamiliar problems into smaller steps, testing solutions and learning from errors instead of simply following commands. I’m still growing, and I want this portfolio to show that journey honestly through the projects and skills I continue to build.</p>
          <p>Outside the technical world, I’m also a videographer, video editor and content creator with 3+ years of experience. I enjoy bringing creative ideas to life — from planning a shot and capturing footage to shaping the final edit. Creating content has helped me develop a creative eye, attention to detail and the patience to take a project from concept to completion.</p>
          <p>I bring both sides of my experience together: a curiosity for technology and an interest in video production. Whether I’m building something or creating something, I enjoy the process of learning, experimenting and making the final result better.</p>
          <div className="about-facts"><div><strong>01</strong><span>HANDS-ON LEARNING</span></div><div><strong>02</strong><span>PROBLEM SOLVING</span></div><div><strong>03</strong><span>CONTINUOUS GROWTH</span></div></div>
        </div>
      </div>
    </section>

    <section className="section-wrap creative section-pad" id="creative">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><span className="section-kicker">02 — THE CREATIVE SIDE</span><span className="heading-rule" /><h2>BEHIND THE<br/><em>CAMERA.</em></h2></motion.div>
      <div className="creative-grid">
        <div className="creative-years"><strong>3<span>+</span></strong><span>YEARS OF<br/>CREATIVE EXPERIENCE</span></div>
        <div className="creative-copy">
          <p className="lead">Alongside technology, I work in videography, video editing and content creation.</p>
          <p>As a videographer, video editor and content creator, I enjoy the complete creative process: developing an idea, capturing the right moments, editing with intention and delivering content that connects with its audience.</p>
          <div className="creative-tags"><span>VIDEOGRAPHY</span><span>VIDEO EDITING</span><span>CONTENT CREATION</span></div>
        </div>
      </div>
    </section>

    <section className="section-wrap skills section-pad" id="skills">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><span className="section-kicker">03 — MY TOOLKIT</span><span className="heading-rule" /><h2>TECHNICAL<br/><em>SKILLS.</em></h2></motion.div>
      <p className="section-note">Tools and technologies I’m working with as I build my cloud and DevOps foundation.</p>
      <div className="skills-grid">
        {skills.map((skill, i) => { const Icon = skill.icon; return <motion.div className="skill-card" key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
          <div className="skill-top"><Icon size={20}/><span>0{i + 1}</span></div><h3>{skill.name}</h3><p>{skill.detail}</p><div className="skill-underline"/>
        </motion.div>; })}
      </div>
      <p className="honesty-note"><span>*</span> Skill levels are intentionally not self-rated. This portfolio reflects an ongoing learning journey.</p>
    </section>

    <section className="section-wrap approach section-pad" id="approach">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><span className="section-kicker">A LITTLE MORE ABOUT ME</span><span className="heading-rule" /><h2>HOW I<br/><em>WORK.</em></h2></motion.div>
      <div className="approach-grid">
        <article><span>01 / MINDSET</span><h3>Curious by nature</h3><p>I enjoy exploring how technology works, asking questions and connecting concepts rather than memorising commands.</p></article>
        <article><span>02 / METHOD</span><h3>Learn through practice</h3><p>I prefer hands-on labs, building small projects, testing configurations and troubleshooting when something doesn’t work.</p></article>
        <article><span>03 / DIRECTION</span><h3>Growing with purpose</h3><p>My focus is to develop strong foundations in AWS, cloud infrastructure, automation and the DevOps toolchain.</p></article>
      </div>
    </section>

    <section className="section-wrap projects section-pad" id="projects">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><span className="section-kicker">04 — SELECTED WORK</span><span className="heading-rule" /><h2>BUILT TO<br/><em>LEARN.</em></h2></motion.div>
      <div className="projects-intro"><p>Practical experiments and personal builds that show how I learn, explore and apply technology.</p><span>04 TECH PROJECTS / CREATIVE REEL BELOW</span></div>
      <div className="project-list">
        {projects.map((p, i) => <motion.article className="project-row" key={p.number} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
          <span className="project-number">{p.number}</span><div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div>
          <div className="project-side"><span className="project-status">{p.status}</span><span className="project-arrow"><ArrowUpRight size={22}/></span></div>
        </motion.article>)}
      </div>
      <p className="project-footnote">Project links and repository details can be added once the public GitHub repositories are ready.</p>
    </section>

<section className="section-wrap video-work section-pad" id="videos">
  <motion.div
    className="section-heading"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={reveal}
  >
    <span className="section-kicker">03 — VIDEO PORTFOLIO</span>
    <div className="heading-rule" />
    <h2>MY CREATIVE <em>WORK.</em></h2>
  </motion.div>

  <div className="projects-intro">
    <p>A selection of videos that reflect my work behind the camera and in the edit.</p>
    <span>SHOWREEL / SELECTED VIDEOS</span>
  </div>

  <div className="video-grid">
    {[
      { title: "FEATURED VIDEO 01", src: "/videos/video1.mp4" },
      { title: "FEATURED VIDEO 02", src: "/videos/video2.mp4" },
      { title: "FEATURED VIDEO 03", src: "/videos/video3.mp4" },
    ].map((video, index) => (
      <div className="video-card" key={video.src}>
        <button
          className="video-preview"
          onClick={() => setActiveVideo(video.src)}
          aria-label={`Play ${video.title}`}
        >
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <span className="video-play">▶</span>
          <span className="video-label">
            {video.title}
          </span>
        </button>

        <div className="video-card-caption">
          <span>VIDEO 0{index + 1}</span>
          <span>WATCH VIDEO ↗</span>
        </div>
      </div>
    ))}
  </div>

  {activeVideo && (
    <div
      className="video-modal"
      onClick={() => setActiveVideo(null)}
    >
      <button
        className="video-close"
        onClick={() => setActiveVideo(null)}
      >
        ✕
      </button>

      <video
        key={activeVideo}
        src={activeVideo}
        controls
        autoPlay
        playsInline
        className="main-video-player"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}
</section>

    <section className="statement">
      <div className="statement-glow"/>
      <p>THE FUTURE IS BUILT<br/>BY THOSE WHO <span>KEEP BUILDING.</span></p>
      <span className="statement-sub">LEARN. AUTOMATE. DEPLOY. REPEAT.</span>
    </section>

    <section className="section-wrap contact section-pad" id="contact">
      <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><span className="section-kicker">06 — GET IN TOUCH</span><span className="heading-rule" /><h2>LET’S BUILD<br/><em>SOMETHING.</em></h2></motion.div>
     <div className="social-links">

  {/* GitHub */}
  <a
    href="https://github.com/ahmdnawel001"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github size={16} />
    GITHUB
    <ArrowUpRight size={16} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ahammed-nawel-70080437a/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={16} />
    LINKEDIN
    <ArrowUpRight size={16} />
  </a>

  {/* Email */}
  <a href="mailto:ahammednawel@gmail.com">
    <Mail size={16} />
    EMAIL
    <ArrowUpRight size={16} />
  </a>

  {/* Phone */}
  <a href="tel:+919037782525">
    <Phone size={16} />
    +91 9037782525
    <ArrowUpRight size={16} />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919037782525"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle size={16} />
    WHATSAPP
    <ArrowUpRight size={16} />
  </a>

</div>
    </section>

    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">AN<span>.</span></span><span>AHAMMED NAWEL</span></a><span>DESIGNED TO KEEP MOVING — {year}</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}