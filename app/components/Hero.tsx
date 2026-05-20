'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin, GitFork, Link2, AtSign, Mail } from 'lucide-react';

export default function Hero() {
  const [time, setTime] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const wib = new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Asia/Jakarta', hour12: false
      }).format(now);
      setTime(`WIB ${wib}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      });
      // Draw lines between close particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  const socials = [
    { icon: GitFork, href: 'https://github.com/adrnsah', label: 'GitHub' },
    { icon: Link2, href: 'https://linkedin.com/in/adriansyah07', label: 'LinkedIn' },
    { icon: AtSign, href: 'https://instagram.com/_adrnsah', label: 'Instagram' },
    { icon: Mail, href: 'mailto:adrnsah@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Gradient blobs */}
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,255,157,0.04) 0%, transparent 70%)', borderRadius: '50%' }} />

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '100px 24px 60px', width: '100%' }}>
        {/* Status bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,255,157,0.08)', border: '1px solid rgba(0,255,157,0.2)', borderRadius: 20, padding: '5px 14px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block' }} className="animate-pulse-glow" />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent3)', letterSpacing: '0.1em' }}>OPEN TO WORK</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: 11 }}>
            <MapPin size={12} />
            <span>Pekanbaru, ID</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)' }}>
            {time}
          </div>
        </div>

        {/* Main heading */}
        <div style={{ marginBottom: 32 }}>
          <p className="section-label" style={{ marginBottom: 16 }}>// software engineer & ui/ux designer</p>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(52px, 10vw, 110px)', lineHeight: 0.9, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            ADRIAN
            <br />
            <span className="text-gradient">SYAH</span>
          </h1>
        </div>

        {/* Bio */}
        <p style={{ maxWidth: 540, color: 'var(--text2)', lineHeight: 1.7, fontSize: 16, marginBottom: 40, fontFamily: 'var(--sans)' }}>
          Software Engineer dan UI/UX Designer yang berfokus pada pengembangan aplikasi web dan mobile yang efisien, terstruktur, dan user-friendly.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
          <a
            href="#projects"
            style={{
              fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 28px', background: 'var(--accent)', color: 'var(--bg)',
              borderRadius: 4, textDecoration: 'none', fontWeight: 700,
              transition: 'all 0.2s', display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 28px', border: '1px solid var(--border2)', color: 'var(--text2)',
              borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)'; }}
          >
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)', marginRight: 10 }}>FIND ME ON</span>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)', borderRadius: 4, color: 'var(--text3)',
                transition: 'all 0.2s', textDecoration: 'none',
              }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--accent)'); (e.currentTarget.style.color = 'var(--accent)'); }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.color = 'var(--text3)'); }}
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'var(--text3)', textDecoration: 'none', fontFamily: 'var(--mono)', fontSize: 10,
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}
        className="animate-float"
      >
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
