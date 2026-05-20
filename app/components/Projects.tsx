'use client';
import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { 
  Hospital, 
  Flame, 
  Plane, 
  Megaphone, 
  Brain 
} from 'lucide-react';

const projects = [
  {
    id: 1,
    label: 'Full-Stack Web App',
    title: 'IPSRS',
    subtitle: 'Sistem Informasi Pemeliharaan Sarana Rumah Sakit',
    desc: 'Sistem berbasis web untuk pelaporan kerusakan, pengelolaan work order, monitoring perbaikan, dan pembuatan laporan maintenance secara real-time di lingkungan rumah sakit.',
    details: 'Sistem ini dirancang untuk mempermudah komunikasi antara unit pelapor, admin IPSRS, dan teknisi sehingga proses penanganan kerusakan menjadi lebih cepat, terstruktur, dan terdokumentasi dengan baik.',
    features: [
      'Manajemen laporan kerusakan',
      'Tracking work order real-time',
      'Upload dokumentasi foto sebelum/sesudah perbaikan',
      'Monitoring status teknisi',
      'Dashboard monitoring',
      'Export laporan PDF & Excel',
      'Manajemen role-based access',
    ],
    stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
    stats: [
      { val: '↓90%', label: 'Manual Recording' },
      { val: 'Real-time', label: 'Monitoring' },
      { val: 'Multi-role', label: 'Access Control' },
    ],
    color: 'var(--accent)',
    icon: Hospital,
  },
  {
    id: 2,
    label: 'Monitoring System',
    title: 'Sistem Pengecekan APAR',
    subtitle: 'Fire Extinguisher Inspection & Monitoring System',
    desc: 'Sistem digital untuk monitoring, inspeksi, dan pendataan kondisi APAR di lingkungan rumah sakit secara real-time dengan notifikasi otomatis masa berlaku.',
    details: 'Membantu petugas melakukan pengecekan rutin, mencatat kondisi APAR, memonitor masa berlaku, serta mendokumentasikan hasil inspeksi secara digital.',
    features: [
      'Pendataan lokasi APAR',
      'Checklist inspeksi digital',
      'Upload foto kondisi APAR',
      'Monitoring jadwal pengecekan',
      'Status kelayakan & notifikasi refill',
      'Dashboard monitoring terpusat',
      'Export laporan PDF & Excel',
    ],
    stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
    stats: [
      { val: '100%', label: 'Digital Tracking' },
      { val: 'Auto', label: 'Notifications' },
      { val: '↓', label: 'Manual Records' },
    ],
    color: 'var(--accent3)',
    icon : Flame,
  },
  {
    id: 3,
    label: 'Admin & Workflow',
    title: 'SPPD',
    subtitle: 'Sistem Surat Perintah Perjalanan Dinas',
    desc: 'Sistem digital untuk pengajuan, persetujuan bertingkat, dan pengelolaan perjalanan dinas agar proses administrasi lebih cepat, terstruktur, dan transparan.',
    details: 'Proses administrasi perjalanan dinas menjadi lebih cepat, terstruktur, dan mudah dipantau oleh admin maupun pimpinan dengan approval workflow yang jelas.',
    features: [
      'Pengajuan SPPD digital',
      'Approval bertingkat (multi-level)',
      'Manajemen data pegawai',
      'Pencatatan tujuan & biaya perjalanan',
      'Upload dokumen pendukung',
      'Monitoring status pengajuan',
      'Pembuatan surat otomatis + export PDF/Excel',
    ],
    stack: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
    stats: [
      { val: 'Multi-level', label: 'Approval' },
      { val: 'Auto', label: 'Surat Generator' },
      { val: '↑', label: 'Transparansi' },
    ],
    color: '#aa88ff',
    icon: Plane,
  },
  {
    id: 4,
    label: 'UMKM Platform',
    title: 'Kelolainaja',
    subtitle: 'Platform Pengelolaan Konten Media Sosial UMKM',
    desc: 'Layanan dan platform UMKM yang bergerak di bidang pembuatan serta pengelolaan konten media sosial untuk membantu bisnis meningkatkan kehadiran digital mereka.',
    details: 'Berfokus pada pembuatan konten yang kreatif, konsisten, dan sesuai dengan identitas brand — mulai dari desain visual, copywriting, hingga strategi penjadwalan konten.',
    features: [
      'Desain visual konten media sosial',
      'Copywriting & content strategy',
      'Penjadwalan konten terstruktur',
      'Branding & identitas visual',
      'Peningkatan engagement & reach',
      'Laporan analitik performa konten',
    ],
    stack: ['Figma', 'Laravel', 'MySQL', 'PHP','Content Strategy'],
    stats: [
      { val: 'UMKM', label: 'Focused' },
      { val: '↑', label: 'Digital Presence' },
      { val: '↑', label: 'Engagement' },
    ],
    color: '#ff9944',
    icon: Megaphone,
  },
  {
  id: 5,
  label: 'UI/UX Design + Mobile App',
  title: 'Mental Health Care',
  subtitle: 'Aplikasi Kesehatan Mental Digital',
  desc: 'Aplikasi mobile untuk membantu pengguna dalam memantau kondisi kesehatan mental, memberikan rekomendasi aktivitas healing, serta mendukung self-care secara mandiri dan real-time.',
  details: 'Dirancang dengan fokus pada pengalaman pengguna yang tenang, empatik, dan mudah digunakan, terutama untuk remaja hingga dewasa yang membutuhkan dukungan psikologis secara mandiri.',
  features: [
    'Mood tracking harian & bulanan',
    'Rekomendasi aktivitas healing personal',
    'Reminder self-care & journaling',
    'UI/UX design yang calming & user-friendly',
    'Dashboard perkembangan emosi',
    'User flow sederhana dan intuitif',
  ],
  stack: ['Figma', 'Kotlin', 'Firebase', 'UI/UX Research'],
  stats: [
    { val: 'Calm', label: 'Design Approach' },
    { val: 'Real-time', label: 'Tracking' },
    { val: 'User-focused', label: 'Experience' },
  ],
  color: '#4dd0e1',
  icon: Brain,
},
];

