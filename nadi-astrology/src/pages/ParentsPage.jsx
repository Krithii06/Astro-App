import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { analyzeParents } from '../data/astrologyData';

export default function ParentsPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);
  const results = analyzed ? analyzeParents(chartData.planets || {}) : { father: [], mother: [] };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>PARENTS IN ASTROLOGY</h1>
      <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
        Sun (Surya) = Father. Moon (Chandra) = Mother. Jupiter's relationship with Sun/Moon shows bond with parents. Saturn's relationship indicates difficulties.
      </p>

      <div className="card" style={{ marginBottom: 32 }}>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Analyze Parent Relationships</button>
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
            <div className="card">
              <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>☉ FATHER (SURYA)</h2>
              <div style={{ display: 'grid', gap: 10 }}>
                {results.father.map((r, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderLeft: '3px solid #E8A020', background: 'rgba(232,160,32,0.05)', borderRadius: '0 4px 4px 0', color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>☽ MOTHER (CHANDRA)</h2>
              <div style={{ display: 'grid', gap: 10 }}>
                {results.mother.map((r, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderLeft: '3px solid #A0C8E8', background: 'rgba(160,200,232,0.05)', borderRadius: '0 4px 4px 0', color: 'var(--text)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>NADI RULES FOR PARENTS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>
              {[
                'Guru aspects Sun → Good relationship with father',
                'Guru aspects Moon → Good relationship with mother',
                'Saturn aspects Sun → Strained bond with father / govt troubles for father',
                'Saturn aspects Moon → Strained bond with mother / mother\'s health issues',
                'Rahu aspects Sun → Father faces sudden troubles, early loss risk',
                'Rahu aspects Moon → Danger to mother, mental issues',
                'Sun + Ketu + Moon in same direction → Parents dispute with each other',
                'Sun + Ketu + Mars in same direction → Father and brothers dispute',
                'Guru + Ketu + Moon → Dispute between native and mother',
                'Guru + Rahu in same direction → Native stays away from family',
              ].map((rule, i) => (
                <div key={i} style={{ padding: '8px 14px', background: 'var(--surface2)', borderRadius: 4 }}>• {rule}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
