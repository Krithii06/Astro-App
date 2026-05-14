import React from 'react';

const HOUSE_POSITIONS = [
  // South Indian chart: fixed rashi positions
  // Row 0: houses at top-left to top-right  (Meena=12, Mesha=1, Vrishaba=2, Mithuna=3)
  // Row 1: left col (Kumbha=11), _, _, right col (Kataka=4)
  // Row 2: left col (Makara=10), _, _, right col (Simha=5)
  // Row 3: bottom (Dhanus=9, Vrischika=8, Thula=7, Kanya=6)
  { rashi: 12, gridRow: 1, gridCol: 1, name: 'Meena' },
  { rashi: 1,  gridRow: 1, gridCol: 2, name: 'Mesha' },
  { rashi: 2,  gridRow: 1, gridCol: 3, name: 'Vrishaba' },
  { rashi: 3,  gridRow: 1, gridCol: 4, name: 'Mithuna' },
  { rashi: 11, gridRow: 2, gridCol: 1, name: 'Kumbha' },
  { rashi: 4,  gridRow: 2, gridCol: 4, name: 'Kataka' },
  { rashi: 10, gridRow: 3, gridCol: 1, name: 'Makara' },
  { rashi: 5,  gridRow: 3, gridCol: 4, name: 'Simha' },
  { rashi: 9,  gridRow: 4, gridCol: 1, name: 'Dhanus' },
  { rashi: 8,  gridRow: 4, gridCol: 2, name: 'Vrischika' },
  { rashi: 7,  gridRow: 4, gridCol: 3, name: 'Thula' },
  { rashi: 6,  gridRow: 4, gridCol: 4, name: 'Kanya' },
];

const PLANET_ABBREV = {
  Surya: 'Su', Chandra: 'Mo', Kuja: 'Ma', Budha: 'Me',
  Guru: 'Ju', Sukra: 'Ve', Sani: 'Sa', Rahu: 'Ra', Ketu: 'Ke',
  Lagna: 'La'
};

const PLANET_COLORS = {
  Surya: '#E8A020', Chandra: '#A0C8E8', Kuja: '#E84040', Budha: '#40C840',
  Guru: '#E8D040', Sukra: '#E880C0', Sani: '#8080A0', Rahu: '#8040A0', Ketu: '#A06040',
  Lagna: '#C9A84C'
};