export default function Projects() {
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative', background: 'var(--bg2)' }}>
      {/* Subtle grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>// 02. projects</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1 }}>
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p style={{ marginTop: 16, color: 'var(--text2)', fontSize: 15, maxWidth: 480 }}>
            Solusi web fungsional dengan fokus pada akurasi data, otomatisasi, dan pengalaman pengguna.
          </p>
        </div>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              onClick={() => setActive(proj)}
              className="card-hover"
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, padding: 28, cursor: 'pointer',
                position: 'relative', overflow: 'hidden',
                gridColumn: i === 0 ? 'span 1' : undefined,
              }}
            >
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: proj.color, border: `1px solid ${proj.color}33`, padding: '3px 10px', borderRadius: 3 }}>
                  {proj.label}
                </span>
                <span style={{ fontSize: 28 }}>
                  <proj.icon size={28} color={proj.color} />
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--text)', marginBottom: 6, lineHeight: 1.2 }}>
                {proj.title}
              </h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)', marginBottom: 14, letterSpacing: '0.05em' }}>
                {proj.subtitle}
              </p>
              <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                {proj.desc}
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 12, marginBottom: 20, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                {proj.stats.map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, color: proj.color }}>{s.val}</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--text3)', letterSpacing: '0.08em' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {proj.stack.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Read more */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: proj.color, fontFamily: 'var(--mono)', fontSize: 11 }}>
                <span>View Details</span>
                <ExternalLink size={11} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(8,12,16,0.85)', backdropFilter: 'blur(12px)',
            zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          }}
          onClick={() => setActive(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 16,
              maxWidth: 640, width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: 40,
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${active.color}, transparent)`, borderRadius: '16px 16px 0 0' }} />

            <button onClick={() => setActive(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 6, cursor: 'pointer', color: 'var(--text2)' }}>
              <X size={16} />
            </button>

            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{active.label}</span>
            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 32, color: 'var(--text)', marginTop: 8, marginBottom: 4 }}>{active.title}</h3>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text3)', marginBottom: 20 }}>{active.subtitle}</p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>{active.desc}</p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: 14, marginBottom: 28 }}>{active.details}</p>

            <p className="section-label" style={{ fontSize: 10, marginBottom: 12 }}>// fitur utama</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
              {active.features.map(f => (
                <li key={f} style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text2)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: active.color }}>▸</span> {f}
                </li>
              ))}
            </ul>

            <p className="section-label" style={{ fontSize: 10, marginBottom: 12 }}>// tech stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {active.stack.map(t => (
                <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 11, padding: '5px 14px', border: `1px solid ${active.color}44`, background: `${active.color}0a`, color: active.color, borderRadius: 4 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
