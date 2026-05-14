import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { analyzeForeignTravel } from '../data/astrologyData';

export default function ForeignPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);
  const results = analyzed ? analyzeForeignTravel(chartData.planets || {}) : [];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>FOREIGN TRAVEL & SETTLEMENT</h1>
      <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
        Per Nadi: Rahu = foreign lands. Moon = travel/change. The combination of Guru/Sani/Surya/Kuja/Sukra with Moon and Rahu in same direction indicates foreign travel for self or family members.
      </p>

      <div className="card" style={{ marginBottom: 32 }}>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Check Foreign Yogas</button>
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>☊ FOREIGN TRAVEL PREDICTIONS</h2>
            <div style={{ display: 'grid', gap: 10 }}>
              {results.map((r, i) => (
                <div key={i} style={{
                  padding: '12px 16px',
                  borderLeft: `3px solid ${r.includes('No strong') ? 'var(--text3)' : 'var(--gold)'}`,
                  background: r.includes('No strong') ? 'rgba(138,128,112,0.05)' : 'rgba(201,168,76,0.05)',
                  borderRadius: '0 4px 4px 0',
                  color: r.includes('No strong') ? 'var(--text3)' : 'var(--text)',
                  fontSize: '0.92rem', lineHeight: 1.6
                }}>
                  {!r.includes('No strong') && <span style={{ color: 'var(--gold)', marginRight: 8 }}>✦</span>}{r}
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>NADI FOREIGN TRAVEL RULES</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>
              {[
                { combo: 'Guru + Moon + Rahu', result: 'Native travels to foreign countries' },
                { combo: 'Saturn + Moon + Rahu', result: 'Foreign travel or settlement abroad' },
                { combo: 'Sun + Moon + Rahu', result: 'Father or son has foreign travel' },
                { combo: 'Mars + Moon + Rahu', result: 'Brother (or husband if female native) goes abroad' },
                { combo: 'Venus + Moon + Rahu', result: 'Sister/wife/daughter or female native herself goes abroad' },
                { combo: 'Any + Moon + Ketu', result: 'Brief foreign travel only (Ketu = short stays)' },
              ].map(rule => (
                <div key={rule.combo} style={{ padding: '10px 14px', background: 'var(--surface2)', borderRadius: 4 }}>
                  <div style={{ color: 'var(--gold)', marginBottom: 4, fontFamily: "'Cinzel', serif", fontSize: '0.8rem' }}>{rule.combo}</div>
                  <div>{rule.result}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '12px 14px', background: 'rgba(201,168,76,0.05)', borderRadius: 4, fontSize: '0.85rem', color: 'var(--text2)' }}>
              <strong style={{ color: 'var(--gold)' }}>Note:</strong> "Same direction" means the planets are in houses 1, 5, 9 from each other (fire trine), or 2, 6, 10 (earth), or 3, 7, 11 (air), or 4, 8, 12 (water) — all counting from ascendant.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
