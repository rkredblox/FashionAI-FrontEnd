import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductsLists from './pages/productsForm/index.jsx';
import HomeComponent from './screens/Home/index.jsx';
import HeaderNavBar from './screens/Header/index.jsx';
import SelectProduct from './pages/selectProduct/index.jsx';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ['/products', '/selectproduct'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <div>
      
      {!shouldHideHeader && <HeaderNavBar />}
      
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/products" element={<ProductsLists />} />
        <Route path='/selectproduct' element={<SelectProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
