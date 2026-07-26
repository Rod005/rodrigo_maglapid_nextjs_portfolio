'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Cloud, Code2, Database, Globe2, Mail, Menu, Moon, Server, Smartphone, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const services = [
  ['Web Development', 'Modern responsive websites and web applications.', Globe2],
  ['Business Systems', 'Custom platforms designed around your workflow.', Code2],
  ['POS Solutions', 'Restaurant, café, retail and multi-branch systems.', Database],
  ['SaaS Development', 'Secure multi-tenant cloud products and dashboards.', Cloud],
  ['Mobile-Friendly Apps', 'Responsive experiences for mobile, tablet and desktop.', Smartphone],
  ['Deployment & Support', 'Domain, hosting, SSL, cloud setup, training and maintenance.', Server],
];

const projects = [
  { title: 'ABOTRIX Commercial SaaS', type: 'Multi-industry cloud platform', tags: ['SaaS', 'Cloud', 'Multi-tenant'], gradient: 'from-emerald-300 via-emerald-500 to-slate-950' },
  { title: 'TSIKBO POS Enterprise', type: 'Restaurant POS and operations', tags: ['POS', 'KDS', 'Inventory'], gradient: 'from-orange-300 via-orange-500 to-slate-950' },
  { title: 'Crew Management System', type: 'Automated workforce monitoring', tags: ['Alerts', 'Reports', 'Offline'], gradient: 'from-sky-300 via-blue-500 to-slate-950' },
  { title: 'Hotel & Travel Platform', type: 'Booking and operations platform', tags: ['Travel', 'Hotel', 'Booking'], gradient: 'from-cyan-300 via-teal-500 to-slate-950' },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .65 } };

