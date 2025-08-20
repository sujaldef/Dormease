import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/store"; // Adjusted path assuming store.js is in src/
import Layout from './Layout';
import App from './App';
import About from './About';
import Help from './Help';
import Dashboard from './Dashboard';
import Register from './Register';
import Loginsignin from './loginsignin';
import Searchprop from './Searchprop';
import SearchResultPage from './Searchesult/index'; // Corrected path and name

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loginsignin" element={<Loginsignin />} />
            <Route path="/searchprop" element={<Searchprop />} />
            <Route path="/searchresult" element={<SearchResultPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}