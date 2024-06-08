import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Contacts from './Components/Contacts/Contacts';
import Brands from './Components/Brands/Brands';
import Catalogs from './Components/Catalogs/Catalogs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <BrowserRouter>
          <Routes >
            <Route path="/"  element={<Main />}>
              <Route index element={<HomePage />} />
              <Route path="catalogs/*" element={<Catalogs />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="brands" element={<Brands />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;