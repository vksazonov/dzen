import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { ClientSection } from './components/ClientSection/ClientSection';
import { ProductList } from './components/productsListPage/ProductsList';
import { ProductProvider } from './context/ProductContext';
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderList } from './components/OrderListPage/OrderList';
import { ModalProvider } from './context/ModalContext';
import { OrderProvider } from './context/OrderContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <OrderProvider>
          <SearchProvider>
            <ModalProvider>
              <div className="App">
                <Header />
                <main className="App__main">
                  <ClientSection />
                  <div className="main-content">
                    <Routes>
                      <Route path="/" element={<ProductList />} />
                    </Routes>
                    <Routes>
                      <Route path="/orders" element={<OrderList />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </ModalProvider>
          </SearchProvider>
        </OrderProvider>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
