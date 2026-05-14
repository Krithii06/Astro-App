import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import { calculateDasa, DASA_YEARS, PLANETS } from '../data/astrologyData';

const PLANET_COLORS = {
  Surya: '#E8A020', Chandra: '#A0C8E8', Kuja: '#E84040', Budha: '#40C840',
  Guru: '#E8D040', Sukra: '#E880C0', Sani: '#8080A0', Rahu: '#8040A0', Ketu: '#A06040'
};

const BHUKTI_ORDER = ['Ketu','Sukra','Surya','Chandra','Kuja','Rahu','Guru','Sani','Budha'];

function getBhuktis(dasaLord, dasaStart) {
  const dasaYrs = DASA_YEARS[dasaLord];
  const idx = BHUKTI_ORDER.indexOf(dasaLord);
  let start = dasaStart;
  return BHUKTI_ORDER.map((_, i) => {
    const bLord = BHUKTI_ORDER[(idx + i) % 9];
    const bYrs = (DASA_YEARS[bLord] / 120) * dasaYrs;
    const end = start + bYrs;
    const r = { lord: bLord, years: bYrs.toFixed(1), start: start.toFixed(1), end: end.toFixed(1) };
    start = end;
    return r;
  });
}

export default function DashaPage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);
  const [expandedDasa, setExpandedDasa] = useState(null);

  const dasas = analyzed && chartData.birthStar && chartData.birthYear
    ? calculateDasa(chartData.birthStar, 1, chartData.birthYear)
    : null;

  const getPlanetInfo = (id) => PLANETS.find(p => p.id === id);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>DASHA & BHUKTI PERIODS</h1>
      <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7 }}>
        The Vimshottari Dasha system gives 120-year cycle. Each planet rules a period (Mahadasha) and sub-periods (Bhukti/Antardasha). Events occur when transit planets activate natal yogas during relevant dashas.
      </p>

      <div className="card" style={{ marginBottom: 32 }}>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Calculate Dasha Periods</button>
          {(!chartData.birthStar || !chartData.birthYear) && analyzed && (
            <span style={{ color: 'var(--red)', fontSize: '0.85rem' }}>⚠ Please select Birth Star and enter Birth Year</span>
          )}
        </div>
      </div>

      {analyzed && dasas && (
        <div className="fade-in">
          {/* Dasha timeline */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>✦ MAHADASHA TIMELINE</h2>
            <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
              <div style={{ display: 'flex', height: 40, minWidth: 600, borderRadius: 4, overflow: 'hidden', border: '1px solid var(--border)' }}>
                {dasas.map(d => (
                  <div key={d.lord} style={{
                    flex: d.years,
                    background: `${PLANET_COLORS[d.lord]}33`,
                    borderRight: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', color: PLANET_COLORS[d.lord],
                    fontFamily: "'Cinzel', serif", cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                    onClick={() => setExpandedDasa(expandedDasa === d.lord ? null : d.lord)}
                    title={`${d.lord}: ${d.start}-${d.end}`}
                  >
                    {d.lord.slice(0,2)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dasha cards */}
          <div style={{ display: 'grid', gap: 12 }}>
            {dasas.map(d => {
              const now = new Date().getFullYear();
              const isActive = d.start <= now && d.end > now;
              const isPast = d.end <= now;
              const pInfo = getPlanetInfo(d.lord);

              return (
                <div key={d.lord} style={{
                  border: `1px solid ${isActive ? PLANET_COLORS[d.lord] : 'var(--border)'}`,
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: isActive ? `${PLANET_COLORS[d.lord]}08` : 'var(--surface)',
                }}>
                  <div
                    onClick={() => setExpandedDasa(expandedDasa === d.lord ? null : d.lord)}
                    style={{
                      padding: '14px 20px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 4, height: 36, background: PLANET_COLORS[d.lord], borderRadius: 2 }} />
                      <div>
                        <div style={{ color: PLANET_COLORS[d.lord], fontFamily: "'Cinzel', serif", fontSize: '1rem', letterSpacing: '0.05em' }}>
                          {d.lord} Mahadasha
                          {isActive && <span style={{ marginLeft: 10, fontSize: '0.7rem', background: `${PLANET_COLORS[d.lord]}33`, padding: '2px 8px', borderRadius: 10 }}>ACTIVE NOW</span>}
                          {isPast && <span style={{ marginLeft: 10, fontSize: '0.7rem', color: 'var(--text3)' }}>Completed</span>}
                        </div>
                        <div style={{ color: 'var(--text2)', fontSize: '0.85rem', marginTop: 2 }}>
                          {Math.round(d.start)} – {Math.round(d.end)} ({d.years} years)
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 20, fontSize: '0.82rem', color: 'var(--text2)' }}>
                      <div><span style={{ color: 'var(--gold)' }}>Signifies: </span>{pInfo?.relation}</div>
                      <span style={{ color: 'var(--text3)' }}>{expandedDasa === d.lord ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {expandedDasa === d.lord && (
                    <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                        <div style={{ fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>
                          <div><strong style={{ color: 'var(--gold)' }}>Body Part:</strong> {pInfo?.bodyPart}</div>
                          <div><strong style={{ color: 'var(--gold)' }}>Health:</strong> {pInfo?.disease}</div>
                          <div><strong style={{ color: 'var(--gold)' }}>Profession:</strong> {pInfo?.profession?.slice(0,80)}</div>
                          <div><strong style={{ color: 'var(--gold)' }}>Character:</strong> {pInfo?.character}</div>
                        </div>
                        <div>
                          <div style={{ color: 'var(--gold)', fontSize: '0.8rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.08em', marginBottom: 10 }}>BHUKTI (SUB-PERIODS)</div>
                          <div style={{ display: 'grid', gap: 4 }}>
                            {getBhuktis(d.lord, d.start).map(b => {
                              const bActive = b.start <= now && b.end > now;
                              return (
                                <div key={b.lord} style={{
                                  display: 'flex', justifyContent: 'space-between',
                                  padding: '4px 10px', borderRadius: 4,
                                  background: bActive ? `${PLANET_COLORS[b.lord]}22` : 'transparent',
                                  border: bActive ? `1px solid ${PLANET_COLORS[b.lord]}66` : '1px solid transparent',
                                  fontSize: '0.8rem'
                                }}>
                                  <span style={{ color: PLANET_COLORS[b.lord] }}>{b.lord}</span>
                                  <span style={{ color: 'var(--text2)' }}>{parseFloat(b.start).toFixed(0)}–{parseFloat(b.end).toFixed(0)} ({b.years} yrs)</span>
                                  {bActive && <span style={{ color: PLANET_COLORS[b.lord], fontSize: '0.7rem' }}>●</span>}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transit activation rules */}
          <div className="card" style={{ marginTop: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>TRANSIT ACTIVATION RULES (S. RAVI)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.8 }}>
              {[
                'Transit Jupiter aspected by natal Venus → Marriage',
                'Transit Jupiter aspected by natal Mars → Marriage (female)',
                'Transit Saturn aspected by natal Jupiter → Job/Promotion',
                'Transit Saturn aspected by natal Venus → Marriage/Property',
                'Transit Jupiter aspected by natal Sun → Promotion/Success',
                'Transit Jupiter aspected by natal Moon → Change of residence',
                'Transit Rahu over natal planets → Sudden disruption',
                'Transit Ketu over natal Venus → Separation',
                'Transit Saturn aspected by natal Moon → Unnecessary travel/expenses',
                'Transit Jupiter aspected by natal Venus → Birth of daughter',
              ].map((r, i) => (
                <div key={i} style={{ padding: '8px 14px', background: 'var(--surface2)', borderRadius: 4 }}>✦ {r}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
