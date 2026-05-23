'use client';
import { useState } from 'react';
import { GitFork, Link2, AtSign, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Project Collaboration', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate send (you can integrate EmailJS later)
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const socials = [
    { icon: Mail, label: 'Email', value: 'adrnsah@gmail.com', href: 'mailto:adrnsah@gmail.com', color: 'var(--accent)' },
    { icon: GitFork, label: 'GitHub', value: 'github.com/adrnsah', href: 'https://github.com/adrnsah', color: 'var(--text)' },
    { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/adriansyah', href: 'https://linkedin.com/in/adriansyah07', color: '#0A66C2' },
    { icon: AtSign, label: 'Instagram', value: '@_adrnsah', href: 'https://instagram.com/_adrnsah', color: '#E1306C' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 6, padding: '12px 16px', color: 'var(--text)',
    fontFamily: 'var(--sans)', fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '120px 24px', position: 'relative', background: 'var(--bg2)' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80, textAlign: 'center' }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// 04. contact</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1 }}>
            Let&apos;s Start a <span className="text-gradient">Project</span>
          </h2>
          <p style={{ marginTop: 16, color: 'var(--text2)', fontSize: 15, maxWidth: 480, margin: '16px auto 0' }}>
            Tertarik bekerja sama? Kirim pesan atau hubungi langsung melalui email. Tersedia untuk freelance & full-time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          {/* Left: Socials */}
          <div>
            <p className="section-label" style={{ marginBottom: 20, fontSize: 10 }}>// social presence</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 8, padding: '16px 20px', textDecoration: 'none',
                  }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: `${s.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, flexShrink: 0 }}>
                    <s.icon size={18} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', marginBottom: 2 }}>{s.label}</p>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--text)' }}>{s.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{ marginTop: 28, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 }}>
              <p className="section-label" style={{ fontSize: 10, marginBottom: 12 }}>// availability</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent3)' }} className="animate-pulse-glow" />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent3)' }}>Available for work</span>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)' }}>Pekanbaru, ID · Remote Friendly</p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16, padding: 40, textAlign: 'center' }}>
                <CheckCircle size={56} style={{ color: 'var(--accent3)' }} />
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 24, color: 'var(--text)' }}>Pesan Terkirim!</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14 }}>Terima kasih! Saya akan segera membalas pesan Anda.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: 'Project Collaboration', message: '' }); }} style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', background: 'none', border: '1px solid var(--accent)', padding: '8px 20px', borderRadius: 4, cursor: 'pointer' }}>
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>YOUR NAME</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Anda" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>YOUR EMAIL</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="email@example.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>SUBJECT</label>
                  <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option>Project Collaboration</option>
                    <option>Job Opportunity</option>
                    <option>General Inquiry</option>
                    <option>Freelance Work</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ceritakan tentang project Anda..." rows={5} style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '14px 28px', background: 'var(--accent)', color: 'var(--bg)',
                    border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'all 0.2s', opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                  }}
                  onMouseEnter={e => { if (form.name && form.email && form.message) (e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.4)'); }}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {loading ? 'Mengirim...' : <><Send size={14} /> Send Message</>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
