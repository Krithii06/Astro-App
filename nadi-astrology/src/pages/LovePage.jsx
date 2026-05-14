import React, { useState, useContext } from 'react';
import { ChartContext } from '../App';
import ChartInput from '../components/ChartInput';
import SouthIndianChart from '../components/SouthIndianChart';
import { analyzeMarriage, analyzeSexAndRelationship } from '../data/astrologyData';

export default function LovePage() {
  const { chartData, setChartData } = useContext(ChartContext);
  const [analyzed, setAnalyzed] = useState(false);

  const marriageResults = analyzed ? analyzeMarriage(chartData.planets || {}, chartData.gender) : [];
  const sexResults = analyzed ? analyzeSexAndRelationship(chartData.planets || {}, chartData.gender) : [];

  const ResultItem = ({ item }) => (
    <div style={{
      padding: '12px 16px',
      borderLeft: `3px solid ${item.type === 'positive' ? 'var(--green)' : item.type === 'negative' ? 'var(--red)' : 'var(--gold)'}`,
      background: item.type === 'positive' ? 'rgba(76,175,118,0.05)' : item.type === 'negative' ? 'rgba(207,74,74,0.05)' : 'rgba(201,168,76,0.05)',
      borderRadius: '0 4px 4px 0',
      fontSize: '0.92rem',
      lineHeight: 1.6,
      color: 'var(--text)',
    }}>
      <span style={{ marginRight: 8, fontSize: '0.8rem' }}>
        {item.type === 'positive' ? '✓' : item.type === 'negative' ? '⚠' : '◆'}
      </span>
      {item.text}
    </div>
  );

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: 'var(--gold)', fontSize: '1.4rem', letterSpacing: '0.1em', marginBottom: 8 }}>LOVE, MARRIAGE & RELATIONSHIPS</h1>
        <p style={{ color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Nadi method: Venus (Sukra) = wife/love for males | Mars (Kuja) = husband for females | 
          Jupiter = self (male) | Saturn = karma/fate of marriage
        </p>
      </div>

      <div className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>ENTER CHART DATA</h2>
        <ChartInput chartData={chartData} setChartData={setChartData} />
        <div style={{ marginTop: 20 }}>
          <button className="btn-gold" onClick={() => setAnalyzed(true)}>Analyze Love & Marriage</button>
        </div>
      </div>

      {analyzed && (
        <div className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 24, marginBottom: 24 }}>
            <div className="card">
              <SouthIndianChart ascendant={chartData.ascendant} planets={chartData.planets} title="Your Rasi Chart" />
            </div>
            <div>
              {/* Marriage Rules Summary */}
              <div className="card" style={{ marginBottom: 16 }}>
                <h3 style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: 12 }}>
                  {chartData.gender === 'male' ? '♂ MALE CHART — MARRIAGE INDICATORS' : '♀ FEMALE CHART — MARRIAGE INDICATORS'}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text2)', background: 'var(--surface2)', padding: 14, borderRadius: 4, marginBottom: 16, lineHeight: 1.8 }}>
                  {chartData.gender === 'male' ? (
                    <>
                      <div>• <strong style={{ color: 'var(--gold)' }}>Sukra (Venus)</strong> = Your wife/girlfriend significator</div>
                      <div>• <strong style={{ color: 'var(--gold)' }}>Guru (Jupiter)</strong> = Your self (Jeevakaraka)</div>
                      <div>• Venus aspects Jupiter → <span style={{ color: 'var(--green)' }}>Marriage will happen</span></div>
                      <div>• Venus aspects Saturn → <span style={{ color: 'var(--gold)' }}>Late marriage</span></div>
                      <div>• Rahu aspects Venus → <span style={{ color: 'var(--red)' }}>Delay/denial</span></div>
                    </>
                  ) : (
                    <>
                      <div>• <strong style={{ color: 'var(--gold)' }}>Kuja (Mars)</strong> = Your husband significator</div>
                      <div>• <strong style={{ color: 'var(--gold)' }}>Sukra (Venus)</strong> = Your self (Jeevakaraka)</div>
                      <div>• Mars aspects Venus → <span style={{ color: 'var(--green)' }}>Marriage confirmed</span></div>
                      <div>• Mars aspects Saturn → <span style={{ color: 'var(--gold)' }}>Late marriage</span></div>
                      <div>• Rahu aspects Mars → <span style={{ color: 'var(--red)' }}>Delay/denial</span></div>
                    </>
                  )}
                </div>
              </div>

              {/* Sukra/Kuja house info */}
              <div className="card">
                <h3 style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: 12 }}>KEY PLANETS IN YOUR CHART</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {['Sukra', 'Kuja', 'Guru', 'Sani', 'Rahu', 'Ketu', 'Chandra', 'Budha'].map(p => (
                    <div key={p} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(201,168,76,0.1)', fontSize: '0.88rem' }}>
                      <span style={{ color: 'var(--gold)' }}>{p}</span>
                      <span style={{ color: 'var(--text2)' }}>
                        {chartData.planets?.[p] ? `House ${chartData.planets[p]}` : 'Not placed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Marriage predictions */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 20 }}>
              ♥ MARRIAGE PREDICTIONS
            </h2>
            {marriageResults.length > 0 ? (
              <div style={{ display: 'grid', gap: 10 }}>
                {marriageResults.map((item, i) => <ResultItem key={i} item={item} />)}
              </div>
            ) : (
              <p style={{ color: 'var(--text2)' }}>Please fill in planet placements to see marriage predictions.</p>
            )}
          </div>

          {/* Pre-marital / affair analysis */}
          <div className="card" style={{ marginBottom: 24 }}>
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>
              ◆ LOVE AFFAIRS & PRE-MARITAL RELATIONSHIPS
            </h2>
            <div style={{ background: 'rgba(201,168,76,0.05)', padding: '10px 14px', borderRadius: 4, marginBottom: 16, fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7 }}>
              Per Nadi rules: Budha+Ketu in same direction indicates love affairs. 
              Sukra+Chandra indicates eloping. Moon+Venus+Mercury together indicates loose character.
            </div>
            {sexResults.length > 0 ? (
              <div style={{ display: 'grid', gap: 10 }}>
                {sexResults.map((item, i) => <ResultItem key={i} item={item} />)}
              </div>
            ) : (
              <p style={{ color: 'var(--text2)' }}>Fill in planet placements for relationship analysis.</p>
            )}
          </div>

          {/* Nature of spouse */}
          <div className="card">
            <h2 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: 16 }}>
              ✦ NATURE OF SPOUSE
            </h2>
            <div style={{ color: 'var(--text2)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: 12 }}>
                The nature of spouse is determined by planets aspecting <strong style={{ color: 'var(--gold)' }}>
                {chartData.gender === 'male' ? 'Venus (Sukra)' : 'Mars (Kuja)'}</strong> from 1,5,9 (same direction), 3,7,11 (opposite), or 2,12 (front/rear):
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
                {[
                  { planet: 'Sun aspects', quality: 'Comes from respectable/royal family. Administrator. Popular.' },
                  { planet: 'Moon aspects', quality: 'Artistic but unsteady. May be ill-famed.' },
                  { planet: 'Mars aspects', quality: 'Short-tempered, stubborn, dominating.' },
                  { planet: 'Mercury aspects', quality: 'Intelligent, soft spoken, witty.' },
                  { planet: 'Jupiter aspects', quality: 'Religious, all good qualities, noble.' },
                  { planet: 'Saturn aspects', quality: 'Lazy, working spouse, independent.' },
                  { planet: 'Rahu aspects', quality: 'Secretive, liar, possibly handicapped.' },
                  { planet: 'Ketu aspects', quality: 'Religious minded.' },
                ].map(s => (
                  <div key={s.planet} style={{ padding: '8px 12px', background: 'var(--surface2)', borderRadius: 4, fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--gold)' }}>If {s.planet}: </span>
                    <span style={{ color: 'var(--text2)' }}>{s.quality}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
