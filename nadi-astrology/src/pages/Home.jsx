import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { icon: '⬡', title: 'Birth Chart', desc: 'South Indian style Rasi chart with complete planetary analysis', path: '/chart' },
  { icon: '♀', title: 'Love & Marriage', desc: 'Marriage timing, partner nature, pre-marital relationships, divorce indicators', path: '/love' },
  { icon: '♄', title: 'Medical Astrology', desc: 'Health predictions, disease tendencies, body part afflictions', path: '/medical' },
  { icon: '♃', title: 'Career & Profession', desc: 'Career guidance based on Saturn aspects and planetary combinations', path: '/career' },
  { icon: '☊', title: 'Foreign Travel', desc: 'Foreign settlement, travel abroad yogas and predictions', path: '/foreign' },
  { icon: '☽', title: 'Parents', desc: 'Relationship with parents, their health and nature', path: '/parents' },
  { icon: '✦', title: 'Dasha Periods', desc: 'Mahadasha and Antardasha timing for life events', path: '/dasha' },
  { icon: '★', title: 'Yogas', desc: 'Dhana Yoga, Sanyasa Yoga, Moksha Yoga and more', path: '/yogas' },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: 60, padding: '40px 20px', position: 'relative' }}>
        <div style={{ color: 'var(--gold)', fontSize: '3rem', marginBottom: 16, lineHeight: 1 }}>
          ☽ ✦ ☉
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--gold)', letterSpacing: '0.1em', marginBottom: 16, lineHeight: 1.3 }}>
          NADI JYOTISH
        </h1>
        <p style={{ fontStyle: 'italic', color: 'var(--gold-light)', fontSize: '1.1rem', marginBottom: 8 }}>
          Secrets of Nadi Astrology
        </p>
        <p style={{ color: 'var(--text2)', maxWidth: 600, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Based on the ancient wisdom of <em>S. Ravi's "Secrets of Nadi Astrology"</em> — 
          the Graha Karakatva method of prediction used by traditional Nadi astrologers 
          for accurate life readings.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/chart"><button className="btn-gold">Read My Chart</button></Link>
          <Link to="/love"><button className="btn-outline">Love Predictions</button></Link>
        </div>
      </div>

      <div className="divider" />

      {/* Method explanation */}
      <div style={{ marginBottom: 48, padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4 }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: 16 }}>THE NADI METHOD</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {[
            { title: 'Graha Karakatva', desc: 'Predictions based on planetary significations (Karakatwas), not house positions alone.' },
            { title: 'Planetary Aspects', desc: 'Planets in 1,5,9 (same direction), 3,7,11 (opposite), and 2,12 (front/rear) aspect each other.' },
            { title: 'Parivarthana Yoga', desc: 'Planetary exchange creates unexpected events — both good and bad.' },
            { title: 'Transit Activation', desc: 'Jupiter and Saturn transits activate yogas in the birth chart.' },
          ].map(item => (
            <div key={item.title}>
              <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 6 }}>✦ {item.title}</div>
              <div style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features grid */}
      <h2 style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.15em', marginBottom: 24, textAlign: 'center' }}>WHAT YOU CAN DISCOVER</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        {features.map(f => (
          <Link key={f.path} to={f.path} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 4, padding: 20,
              transition: 'all 0.3s', cursor: 'pointer',
              ':hover': { borderColor: 'var(--gold)' }
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: 10, color: 'var(--gold)' }}>{f.icon}</div>
              <div style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-light)', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: 8 }}>{f.title}</div>
              <div style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="divider" style={{ margin: '48px 0 32px' }} />

      {/* Key Karakas */}
      <h2 style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.15em', marginBottom: 20, textAlign: 'center' }}>KEY PLANETARY SIGNIFICATORS</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
        {[
          { planet: 'Guru (Jupiter)', role: 'Jeevakaraka (Self) for Males', color: '#E8D040' },
          { planet: 'Sukra (Venus)', role: 'Jeevakaraka for Females / Wife', color: '#E880C0' },
          { planet: 'Sani (Saturn)', role: 'Karmakaraka (Profession/Fate)', color: '#8080A0' },
          { planet: 'Budha (Mercury)', role: 'Education & Intellect', color: '#40C840' },
          { planet: 'Surya (Sun)', role: 'Father & Authority', color: '#E8A020' },
          { planet: 'Chandra (Moon)', role: 'Mother & Mind', color: '#A0C8E8' },
          { planet: 'Kuja (Mars)', role: 'Husband / Brother', color: '#E84040' },
          { planet: 'Rahu', role: 'Foreign travel & Disruption', color: '#8040A0' },
          { planet: 'Ketu', role: 'Moksha & Spirituality', color: '#A06040' },
        ].map(k => (
          <div key={k.planet} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4, padding: '10px 14px' }}>
            <div style={{ color: k.color, fontFamily: "'Cinzel', serif", fontSize: '0.8rem', fontWeight: 600 }}>{k.planet}</div>
            <div style={{ color: 'var(--text2)', fontSize: '0.82rem', marginTop: 4 }}>{k.role}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48, color: 'var(--text3)', fontSize: '0.85rem', fontStyle: 'italic' }}>
        Based on "Secrets of Nadi Astrology" by S. Ravi | For educational purposes
      </div>
    </div>
  );
}
