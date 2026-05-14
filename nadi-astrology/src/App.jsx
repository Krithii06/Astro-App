import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChartPage from './pages/ChartPage';
import LovePage from './pages/LovePage';
import MedicalPage from './pages/MedicalPage';
import CareerPage from './pages/CareerPage';
import ForeignPage from './pages/ForeignPage';
import ParentsPage from './pages/ParentsPage';
import DashaPage from './pages/DashaPage';
import YogasPage from './pages/YogasPage';

export const ChartContext = createContext(null);

const defaultChart = {
  ascendant: 'Mesha',
  gender: 'male',
  birthStar: '',
  birthYear: 1990,
  planets: { Surya:'',Chandra:'',Kuja:'',Budha:'',Guru:'',Sukra:'',Sani:'',Rahu:'',Ketu:'' }
};

export default function App() {
  const [chartData, setChartData] = useState(defaultChart);
  return (
    <ChartContext.Provider value={{ chartData, setChartData }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/love" element={<LovePage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/foreign" element={<ForeignPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/dasha" element={<DashaPage />} />
          <Route path="/yogas" element={<YogasPage />} />
        </Routes>
      </BrowserRouter>
    </ChartContext.Provider>
  );
}
