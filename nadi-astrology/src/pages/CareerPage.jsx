import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { analyzeCareer, RASHIS } from '../data/astrologyData';

export default function CareerPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);
  const results = analyzed ? analyzeCareer(chartData.planets || {}) : [];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>CAREER & PROFESSION</h1>
      <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
        Saturn (Sani) is the Karmakaraka — significator of profession. Planets aspecting Saturn determine your career field.
      </p>

      <div className="card" style={{ marginBottom: 32 }}>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Analyze Career</button>
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>◆ CAREER PREDICTIONS</h2>
            {results.length > 0 ? (
              <div style={{ display: 'grid', gap: 12 }}>
                {results.map((item, i) => (
                  <div key={i} style={{ padding: '14px 18px', borderLeft: '3px solid var(--gold)', background: 'rgba(201,168,76,0.04)', borderRadius: '0 4px 4px 0' }}>
                    <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.85rem', marginBottom: 6 }}>{item.career}</div>
                    <div style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text2)' }}>Enter Saturn's house placement to see career predictions.</p>
            )}
          </div>

          {/* Rashi profession reference */}
          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>RASHI-WISE PROFESSION GUIDE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {RASHIS.map(r => (
                <div key={r.num} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 4, padding: '12px 14px' }}>
                  <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.82rem', marginBottom: 6 }}>{r.name} ({r.english})</div>
                  <div style={{ color: 'var(--text2)', fontSize: '0.8rem', lineHeight: 1.6 }}>{r.profession}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
