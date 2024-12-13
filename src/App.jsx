import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductsLists from './pages/productsForm/index.jsx';
import HomeComponent from './screens/Home/index.jsx';
import HeaderNavBar from './screens/Header/index.jsx';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ['/products'];

  return (
    <div>
      
      {!hideHeaderRoutes.includes(location.pathname) && <HeaderNavBar />}
      
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsLists />} />
      </Routes>
    </div>
  );
}

export default App;
