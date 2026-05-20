'use client';
import { MapPin } from 'lucide-react';

const languages = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java', 'Kotlin', 'MySQL'];
const frameworks = ['Laravel', 'Next.js', 'Tailwind', 'Bootstrap', 'React Native'];
const tools = ['Figma', 'Git', 'VS Code', 'Vite', 'Notion', 'Postman', 'Ubuntu', 'Linux','Laragon'];

type SkillBadgeProps = { label: string; color?: string };
function SkillBadge({ label, color = 'var(--accent)' }: SkillBadgeProps) {
  return (
    <span
      style={{
        fontFamily: 'var(--mono)', fontSize: 11, padding: '4px 12px',
        border: `1px solid ${color}22`, background: `${color}08`,
        borderRadius: 4, color, letterSpacing: '0.05em', display: 'inline-block',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget.style.background = `${color}18`);
        (e.currentTarget.style.borderColor = color);
      }}
      onMouseLeave={e => {
        (e.currentTarget.style.background = `${color}08`);
        (e.currentTarget.style.borderColor = `${color}22`);
      }}
    >
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// 01. about</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1 }}>
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 60, alignItems: 'start' }}>
          {/* Left: Bio */}
          <div>
            {/* Card identity */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 8, padding: 28, marginBottom: 32,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: 60, height: 60, borderRadius: 8, background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent3) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--display)', fontSize: 24, fontWeight: 800, color: 'var(--bg)',
                  flexShrink: 0,
                }}>
                  A
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>Adriansyah</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em' }}>Software Engineer & UI/UX Designer</p>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block' }} className="animate-pulse-glow" />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent3)' }}>Online</span>
                </div>
              </div>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 16 }} />
              <p style={{ 
  fontFamily: 'var(--mono)', 
  fontSize: 11, 
  color: 'var(--text3)', 
  letterSpacing: '0.05em',
  display: 'flex',
  alignItems: 'center',
  gap: 6
}}>
  <MapPin size={14} color="var(--accent)" />
  Pekanbaru, Riau, Indonesia
</p>
            </div>

            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>
              Software Engineer & UI/UX Designer yang berfokus pada pengembangan sistem informasi berbasis web dan mobile, dengan pengalaman membangun aplikasi manajemen, workflow system, dan UI/UX yang berorientasi pada<span style={{ color: 'var(--text)' }}> efisiensi dan pengalaman pengguna.</span>
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 15, marginBottom: 32 }}>
              Berpengalaman dalam membangun sistem digital untuk membantu otomatisasi proses kerja dan meningkatkan pengalaman pengguna. Aktif sebagai <span style={{ color: 'var(--text)' }}>Freelance Web Developer</span> sejak 2023.
            </p>

            {/* Education Card */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 8, padding: 24,
            }}>
              <p className="section-label" style={{ marginBottom: 12, fontSize: 10 }}>// pendidikan</p>
              <p style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 4 }}>
                D4 Rekayasa Perangkat Lunak
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--text2)', marginBottom: 12 }}>
                Politeknik Negeri Bengkalis · 2021–2025
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent3))',
                  borderRadius: 4, padding: '4px 12px',
                  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, color: 'var(--bg)',
                }}>
                  3.66 GPA
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)' }}>Sangat Memuaskan</span>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <div style={{ marginBottom: 36 }}>
              <p className="section-label" style={{ marginBottom: 16, fontSize: 10 }}>// core languages</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {languages.map(l => <SkillBadge key={l} label={l} color="var(--accent)" />)}
              </div>
            </div>

            <div style={{ marginBottom: 36 }}>
              <p className="section-label" style={{ marginBottom: 16, fontSize: 10 }}>// frameworks & ui</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {frameworks.map(f => <SkillBadge key={f} label={f} color="var(--accent3)" />)}
              </div>
            </div>

            <div style={{ marginBottom: 36 }}>
              <p className="section-label" style={{ marginBottom: 16, fontSize: 10 }}>// tools & ecosystem</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tools.map(t => <SkillBadge key={t} label={t} color="#aa88ff" />)}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { num: '4+', label: 'Projects Built' },
                { num: '2+', label: 'Years Freelance' },
                { num: '3.66', label: 'GPA Score' },
                { num: '∞', label: 'Lines of Code' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 8, padding: '20px 16px', textAlign: 'center',
                    transition: 'all 0.2s',
                  }}
                  className="card-hover"
                >
                  <p style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 800 }} className="text-gradient">
                    {stat.num}
                  </p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em', marginTop: 4 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
