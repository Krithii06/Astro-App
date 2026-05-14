import React, { useState, useContext } from 'react';
import SouthIndianChart from '../components/SouthIndianChart';
import ChartInput from '../components/ChartInput';
import { ChartContext } from '../App';
import { PLANETS, RASHIS } from '../data/astrologyData';

export default function ChartPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);

  const hasData = chartData.ascendant && Object.keys(chartData.planets || {}).length > 0;

  const getAscRashi = () => RASHIS.find(r => r.name === chartData.ascendant);
  const getPlanetDetails = () => {
    return Object.entries(chartData.planets || {}).map(([pid, house]) => {
      const p = PLANETS.find(pl => pl.id === pid);
      const ascIdx = RASHIS.findIndex(r => r.name === chartData.ascendant);
      const rashiIdx = (ascIdx + house - 1) % 12;
      const rashi = RASHIS[rashiIdx];
      return { ...p, house, rashiName: rashi?.name, rashi };
    });
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>BIRTH CHART ANALYSIS</h1>
        <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>Enter your ascendant and planetary placements to generate your South Indian Rasi chart</p>
      </div>

      <div className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>CHART DATA INPUT</h2>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Generate Chart & Analysis</button>
        </div>
      </div>

      {(analyzed || hasData) && (
        <div className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'start', marginBottom: 32 }}>
            {/* Chart */}
            <div className="card" style={{ textAlign: 'center' }}>
              <SouthIndianChart ascendant={chartData.ascendant} planets={chartData.planets} />
            </div>

            {/* Ascendant info */}
            <div className="card">
              <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>ASCENDANT ANALYSIS</h2>
              {getAscRashi() && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {[
                      ['Rashi', `${getAscRashi().name} (${getAscRashi().english})`],
                      ['Lord', getAscRashi().lord],
                      ['Element', getAscRashi().element],
                      ['Nature', getAscRashi().nature],
                      ['Body Part', getAscRashi().body],
                      ['Direction', getAscRashi().direction],
                      ['Color', getAscRashi().color],
                      ['Disease Tendency', getAscRashi().disease],
                    ].map(([k,v]) => (
                      <div key={k} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                        <div style={{ color: 'var(--gold)', fontSize: '0.72rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}>{k}</div>
                        <div style={{ color: 'var(--text)', fontSize: '0.9rem', marginTop: 2 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="divider" />
                  <div style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--gold)' }}>Character: </strong>{getAscRashi().character}<br/>
                    <strong style={{ color: 'var(--gold)' }}>Profession: </strong>{getAscRashi().profession}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Planetary positions table */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>PLANETARY POSITIONS</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    {['Planet', 'House', 'Rashi', 'Lord of Rashi', 'Exaltation', 'Debilitation', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.72rem', letterSpacing: '0.08em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getPlanetDetails().map(p => {
                    const isExalted = p.exaltation === p.rashiName;
                    const isDebil = p.debilitation === p.rashiName;
                    const isOwn = p.ownSign?.includes(p.rashiName);
                    return (
                      <tr key={p.id} style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                        <td style={{ padding: '8px 12px' }}>
                          <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>{p.name}</span>
                          <span style={{ color: 'var(--text3)', fontSize: '0.8rem', marginLeft: 6 }}>({p.english})</span>
                        </td>
                        <td style={{ padding: '8px 12px', color: 'var(--text2)' }}>H{p.house}</td>
                        <td style={{ padding: '8px 12px', color: 'var(--text)' }}>{p.rashiName || '—'}</td>
                        <td style={{ padding: '8px 12px', color: 'var(--text2)' }}>
                          {RASHIS.find(r => r.name === p.rashiName)?.lord || '—'}
                        </td>
                        <td style={{ padding: '8px 12px', color: 'var(--text2)', fontSize: '0.85rem' }}>{p.exaltation}</td>
                        <td style={{ padding: '8px 12px', color: 'var(--text2)', fontSize: '0.85rem' }}>{p.debilitation}</td>
                        <td style={{ padding: '8px 12px' }}>
                          {isExalted && <span style={{ color: 'var(--green)', fontSize: '0.8rem', padding: '2px 8px', background: 'rgba(76,175,118,0.1)', borderRadius: 10 }}>Exalted</span>}
                          {isDebil && <span style={{ color: 'var(--red)', fontSize: '0.8rem', padding: '2px 8px', background: 'rgba(207,74,74,0.1)', borderRadius: 10 }}>Debilitated</span>}
                          {isOwn && !isExalted && <span style={{ color: '#E8D040', fontSize: '0.8rem', padding: '2px 8px', background: 'rgba(232,208,64,0.1)', borderRadius: 10 }}>Own Sign</span>}
                          {!isExalted && !isDebil && !isOwn && <span style={{ color: 'var(--text3)', fontSize: '0.8rem' }}>Normal</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Planet significance */}
          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>NADI KARAKATVA — PLANETARY SIGNIFICANCE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {getPlanetDetails().map(p => (
                <div key={p.id} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 4, padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif", fontSize: '0.85rem' }}>{p.name} in H{p.house}</span>
                    <span style={{ color: 'var(--text3)', fontSize: '0.78rem' }}>{p.rashiName}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6 }}>
                    <div><span style={{ color: 'var(--gold-dark)' }}>Signifies:</span> {p.relation}</div>
                    <div><span style={{ color: 'var(--gold-dark)' }}>Body:</span> {p.bodyPart}</div>
                    <div><span style={{ color: 'var(--gold-dark)' }}>Profession:</span> {p.profession?.slice(0,60)}{p.profession?.length > 60 ? '...' : ''}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
