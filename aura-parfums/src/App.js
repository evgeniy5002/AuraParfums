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
        id: 1,
        name: "Ariana Grande Parfum",
        image: "Images/products/ariana-grande-parfum.jpg",
        brand: "Ariana Grande",
        gender: "Unisex",
        rating: 4.5,
        sale: true,
        bestseller: false,
        sizes: [
            { size: "3 ml", price: 10.99, chosen: true },
            { size: "5 ml", price: 15.99, chosen: false },
            { size: "8 ml", price: 19.99, chosen: false },
            { size: "10 ml", price: 24.99, chosen: false },
            { size: "15 ml", price: 29.99, chosen: false },
            { size: "20 ml", price: 39.99, chosen: false }
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 2,
        name: "Billie Eilish Red",
        image: "Images/products/bilie-eilish-red.jpg",
        brand: "Billie Eilish",
        gender: "Unisex",
        rating: 4.2,
        sale: false,
        bestseller: true,
        sizes: [
            { size: "3 ml", price: 11.99, chosen: true },
            { size: "5 ml", price: 16.99, chosen: false },
            { size: "8 ml", price: 20.99, chosen: false },
            { size: "10 ml", price: 25.99, chosen: false },
            { size: "15 ml", price: 30.99, chosen: false },
            { size: "20 ml", price: 40.99, chosen: false }
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 3,
        name: "Billie Eilish Beige",
        image: "Images/products/billie-eilish-beige.jpg",
        brand: "Billie Eilish",
        gender: "Unisex",
        rating: 4.7,
        sale: true,
        bestseller: true,
        sizes: [
            { size: "3 ml", price: 11.99, chosen: true },
            { size: "5 ml", price: 16.99, chosen: false },
            { size: "8 ml", price: 20.99, chosen: false },
            { size: "10 ml", price: 25.99, chosen: false },
            { size: "15 ml", price: 30.99, chosen: false },
            { size: "20 ml", price: 40.99, chosen: false }
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 4,
        name: "Black Opium",
        image: "Images/products/black-opium.jpg",
        brand: "Yves Saint Laurent",
        gender: "Women",
        rating: 4.3,
        sale: false,
        bestseller: true,
        sizes: [
            { size: "3 ml", price: 12.99, chosen: true },
            { size: "5 ml", price: 17.99, chosen: false },
            { size: "8 ml", price: 22.99, chosen: false },
            { size: "10 ml", price: 27.99, chosen: false },
            { size: "15 ml", price: 33.99, chosen: false },
            { size: "20 ml", price: 43.99, chosen: false }
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 5,
        name: "Grace by Grace",
        image: "Images/products/grace-by-grace.jpg",
        brand: "Grace",
        gender: "Women",
        rating: 4.1,
        sale: true,
        bestseller: false,
        sizes: [
            { size: "3 ml", price: 9.99, chosen: true },
            { size: "5 ml", price: 14.99, chosen: false },
            { size: "8 ml", price: 18.99, chosen: false },
            { size: "10 ml", price: 23.99, chosen: false },
            { size: "15 ml", price: 28.99, chosen: false },
            { size: "20 ml", price: 38.99, chosen: false }
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 6,
        name: "Happy Hour",
        image: "Images/products/happy-hour.jpg",
        brand: "Happy Hour",
        gender: "Unisex",
        rating: 4.0,
        sale: true,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 7,
        name: "Kilian Moonlight",
        image: "Images/products/Kilian Moonlight.jpg",
        brand: "Kilian",
        gender: "Unisex",
        rating: 4.9,
        sale: false,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: false },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 8,
        name: "Kilian Blue Moon Ginger",
        image: "Images/products/kilian-blue-moon-ginger.png",
        brand: "Kilian",
        gender: "Unisex",
        rating: 4.4,
        sale: true,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    { 
        id: 9,
        name: "Kilian Blue Moon",
        image: "Images/products/kilian-blue-moon.jpg",
        brand: "Kilian",
        gender: "Unisex",
        rating: 4.8,
        sale: false,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false },
        ],
        bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 10,
        name: "Kilian Princess",
        image: "Images/products/kilian-princess.jpg",
        brand: "Kilian",
        gender: "Women",
        rating: 4.6,
        sale: true,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 11,
        name: "Narciso Rodriguez",
        image: "Images/products/narciso-rodriguez.jpg",
        brand: "Narciso Rodriguez",
        gender: "Women",
        rating: 4.3,
        sale: false,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
          
        ],
        bigSizes: [
            { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
            { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
            { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
        ]
    },
    {
        id: 12,
        name: "Nasomatto Narkotic",
        image: "Images/products/nasomatto-narkotic.jpg",
        brand: "Nasomatto",
        gender: "Unisex",
        rating: 4.7,
        sale: true,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 13,
        name: "Red Wine Brown Sugar",
        image: "Images/products/red-wine-brown-sugar.jpg",
        brand: "Red Wine",
        gender: "Unisex",
        rating: 4.2,
        sale: true,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 14,
        name: "Tiziana Terenzi",
        image: "Images/products/tiziana-terenzi.jpg",
        brand: "Tiziana Terenzi",
        gender: "Unisex",
        rating: 4.5,
        sale: false,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 15,
        name: "White Tea",
        image: "Images/products/white-tea.jpg",
        brand: "White Tea",
        gender: "Women",
        rating: 4.0,
        sale: true,
        bestseller: false,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 16,
        name: "Yves Saint Laurent Libre",
        image: "Images/products/yves-saint-laurent-libre.jpg",
        brand: "Yves Saint Laurent",
        gender: "Women",
        rating: 4.6,
        sale: false,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
        id: 17,
        name: "Sending Love",
        image: "Images/products/zarkoperfume-sending-love.jpg",
        brand: "Zarkoperfume",
        gender: "Unisex",
        rating: 4.8,
        sale: true,
        bestseller: true,
        sizes: [
          { size: "3 ml", price: 10.99, chosen: true },
          { size: "5 ml", price: 15.99, chosen: false },
          { size: "8 ml", price: 19.99, chosen: false },
          { size: "10 ml", price: 24.99, chosen: false },
          { size: "15 ml", price: 29.99, chosen: false },
          { size: "20 ml", price: 39.99, chosen: false }
          
      ],
      bigSizes: [
          { size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
          { size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
          { size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
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