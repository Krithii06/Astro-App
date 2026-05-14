import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { analyzeMedical, PLANETS } from '../data/astrologyData';

export default function MedicalPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);

  const medResults = analyzed ? analyzeMedical(chartData.planets || {}, chartData.gender) : [];

  const organColors = {
    Eyes: '#E8D040', Ear: '#A0C8E8', Nose: '#E88040', Throat: '#E880C0',
    Teeth: '#EDE8D8', Skin: '#A06040', 'Skin/Throat': '#A06040', 'Heart/Blood': '#E84040',
    'Urinary/Uterus': '#8080A0', Joints: '#40C840', Accident: '#CF4A4A',
    Mental: '#8040A0', Respiratory: '#A0C8E8', General: '#C9A84C',
    'Joints/Nerves': '#40C840',
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>MEDICAL ASTROLOGY</h1>
        <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Per Nadi method: Fire planets → Bile diseases | Water planets → Cold/Phlegm | Air planets → Gas/Vata | 
          Rahu afflicts any body part | Saturn weakens | Ketu causes extra growth
        </p>
      </div>

      <div className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>CHART DATA</h2>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Analyze Health Predictions</button>
        </div>
      </div>

      {/* Planet-body chart reference */}
      <div className="card" style={{ marginBottom: 24 }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>PLANET → BODY PART REFERENCE</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 10 }}>
          {PLANETS.map(p => (
            <div key={p.id} style={{ padding: '10px 14px', background: 'var(--surface2)', borderRadius: 4, fontSize: '0.85rem' }}>
              <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", marginBottom: 4 }}>{p.name}</div>
              <div style={{ color: 'var(--text2)' }}>{p.bodyPart}</div>
            </div>
          ))}
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>
              ⚕ HEALTH PREDICTIONS FOR YOUR CHART
            </h2>
            {medResults.length > 0 ? (
              <div style={{ display: 'grid', gap: 12 }}>
                {medResults.map((item, i) => (
                  <div key={i} style={{
                    padding: '14px 18px',
                    borderLeft: `3px solid ${organColors[item.organ] || 'var(--gold)'}`,
                    background: 'rgba(201,168,76,0.03)',
                    borderRadius: '0 4px 4px 0',
                    display: 'flex', gap: 16, alignItems: 'flex-start'
                  }}>
                    <div style={{ 
                      background: organColors[item.organ] || 'var(--gold)',
                      color: 'var(--deep)', 
                      padding: '3px 10px', 
                      borderRadius: 10, 
                      fontSize: '0.72rem', 
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '0.05em',
                      whiteSpace: 'nowrap',
                      fontWeight: 700
                    }}>
                      {item.organ}
                    </div>
                    <div style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.issue}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text2)' }}>No health afflictions found. Please enter complete planet placements.</p>
            )}
          </div>

          {/* General medical rules */}
          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>
              NADI MEDICAL RULES (S. RAVI)
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>
              <div>
                <div style={{ color: 'var(--gold)', marginBottom: 8 }}>The Three Humours (Tridosha)</div>
                <div>🔥 <strong>Fire planets</strong> (Sun, Mars, Ketu) → Pitta/Bile diseases</div>
                <div>💧 <strong>Water planets</strong> (Moon, Venus) → Kapha/Cold diseases</div>
                <div>💨 <strong>Air planets</strong> (Mercury, Saturn, Rahu) → Vata/Gas diseases</div>
              </div>
              <div>
                <div style={{ color: 'var(--gold)', marginBottom: 8 }}>Special Planetary Effects</div>
                <div>• <strong>Rahu</strong> aspects any planet → That body part gets afflicted</div>
                <div>• <strong>Saturn</strong> aspects any planet → That body part malfunctions</div>
                <div>• <strong>Ketu</strong> aspects any planet → Extra growth in that body part</div>
                <div>• Planet hemmed between 2 enemies → Body part severely afflicted</div>
              </div>
              <div>
                <div style={{ color: 'var(--gold)', marginBottom: 8 }}>Disease by Rashi (Ascendant)</div>
                {['Mesha→Bile','Vrishaba→Cold','Mithuna→Gas','Kataka→Cold','Simha→Bile','Kanya→Gas',
                  'Thula→Cold','Vrischika→Bile','Dhanus→Gas','Makara→Gas','Kumbha→Gas','Meena→Gas'].map(r => (
                  <div key={r} style={{ fontSize: '0.82rem' }}>• {r}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
