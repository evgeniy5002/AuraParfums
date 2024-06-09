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

  const products = [
    {
      name: "Ariana Grande Parfum",
      image: "Images/products/ariana-grande-parfum.jpg",
      brand: "Ariana Grande",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 49.99
    },
    {
      name: "Billie Eilish Red",
      image: "Images/products/bilie-eilish-red.jpg",
      brand: "Billie Eilish",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 59.99
    },
    {
      name: "Billie Eilish Beige",
      image: "Images/products/billie-eilish-beige.jpg",
      brand: "Billie Eilish",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 59.99
    },
    {
      name: "Black Opium",
      image: "Images/products/black-opium.jpg",
      brand: "Yves Saint Laurent",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 79.99
    },
    {
      name: "Grace by Grace",
      image: "Images/products/grace-by-grace.jpg",
      brand: "Grace",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 39.99
    },
    {
      name: "Happy Hour",
      image: "Images/products/happy-hour.jpg",
      brand: "Happy Hour",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 29.99
    },
    {
      name: "Kilian Moonlight",
      image: "Images/products/Kilian Moonlight.jpg",
      brand: "Kilian",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 89.99
    },
    {
      name: "Kilian Blue Moon Ginger",
      image: "Images/products/kilian-blue-moon-ginger.png",
      brand: "Kilian",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 89.99
    },
    {
      name: "Kilian Blue Moon",
      image: "Images/products/kilian-blue-moon.jpg",
      brand: "Kilian",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 89.99
    },
    {
      name: "Kilian Princess",
      image: "Images/products/kilian-princess.jpg",
      brand: "Kilian",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 89.99
    },
    {
      name: "Narciso Rodriguez",
      image: "Images/products/narciso-rodriguez.jpg",
      brand: "Narciso Rodriguez",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 99.99
    },
    {
      name: "Nasomatto Narkotic",
      image: "Images/products/nasomatto-narkotic.jpg",
      brand: "Nasomatto",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 129.99
    },
    {
      name: "Red Wine Brown Sugar",
      image: "Images/products/red-wine-brown-sugar.jpg",
      brand: "Red Wine",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 45.99
    },
    {
      name: "Tiziana Terenzi",
      image: "Images/products/tiziana-terenzi.jpg",
      brand: "Tiziana Terenzi",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 149.99
    },
    {
      name: "White Tea",
      image: "Images/products/white-tea.jpg",
      brand: "White Tea",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 24.99
    },
    {
      name: "Yves Saint Laurent Libre",
      image: "Images/products/yves-saint-laurent-libre.jpg",
      brand: "Yves Saint Laurent",
      gender: "Women",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 79.99
    },
    {
      name: "Zarkoperfume Sending Love",
      image: "Images/products/zarkoperfume-sending-love.jpg",
      brand: "Zarkoperfume",
      gender: "Unisex",
      rating: 4.6,
      sale: true,
      bestseller: false,
      price: 89.99
    }
  ];
  
  return (
    <div className="App">
      <div className='wrapper'>
        <BrowserRouter>
          <Routes >
            <Route path="/"  element={<Main />}>
              <Route index element={<HomePage products={products}/>} />
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