export default function SouthIndianChart({ ascendant, planets, title = 'Rasi Chart' }) {
  const getRashiNum = (rashiName) => {
    const map = { Mesha:1,Vrishaba:2,Mithuna:3,Kataka:4,Simha:5,Kanya:6,Thula:7,Vrischika:8,Dhanus:9,Makara:10,Kumbha:11,Meena:12 };
    return map[rashiName] || 1;
  };

  const ascNum = getRashiNum(ascendant);

  // Get house number for a rashi (house = rashi relative to ascendant)
  const getHouseNum = (rashiNum) => {
    const h = ((rashiNum - ascNum + 12) % 12) + 1;
    return h;
  };

  // Get planets in each rashi
  const getPlanetsInRashi = (rashiNum) => {
    const result = [];
    if (rashiNum === ascNum) result.push('Lagna');
    Object.entries(planets || {}).forEach(([planet, house]) => {
      // house here is 1-12 relative to ascendant, so convert to rashi
      const rashiOfPlanet = ((ascNum + house - 2 + 12) % 12) + 1;
      if (rashiOfPlanet === rashiNum) result.push(planet);
    });
    return result;
  };

  const cellSize = 100;
  const gap = 2;
  const totalSize = cellSize * 4 + gap * 3;

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        fontFamily: "'Cinzel', serif", 
        color: 'var(--gold)', 
        fontSize: '0.8rem', 
        letterSpacing: '0.15em',
        marginBottom: '12px',
        textTransform: 'uppercase'
      }}>{title}</div>
      <div style={{ 
        display: 'inline-block',
        border: '2px solid var(--gold)',
        background: 'var(--surface2)',
        padding: '2px',
        boxShadow: '0 0 20px rgba(201,168,76,0.2)'
      }}>
        <svg width={totalSize} height={totalSize} viewBox={`0 0 ${totalSize} ${totalSize}`}>
          {/* Grid lines */}
          {[1,2,3].map(i => (
            <line key={`h${i}`} x1={0} y1={i*(cellSize+gap)-gap/2} x2={totalSize} y2={i*(cellSize+gap)-gap/2} stroke="var(--gold)" strokeWidth="1" opacity="0.3" />
          ))}
          {[1,2,3].map(i => (
            <line key={`v${i}`} x1={i*(cellSize+gap)-gap/2} y1={0} x2={i*(cellSize+gap)-gap/2} y2={totalSize} stroke="var(--gold)" strokeWidth="1" opacity="0.3" />
          ))}

          {/* Middle cross (center box outline) */}
          <rect x={cellSize+gap} y={cellSize+gap} width={cellSize*2+gap} height={cellSize*2+gap} fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.4" />
          
          {/* Diagonal lines for center box */}
          <line x1={cellSize+gap} y1={cellSize+gap} x2={cellSize*3+gap*3} y2={cellSize*3+gap*3} stroke="var(--gold)" strokeWidth="0.5" opacity="0.3" />
          <line x1={cellSize*3+gap*3} y1={cellSize+gap} x2={cellSize+gap} y2={cellSize*3+gap*3} stroke="var(--gold)" strokeWidth="0.5" opacity="0.3" />

          {/* Chart title in center */}
          <text x={totalSize/2} y={totalSize/2 - 8} textAnchor="middle" fill="var(--gold)" fontSize="10" fontFamily="Cinzel" opacity="0.7">RASI</text>
          <text x={totalSize/2} y={totalSize/2 + 8} textAnchor="middle" fill="var(--gold)" fontSize="10" fontFamily="Cinzel" opacity="0.7">CHART</text>

          {/* Houses */}
          {HOUSE_POSITIONS.map(({ rashi, gridRow, gridCol, name }) => {
            const x = (gridCol - 1) * (cellSize + gap);
            const y = (gridRow - 1) * (cellSize + gap);
            const houseNum = getHouseNum(rashi);
            const planetsHere = getPlanetsInRashi(rashi);
            const isAsc = rashi === ascNum;

            return (
              <g key={rashi}>
                {/* Cell background */}
                <rect x={x+1} y={y+1} width={cellSize-2} height={cellSize-2} 
                  fill={isAsc ? 'rgba(201,168,76,0.05)' : 'rgba(26,20,50,0.5)'} />
                
                {/* Rashi number top-left */}
                <text x={x+6} y={y+16} fill="var(--gold)" fontSize="10" fontFamily="Cinzel" opacity="0.5">{rashi}</text>
                
                {/* Rashi name */}
                <text x={x+cellSize/2} y={y+28} textAnchor="middle" fill="var(--text3)" fontSize="9" fontFamily="Cormorant Garamond">{name}</text>
                
                {/* House number bottom-right */}
                <text x={x+cellSize-6} y={y+cellSize-6} textAnchor="end" fill="var(--gold)" fontSize="9" fontFamily="Cinzel" opacity="0.7">H{houseNum}</text>

                {/* Ascendant marker */}
                {isAsc && <text x={x+6} y={y+cellSize-6} fill="var(--gold)" fontSize="9" fontFamily="Cinzel">Asc</text>}

                {/* Planets */}
                {planetsHere.map((planet, idx) => {
                  const col = idx % 2;
                  const row = Math.floor(idx / 2);
                  const px = x + 10 + col * 42;
                  const py = y + 38 + row * 18;
                  return (
                    <g key={planet}>
                      <rect x={px-2} y={py-12} width={36} height={16} rx={2} fill={`${PLANET_COLORS[planet]}22`} />
                      <text x={px + 16} y={py} textAnchor="middle" 
                        fill={PLANET_COLORS[planet] || 'var(--text)'} 
                        fontSize={planet === 'Lagna' ? '10' : '11'} 
                        fontFamily="Cinzel"
                        fontWeight="600">
                        {PLANET_ABBREV[planet] || planet}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>
      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {Object.entries(PLANET_COLORS).filter(([p]) => p !== 'Lagna').map(([planet, color]) => (
          <span key={planet} style={{ fontSize: '0.75rem', color: 'var(--text2)' }}>
            <span style={{ color, fontWeight: 600 }}>{PLANET_ABBREV[planet]}</span> = {planet}
          </span>
        ))}
      </div>
    </div>
  );
}
