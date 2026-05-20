'use client';

const journeys = [
  {
    year: '2023–Now',
    badge: 'Freelance',
    title: 'Freelance Web Developer',
    org: 'Independent',
    desc: 'Merancang dan membangun aplikasi web full-stack untuk berbagai klien. Fokus pada sistem informasi, UI/UX design, dan otomatisasi proses kerja.',
    tags: ['Laravel', 'Next.js', 'Full-Stack', 'UI/UX'],
    color: 'var(--accent)',
    side: 'right',
  },
  {
    year: '2026',
    badge: 'Project',
    title: 'Full Stack Web Developer - IPSRS ',
    org: 'Lingkungan Rumah Sakit',
    desc: 'Membangun dua sistem web berbasis Laravel untuk pemeliharaan sarana dan monitoring APAR, menggantikan pencatatan manual dengan sistem digital real-time RS Awal Bros Ujung Batu.',
    tags: ['Laravel', 'MySQL', 'Tailwind', 'Multi-role'],
    color: 'var(--accent3)',
    side: 'left',
  },
  {
    year: '2026',
    badge: 'Project',
    title: 'Full Stack Web Developer - APAR',
    org: 'Lingkungan Rumah Sakit',
    desc: 'Membangun dua sistem web berbasis Laravel untuk pemeliharaan sarana , menggantikan pencatatan manual dengan sistem digital real-time untuk RS Awal Bros Ujung Batu.',
    tags: ['Laravel', 'MySQL', 'Tailwind', 'Multi-role'],
    color: '#FF0000',
    side: 'right',
  },
  {
    year: '2026',
    badge: 'Project',
    title: 'Full Stack Web Developer - SPPD ',
    org: 'Sistem Administrasi Digital',
    desc: 'Membangun sistem perjalanan dinas digital RS Awal Bros Ujung Batu dengan approval bertingkat, pembuatan surat otomatis, dan export laporan PDF/Excel.',
    tags: ['Laravel', 'Workflow', 'Admin System', 'PHP'],
    color: '#aa88ff',
    side: 'left',
  },
  
  {
    year: '2021–2025',
    badge: 'Education',
    title: 'D4 Rekayasa Perangkat Lunak',
    org: 'Politeknik Negeri Bengkalis',
    desc: 'Menempuh pendidikan vokasi bidang rekayasa perangkat lunak. Lulus dengan IPK 3.66 (Sangat Memuaskan). Membangun fondasi kuat dalam software engineering dan database.',
    tags: ['Software Engineering', 'Database', 'OOP', 'Web Dev','Mobile Dev'],
    color: 'var(--text3)',
    side: 'right',
  },
  {
    year: '2025',
    badge: 'UMKM',
    title: 'Fullstack Web Developer — Kelolainaja',
    org: 'Platform Konten UMKM',
    desc: 'Mendirikan layanan pengelolaan konten media sosial untuk UMKM — meliputi desain visual, copywriting, dan strategi konten untuk meningkatkan kehadiran digital.',
    tags: ['Figma', 'Content Strategy', 'Branding', 'UMKM'],
    color: '#ff9944',
    side: 'left',
  },
  {
  year: '2025',
  badge: 'UI/UX',
  title: 'UI/UX Designer — Mental Health Care',
  org: 'Aplikasi Kesehatan Mental Digital',
  desc: 'Merancang pengalaman pengguna dan antarmuka aplikasi Mental Health Care yang berfokus pada self-care, mood tracking, dan rekomendasi aktivitas healing secara personal dan real-time.',
  tags: ['Figma', 'UI/UX Design', 'User Research', 'Kotlin'],
  color: '#4dd0e1',
  side: 'right',
},
];

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// 03. journey</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1 }}>
            My <span className="text-gradient">Journey</span>
          </h2>
          <p style={{ marginTop: 16, color: 'var(--text2)', fontSize: 15, maxWidth: 480 }}>
            Milestone pertumbuhan: dari ruang kuliah hingga lingkungan produksi profesional.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, transparent, var(--border2), var(--border2), transparent)',
            transform: 'translateX(-50%)',
          }} />

          {journeys.map((j, i) => (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: j.side === 'right' ? 'flex-end' : 'flex-start',
                marginBottom: 48, position: 'relative',
              }}
            >
              {/* Center dot */}
              <div style={{
                position: 'absolute', left: '50%', top: 24, transform: 'translateX(-50%)',
                width: 14, height: 14, borderRadius: '50%',
                background: j.color, boxShadow: `0 0 16px ${j.color}66`,
                zIndex: 2, border: '2px solid var(--bg)',
              }} />

              {/* Card */}
              <div
                className="card-hover"
                style={{
                  width: '45%', background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '24px 28px',
                  marginRight: j.side === 'right' ? 0 : undefined,
                  marginLeft: j.side === 'left' ? 0 : undefined,
                }}
              >
                {/* Top accent */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${j.color}, transparent)`, borderRadius: 2, marginBottom: 16 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: j.color, border: `1px solid ${j.color}44`, padding: '2px 8px', borderRadius: 3 }}>
                    {j.badge}
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)' }}>{j.year}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--text)', marginBottom: 4 }}>
                  {j.title}
                </h3>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)', marginBottom: 12 }}>
                  {j.org}
                </p>
                <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                  {j.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {j.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          #journey [style*="left: 50%"] { left: 20px !important; }
          #journey [style*="width: 45%"] { width: 100% !important; margin-left: 44px !important; margin-right: 0 !important; }
          #journey [style*="flex-end"], #journey [style*="flex-start"] { justify-content: flex-start !important; }
          #journey [style*="translateX(-50%)"][style*="top: 24"] { left: 20px !important; transform: none !important; }
          #journey [style*="translateX(-50%)"][style*="top: 0"] { left: 20px !important; }
        }
      `}</style>
    </section>
  );
}
