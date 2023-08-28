import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { ClientSection } from './components/ClientSection/ClientSection';
import { ProductList } from './components/productsListPage/ProductsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderList } from './components/OrderListPage/OrderList';
import store from './redux/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
};

export default App;
