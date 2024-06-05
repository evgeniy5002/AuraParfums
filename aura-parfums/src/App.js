import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Contacts from './Components/Contacts/Contacts';
import Brands from './Components/Brands/Brands';
import Catalogs from './Components/Catalogs/Catalogs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="catalogs/*" element={<Catalogs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="brands" element={<Brands />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;