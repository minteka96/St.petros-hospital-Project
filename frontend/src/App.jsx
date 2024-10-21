import { useState } from 'react'
import './index.css'
import Cpd from './markup/pages/CPD/Cpd';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
<Routes>
<Route path="/" element={<Cpd />} />
</Routes>
    </div>
  );
}

export default App