export default function Home() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('light', !dark); }, [dark]);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white light:bg-[#f4faf6] light:text-[#0c1711]">
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-300/10 bg-ink/80 backdrop-blur-xl light:bg-white/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="flex items-center gap-3 font-extrabold tracking-wide"><span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-ink">A</span><span>ABOTRIX <small className="block text-[10px] font-medium text-white/45 light:text-black/45">Rodrigo Maglapid</small></span></a>
          <nav className="hidden items-center gap-7 text-sm text-white/70 light:text-black/65 lg:flex">
            {['About','Services','Projects','Pricing','Testimonials','Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} className="transition hover:text-accent">{x}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="rounded-full border border-white/10 p-2.5 light:border-black/10" aria-label="Toggle theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <a href="#contact" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink sm:block">Let&apos;s Talk</a>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {open && <div className="glass mx-4 mb-4 rounded-2xl p-4 lg:hidden">{['About','Services','Projects','Pricing','Testimonials','Contact'].map(x => <a onClick={()=>setOpen(false)} key={x} href={`#${x.toLowerCase()}`} className="block rounded-xl px-4 py-3 hover:bg-accent/10">{x}</a>)}</div>}
      </header>

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div {...fade}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-bold text-accent"><span className="h-2 w-2 rounded-full bg-accent"/> SOFTWARE DEVELOPER</span>
          <h1 className="mt-7 max-w-3xl text-balance text-5xl font-extrabold leading-[1.02] tracking-[-.05em] sm:text-6xl xl:text-7xl">I build solutions that <span className="text-accent">drive results.</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60 light:text-black/60">I&apos;m Rodrigo C. Maglapid Jr., a software developer specializing in business automation, websites, POS systems, SaaS platforms, and cloud-ready applications.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-ink">Hire Me <ArrowRight size={18}/></a><a href="#projects" className="rounded-xl border border-white/15 px-6 py-4 font-bold light:border-black/15">View My Work</a></div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3"><Stat n="5+" label="Systems"/><Stat n="20+" label="Modules"/><Stat n="100%" label="Responsive"/></div>
        </motion.div>
        <motion.div {...fade} className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-12 rounded-full bg-accent/20 blur-3xl"/>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/25 bg-gradient-to-b from-accent/10 to-panel shadow-glow">
            <Image src="/rodrigo-profile.png" alt="Rodrigo C. Maglapid Jr. in formal business attire" width={1200} height={1600} priority className="h-[610px] w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/65 to-transparent p-7 pt-28"><p className="text-sm text-accent">Cavite, Philippines</p><h2 className="text-2xl font-bold">Rodrigo C. Maglapid Jr.</h2><p className="text-white/55">Software Developer · ABOTRIX</p></div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade} className="glass grid gap-10 rounded-[2rem] p-7 md:p-10 lg:grid-cols-[.7fr_1.3fr]">
        <div className="relative min-h-80 overflow-hidden rounded-3xl"><Image src="/rodrigo-profile.png" alt="Rodrigo Maglapid professional portrait" fill className="object-cover object-top"/></div>
        <div><Label>ABOUT ME</Label><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Building digital solutions that make an impact.</h2><p className="mt-6 text-white/60 light:text-black/60">I combine practical business experience with software development to create systems that are easy to use, scalable, and aligned with real operations. My focus includes restaurant POS, business automation, HR and payroll, travel, hotel, and multi-industry SaaS platforms.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Business-first approach','Responsive modern design','Cloud-ready architecture','Training and support'].map(x=><div key={x} className="flex items-center gap-3 text-sm"><span className="grid h-7 w-7 place-items-center rounded-full bg-accent/15 text-accent"><Check size={15}/></span>{x}</div>)}</div></div>
      </motion.div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade}><Label>SERVICES</Label><div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Professional services for modern businesses.</h2><p className="max-w-md text-white/55 light:text-black/55">From your first website to a complete enterprise platform.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([title,desc,Icon]: any)=><article key={title} className="glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-accent/50"><Icon className="text-accent"/><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm text-white/55 light:text-black/55">{desc}</p></article>)}</div></motion.div></section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade}><Label>FEATURED PROJECTS</Label><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Projects I&apos;m proud of.</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map((p,i)=><article key={p.title} className="glass overflow-hidden rounded-3xl"><div className={`relative h-64 bg-gradient-to-br ${p.gradient} p-6`}><span className="rounded-full bg-black/35 px-3 py-1 text-xs">2026</span><div className="absolute inset-x-8 bottom-0 h-44 rounded-t-2xl border border-white/20 bg-black/45 p-4 shadow-2xl"><div className="h-4 w-28 rounded bg-white/20"/><div className="mt-5 grid grid-cols-3 gap-3"><i className="h-16 rounded bg-white/10"/><i className="h-16 rounded bg-white/10"/><i className="h-16 rounded bg-white/10"/></div><div className="mt-3 h-8 rounded bg-accent/30"/></div></div><div className="p-6"><p className="text-xs font-bold text-accent">{p.type}</p><h3 className="mt-2 text-2xl font-bold">{p.title}</h3><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">{t}</span>)}</div></div></article>)}</div></motion.div></section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade}><Label>PRICING</Label><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Flexible packages for every stage.</h2><div className="mt-10 grid gap-5 lg:grid-cols-3"><Price name="Business Website" price="₱20,000+" items={['Responsive website','Up to 5 key pages','Basic SEO','Domain and hosting setup','30 days support']}/><Price featured name="Business Platform" price="₱50,000+" items={['Custom dashboard','User roles','Business workflow','Reports and analytics','Deployment and training']}/><Price name="Enterprise System" price="₱120,000+" items={['Advanced modules','Cloud architecture','Multi-branch support','Integrations','3 months support']}/></div></motion.div></section>

      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade}><Label>TESTIMONIALS</Label><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">What clients can expect.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{['Clear communication and a system designed around actual business needs.','Professional, responsive work with practical recommendations at every stage.','Reliable post-launch support, training, and assistance for future improvements.'].map((q,i)=><blockquote key={i} className="glass rounded-3xl p-7"><span className="text-4xl text-accent">“</span><p className="mt-4 text-white/65 light:text-black/65">{q}</p><footer className="mt-7 text-sm font-bold">Project Experience <span className="block font-normal text-white/40 light:text-black/40">Client-focused delivery</span></footer></blockquote>)}</div></motion.div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24"><motion.div {...fade} className="overflow-hidden rounded-[2.5rem] border border-accent/25 bg-gradient-to-br from-accent/15 via-panel to-ink p-7 md:p-12"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><Label>CONTACT</Label><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Let&apos;s build something amazing together.</h2><p className="mt-5 text-white/55">Tell me about your business, required features, and target timeline. Your inquiry will be sent to support@abotrix.com.</p><a href="mailto:support@abotrix.com" className="mt-8 inline-flex items-center gap-3 text-accent"><Mail/> support@abotrix.com</a></div><form action="https://formsubmit.co/support@abotrix.com" method="POST" className="grid gap-4"><input type="hidden" name="_subject" value="New Portfolio Inquiry"/><input type="hidden" name="_captcha" value="false"/><div className="grid gap-4 sm:grid-cols-2"><Field name="name" placeholder="Your name"/><Field name="email" placeholder="Email address" type="email"/></div><div className="grid gap-4 sm:grid-cols-2"><Field name="phone" placeholder="Mobile number"/><select name="project_type" className="rounded-xl border border-white/10 bg-black/25 p-4 outline-none focus:border-accent"><option>Business Website</option><option>Custom Business Platform</option><option>POS System</option><option>SaaS Platform</option><option>Other</option></select></div><textarea required name="details" rows={6} placeholder="Tell me about your project..." className="rounded-xl border border-white/10 bg-black/25 p-4 outline-none focus:border-accent"/><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-ink">Send Inquiry <ArrowRight size={18}/></button><p className="text-xs text-white/35">The first submission may require one-time activation from FormSubmit.</p></form></div></motion.div></section>

      <footer className="border-t border-white/10 py-10 light:border-black/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 text-sm text-white/45 light:text-black/45 md:flex-row"><div><strong className="text-white light:text-black">ABOTRIX · Rodrigo Maglapid</strong><p>Software development and business solutions.</p></div><p>© {new Date().getFullYear()} Rodrigo C. Maglapid Jr. All rights reserved.</p></div></footer>
    </main>
  );
}

function Label({children}:{children:React.ReactNode}) { return <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-extrabold tracking-[.16em] text-accent">{children}</span> }
function Stat({n,label}:{n:string,label:string}) { return <div className="glass rounded-2xl p-4"><strong className="text-2xl text-accent">{n}</strong><span className="mt-1 block text-xs text-white/45 light:text-black/45">{label}</span></div> }
function Field({name,placeholder,type='text'}:{name:string,placeholder:string,type?:string}) { return <input required name={name} type={type} placeholder={placeholder} className="rounded-xl border border-white/10 bg-black/25 p-4 outline-none focus:border-accent"/> }
function Price({name,price,items,featured=false}:{name:string,price:string,items:string[],featured?:boolean}) { return <article className={`rounded-3xl border p-7 ${featured?'border-accent bg-accent/10 shadow-glow':'glass'}`}><p className="text-sm text-accent">{name}</p><h3 className="mt-4 text-4xl font-extrabold">{price}</h3><div className="mt-7 space-y-3">{items.map(x=><p key={x} className="flex gap-3 text-sm text-white/60 light:text-black/60"><Check size={17} className="shrink-0 text-accent"/>{x}</p>)}</div><a href="#contact" className={`mt-8 block rounded-xl px-5 py-3 text-center font-bold ${featured?'bg-accent text-ink':'border border-white/15 light:border-black/15'}`}>Get a Quote</a></article> }
