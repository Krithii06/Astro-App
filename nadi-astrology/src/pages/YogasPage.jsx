import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { analyzeYogas } from '../data/astrologyData';

export default function YogasPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);
  const yogas = analyzed ? analyzeYogas(chartData.planets || {}, chartData.gender) : [];

  const typeColors = { positive: 'var(--green)', negative: 'var(--red)', neutral: 'var(--gold)' };
  const typeLabels = { positive: 'Beneficial', negative: 'Challenging', neutral: 'Mixed/Neutral' };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>YOGAS & SPECIAL COMBINATIONS</h1>
      <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
        Yogas are specific planetary combinations that produce distinctive life results. Nadi astrology focuses on Graha Karakatva combinations rather than house-based yogas.
      </p>

      <div className="card" style={{ marginBottom: 32 }}>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Find Yogas in My Chart</button>
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          {yogas.length > 0 ? (
            <>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                {Object.entries(typeLabels).map(([type, label]) => {
                  const count = yogas.filter(y => y.type === type).length;
                  return count > 0 ? (
                    <div key={type} style={{ padding: '6px 16px', background: `${typeColors[type]}22`, border: `1px solid ${typeColors[type]}66`, borderRadius: 20, fontSize: '0.82rem', color: typeColors[type] }}>
                      {count} {label} Yoga{count > 1 ? 's' : ''}
                    </div>
                  ) : null;
                })}
              </div>
              <div style={{ display: 'grid', gap: 14 }}>
                {yogas.map((y, i) => (
                  <div key={i} style={{
                    padding: '16px 20px',
                    border: `1px solid ${typeColors[y.type]}44`,
                    borderLeft: `4px solid ${typeColors[y.type]}`,
                    background: `${typeColors[y.type]}06`,
                    borderRadius: '0 4px 4px 0'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ color: typeColors[y.type], fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.06em' }}>★ {y.name}</span>
                      <span style={{ fontSize: '0.72rem', padding: '2px 10px', borderRadius: 10, background: `${typeColors[y.type]}22`, color: typeColors[y.type] }}>{typeLabels[y.type]}</span>
                    </div>
                    <div style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.7 }}>{y.desc}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="card">
              <p style={{ color: 'var(--text2)', textAlign: 'center' }}>No yogas detected. Please enter all planet placements for complete analysis.</p>
            </div>
          )}

          {/* Complete yoga reference */}
          <div className="card" style={{ marginTop: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>COMPLETE NADI YOGA REFERENCE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {[
                { title: 'Career Yogas (Saturn-based)', items: ['Venus aspects Saturn → Dhana Yoga (wealth, luxury)','Jupiter aspects Saturn → Comfortable career','Mercury aspects Saturn → Business success','Mars aspects Saturn → Hardship throughout life','Sun aspects Saturn → Government troubles','Rahu aspects Saturn → Daridra Yoga initially → Eminent later','Ketu aspects Saturn → Recluse, no stable job'] },
                { title: 'Spiritual Yogas', items: ['Ketu+Jupiter → Moksha Yoga','Ketu+Saturn → Spiritual inclination','Jupiter+Sun+Ketu → Raja Yoga','Jupiter+Moon+Ketu → Bhakti Yoga','Jupiter+Mars+Ketu → Hatha Yoga','Jupiter+Mercury+Ketu → Gnana Yoga','Jupiter+Venus+Ketu → Kundalini Yoga'] },
                { title: 'Career Talent Yogas', items: ['Sun aspects Jupiter/Saturn → Politician','Mercury aspects Jupiter/Saturn → Writer/Speaker','Venus aspects Jupiter/Saturn → Artist/Singer/Actor','Ketu aspects Jupiter/Saturn → Astrologer/Occultist'] },
                { title: 'Parivarthana (Exchange) Yoga', items: ['Planet A in B\'s sign & B in A\'s sign = Exchange','Creates sudden unexpected events','Both good and bad depending on planets','After exchange, planets give results of each other\'s house','Friendly exchange → Very beneficial','Enemy exchange → Dangerous, harmful'] },
                { title: 'Karthari Yoga', items: ['Planet hemmed between two others','Three planets in successive signs → Hemmed planet affected','If hemmed by friendly planets → Strong and beneficial','If hemmed by enemies → Weak and afflicted','Rahu+Saturn around a planet → Severe affliction'] },
                { title: 'Relationship Yogas', items: ['Budha+Ketu same direction → Love affair','Sukra+Chandra same direction → Eloping','Sukra+Rahu+Kuja same direction → Separation risk','Guru+Sukra aspects each other → Happy marriage','Guru+Surya aspects each other → Good father relationship'] },
              ].map(section => (
                <div key={section.title} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 4, padding: 16 }}>
                  <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.82rem', letterSpacing: '0.08em', marginBottom: 12 }}>{section.title}</div>
                  {section.items.map((item, i) => (
                    <div key={i} style={{ color: 'var(--text2)', fontSize: '0.83rem', lineHeight: 1.7, paddingLeft: 8, borderLeft: '1px solid var(--border)', marginBottom: 4 }}>• {item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
