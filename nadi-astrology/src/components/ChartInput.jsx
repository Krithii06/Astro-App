import React from 'react';

const RASHIS = ['Mesha','Vrishaba','Mithuna','Kataka','Simha','Kanya','Thula','Vrischika','Dhanus','Makara','Kumbha','Meena'];
const PLANETS_LIST = ['Surya','Chandra','Kuja','Budha','Guru','Sukra','Sani','Rahu','Ketu'];
const BIRTH_STARS = [
  'Aswini','Bharani','Krittika','Rohini','Mrigasira','Aridra','Punarvasu','Pushya','Aslesha',
  'Makha','Pubha','Uttara','Hasta','Chitta','Swathi','Vishaka','Anuradha','Jyesta',
  'Moola','Poorvashada','Utharashada','Sravana','Dhanishta','Sathabisha','Poorvabhadra','Uttarabhadra','Revathi'
];

export default function ChartInput({ chartData, setChartData, compact = false }) {
  const updatePlanet = (planet, value) => {
    setChartData(prev => ({ ...prev, planets: { ...prev.planets, [planet]: parseInt(value) } }));
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div>
          <label>Ascendant (Lagna)</label>
          <select value={chartData.ascendant} onChange={e => setChartData(prev => ({ ...prev, ascendant: e.target.value }))}>
            {RASHIS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label>Gender</label>
          <select value={chartData.gender} onChange={e => setChartData(prev => ({ ...prev, gender: e.target.value }))}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Birth Star (Nakshatra)</label>
          <select value={chartData.birthStar || ''} onChange={e => setChartData(prev => ({ ...prev, birthStar: e.target.value }))}>
            <option value="">Select Birth Star</option>
            {BIRTH_STARS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label>Birth Year</label>
          <input type="number" value={chartData.birthYear || ''} onChange={e => setChartData(prev => ({ ...prev, birthYear: parseInt(e.target.value) }))} placeholder="e.g. 1990" min="1900" max="2030" />
        </div>
      </div>

      <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 4, padding: 16 }}>
        <div style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.78rem', letterSpacing: '0.1em', marginBottom: 12 }}>
          PLANET HOUSE PLACEMENTS (1–12 from Ascendant)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
          {PLANETS_LIST.map(planet => (
            <div key={planet}>
              <label style={{ fontSize: '0.72rem' }}>{planet}</label>
              <select value={chartData.planets?.[planet] || ''} onChange={e => updatePlanet(planet, e.target.value)}>
                <option value="">Select House</option>
                {Array.from({length:12},(_,i)=>i+1).map(h=><option key={h} value={h}>House {h} - {RASHIS[((parseInt(chartData.ascendant ? RASHIS.indexOf(chartData.ascendant) : 0) + h - 1) % 12)]}</option>)}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', borderRadius: 4, fontSize: '0.85rem', color: 'var(--text2)' }}>
        <strong style={{ color: 'var(--gold)' }}>How to use:</strong> Select your Ascendant (Lagna) first. Then for each planet, select which house it falls in (counting from Ascendant = House 1, next sign = House 2, etc.). The chart will automatically place planets in the South Indian style.
      </div>
    </div>
  );
}
