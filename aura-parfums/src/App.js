
import HomePage from './Components/HomePage/HomePage';
import Contacts from './Components/Contacts/Contacts';
import Brands from './Components/Brands/Brands';
import Catalogs from './Components/Catalogs/Catalogs';
import FragnanceChoice from './Components/FragnanceChoice/FragnanceChoice';
import UserPage from './Components/UserPage/UserPage';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestorePasswordPage from './Components/RestorePasswordPage/RestorePasswordPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import LoginPage from './Components/LoginPage/LoginPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import OrdersPage from './Components/OrdersPage/OrdersPage';
import WorkshopPage from './Components/WorkshopPage/WorkshopPage';
import { useAuth } from './Hooks/useAuth';

function App() {
  const { isAuth } = useAuth();

  const brands = [
    { id: 1, image: "Images/brands/abercombie.png", brand: "Abercombie" },
    { id: 2, image: "Images/brands/ariana-grande.png", brand: "Ariana Grande" },
    { id: 3, image: "Images/brands/attar.png", brand: "Attar" },
    { id: 4, image: "Images/brands/billie-eilish.png", brand: "Billie Eilish" },
    { id: 5, image: "Images/brands/bohoboco.png", brand: "Bohoboco" },
    { id: 6, image: "Images/brands/boss.png", brand: "Boss" },
    { id: 7, image: "Images/brands/bulgari.png", brand: "Bulgari" },
    { id: 8, image: "Images/brands/burberry.png", brand: "Burberry" },
    { id: 9, image: "Images/brands/byredo.png", brand: "Byredo" },
    { id: 10, image: "Images/brands/calvin-klein.png", brand: "Calvin Klein" },
    { id: 11, image: "Images/brands/carolina-herrera.png", brand: "Carolina Herrera" },
    { id: 12, image: "Images/brands/chanel.png", brand: "Chanel" },
    { id: 13, image: "Images/brands/chloe.png", brand: "Chloe" },
    { id: 14, image: "Images/brands/creed.png", brand: "Creed" },
    { id: 15, image: "Images/brands/diesel.png", brand: "Diesel" },
    { id: 16, image: "Images/brands/dior.png", brand: "Dior" },
    { id: 17, image: "Images/brands/dolce-gabanna.png", brand: "Dolce & Gabanna" },
    { id: 18, image: "Images/brands/elizabeth-arden.png", brand: "Elizabeth Arden" },
    { id: 19, image: "Images/brands/gimmy-choo.png", brand: "Gimmy Choo" },
    { id: 20, image: "Images/brands/giorgio-armani.png", brand: "Giorgio Armani" },
    { id: 21, image: "Images/brands/givenchy.png", brand: "Givenchy" },
    { id: 22, image: "Images/brands/gritti.png", brand: "Gritti" },
    { id: 23, image: "Images/brands/guerlain.png", brand: "Guerlain" },
    { id: 24, image: "Images/brands/h.png", brand: "H" },
    { id: 25, image: "Images/brands/jean-paul-gaultier.png", brand: "Jean Paul Gaultier" },
    { id: 26, image: "Images/brands/jo-malone.png", brand: "Jo Malone" },
    { id: 27, image: "Images/brands/juliette.png", brand: "Juliette" },
    { id: 28, image: "Images/brands/kilian.png", brand: "Kilian" },
    { id: 29, image: "Images/brands/lancome.png", brand: "Lancome" },
    { id: 30, image: "Images/brands/lanvin.png", brand: "Lanvin" },
    { id: 31, image: "Images/brands/maison-margiela.png", brand: "Maison Margiela" },
    { id: 32, image: "Images/brands/maison-paris.png", brand: "Maison Paris" },
    { id: 33, image: "Images/brands/mancera.png", brand: "Mancera" },
    { id: 34, image: "Images/brands/marc-antoine.png", brand: "Marc Antoine" },
    { id: 35, image: "Images/brands/montale.png", brand: "Montale" },
    { id: 36, image: "Images/brands/moschino.png", brand: "Moschino" },
    { id: 37, image: "Images/brands/narciso-rodriguez.png", brand: "Narciso Rodriguez" },
    { id: 38, image: "Images/brands/nasomatto.png", brand: "Nasomatto" },
    { id: 39, image: "Images/brands/nobile.png", brand: "Nobile" },
    { id: 40, image: "Images/brands/paco-rabanne.png", brand: "Paco Rabanne" },
    { id: 41, image: "Images/brands/prada.png", brand: "Prada" },
    { id: 42, image: "Images/brands/the-merchant.png", brand: "The Merchant" },
    { id: 43, image: "Images/brands/thomas-kosmala.png", brand: "Thomas Kosmala" },
    { id: 44, image: "Images/brands/tiffany.png", brand: "Tiffany" },
    { id: 45, image: "Images/brands/tiziana-terenci.png", brand: "Tiziana Terenzi" },
    { id: 46, image: "Images/brands/tom-ford.png", brand: "Tom Ford" },
    { id: 47, image: "Images/brands/trussardi.png", brand: "Trussardi" },
    { id: 48, image: "Images/brands/van-cleef.png", brand: "Van Cleef" },
    { id: 49, image: "Images/brands/vertus.png", brand: "Vertus" },
    { id: 50, image: "Images/brands/xerjoff.png", brand: "Xerjoff" },
    { id: 51, image: "Images/brands/yves-saint-laurent.png", brand: "Yves Saint Laurent" },
    { id: 52, image: "Images/brands/zadig-voltaire.png", brand: "Zadig & Voltaire" },
    { id: 53, image: "Images/brands/zarkoperfume.png", brand: "Zarkoperfume" }
  ];

  const products = [
    {
      id: 1,
      new: true,
      lux: false,
      niche: false,
      name: "Ariana Grande Parfum",
      image: "Images/products/ariana-grande-parfum.jpg",
      brand: "Ariana Grande",
      gender: "unisex",
      rating: 1.2,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 2,
      new: true,
      lux: false,
      niche: false,
      name: "Billie Eilish Red",
      image: "Images/products/bilie-eilish-red.jpg",
      brand: "Billie Eilish",
      gender: "unisex",
      rating: 4.2,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 11.99, chosen: true },
        { id: 2, size: "5 ml", price: 16.99, chosen: false },
        { id: 3, size: "8 ml", price: 20.99, chosen: false },
        { id: 4, size: "10 ml", price: 25.99, chosen: false },
        { id: 5, size: "15 ml", price: 30.99, chosen: false },
        { id: 6, size: "20 ml", price: 40.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 3,
      new: true,
      lux: true,
      niche: false,
      name: "Billie Eilish Beige",
      image: "Images/products/billie-eilish-beige.jpg",
      brand: "Billie Eilish",
      gender: "unisex",
      rating: 3.9,
      sale: true,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 11.99, chosen: true },
        { id: 2, size: "5 ml", price: 16.99, chosen: false },
        { id: 3, size: "8 ml", price: 20.99, chosen: false },
        { id: 4, size: "10 ml", price: 25.99, chosen: false },
        { id: 5, size: "15 ml", price: 30.99, chosen: false },
        { id: 6, size: "20 ml", price: 40.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 4,
      new: true,
      lux: true,
      niche: false,
      name: "Black Opium",
      image: "Images/products/black-opium.jpg",
      brand: "Yves Saint Laurent",
      gender: "female",
      rating: 3.1,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 12.99, chosen: true },
        { id: 2, size: "5 ml", price: 17.99, chosen: false },
        { id: 3, size: "8 ml", price: 22.99, chosen: false },
        { id: 4, size: "10 ml", price: 27.99, chosen: false },
        { id: 5, size: "15 ml", price: 33.99, chosen: false },
        { id: 6, size: "20 ml", price: 43.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 5,
      new: true,
      lux: false,
      niche: true,
      name: "Grace by Grace",
      image: "Images/products/grace-by-grace.jpg",
      brand: "Grace",
      gender: "female",
      rating: 4.1,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 9.99, chosen: true },
        { id: 2, size: "5 ml", price: 14.99, chosen: false },
        { id: 3, size: "8 ml", price: 18.99, chosen: false },
        { id: 4, size: "10 ml", price: 23.99, chosen: false },
        { id: 5, size: "15 ml", price: 28.99, chosen: false },
        { id: 6, size: "20 ml", price: 38.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 6,
      new: false,
      lux: true,
      niche: true,
      name: "Happy Hour",
      image: "Images/products/happy-hour.jpg",
      brand: "Happy Hour",
      gender: "unisex",
      rating: 4.0,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 7,
      new: true,
      lux: false,
      niche: false,
      name: "Kilian Moonlight",
      image: "Images/products/Kilian Moonlight.jpg",
      brand: "Kilian",
      gender: "male",
      rating: 3.1,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: false },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 8,
      new: true,
      lux: false,
      niche: false,
      name: "Kilian Blue Moon Ginger",
      image: "Images/products/kilian-blue-moon-ginger.png",
      brand: "Kilian",
      gender: "male",
      rating: 4.4,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 9,
      new: false,
      lux: true,
      niche: false,
      name: "Kilian Blue Moon",
      image: "Images/products/kilian-blue-moon.jpg",
      brand: "Kilian",
      gender: "male",
      rating: 3.5,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false },
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 10,
      new: true,
      lux: false,
      niche: false,
      name: "Kilian Princess",
      image: "Images/products/kilian-princess.jpg",
      brand: "Kilian",
      gender: "male",
      rating: 4.6,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 11,
      new: false,
      lux: false,
      niche: false,
      name: "Narciso Rodriguez",
      image: "Images/products/narciso-rodriguez.jpg",
      brand: "Narciso Rodriguez",
      gender: "male",
      rating: 4.3,
      sale: false,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }

      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 12,
      new: true,
      lux: true,
      niche: true,
      name: "Nasomatto Narkotic",
      image: "Images/products/nasomatto-narkotic.jpg",
      brand: "Nasomatto",
      gender: "unisex",
      rating: 4.7,
      sale: true,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 13,
      new: true,
      lux: false,
      niche: false,
      name: "Red Wine Brown Sugar",
      image: "Images/products/red-wine-brown-sugar.jpg",
      brand: "Red Wine",
      gender: "unisex",
      rating: 4.2,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 14,
      new: true,
      lux: true,
      niche: false,
      name: "Tiziana Terenzi",
      image: "Images/products/tiziana-terenzi.jpg",
      brand: "Tiziana Terenzi",
      gender: "unisex",
      rating: 2.3,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 15,
      new: false,
      lux: false,
      niche: true,
      name: "White Tea",
      image: "Images/products/white-tea.jpg",
      brand: "White Tea",
      gender: "female",
      rating: 4.0,
      sale: true,
      bestseller: false,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 16,
      new: true,
      lux: false,
      niche: true,
      name: "Yves Saint Laurent Libre",
      image: "Images/products/yves-saint-laurent-libre.jpg",
      brand: "Yves Saint Laurent",
      gender: "female",
      rating: 4.6,
      sale: false,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }
      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    },
    {
      id: 17,
      new: false,
      lux: false,
      niche: false,
      name: "Sending Love",
      image: "Images/products/zarkoperfume-sending-love.jpg",
      brand: "Zarkoperfume",
      gender: "unisex",
      rating: 4.8,
      sale: true,
      bestseller: true,
      sizes: [
        { id: 1, size: "3 ml", price: 10.99, chosen: true },
        { id: 2, size: "5 ml", price: 15.99, chosen: false },
        { id: 3, size: "8 ml", price: 19.99, chosen: false },
        { id: 4, size: "10 ml", price: 24.99, chosen: false },
        { id: 5, size: "15 ml", price: 29.99, chosen: false },
        { id: 6, size: "20 ml", price: 39.99, chosen: false }

      ],
      bigSizes: [
        { id: 7, size: "30 ml - повнорозмірний флакон", price: 49.99, chosen: false },
        { id: 8, size: "50 ml - повнорозмірний флакон", price: 69.99, chosen: false },
        { id: 9, size: "100 ml - повнорозмірний флакон", price: 99.99, chosen: false }
      ]
    }
  ];

  return (
    <div className="App">
      <div className='wrapper'>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Main />}>
              <Route index element={<HomePage brands={brands} products={products} />} />
              <Route path="catalogs/*" element={<Catalogs products={products} />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="brands" element={<Brands />} />
              <Route path="fragnance-choice" element={<FragnanceChoice />} />
              <Route path="user-page/*" element={<UserPage />}>
                {
                  isAuth ? (
                    <>
                      <Route index element={<Navigate to="profile" />} />
                      <Route path="workshop" element={<WorkshopPage />} />
                      <Route path="orders" element={<OrdersPage />} />
                      <Route path="profile" element={<ProfilePage />} />
                    </>
                  ) : (
                    <>
                      <Route index element={<Navigate to="login" />} />
                      <Route path="login" element={<LoginPage />} />
                      <Route path="registration" element={<RegistrationPage />} />
                      <Route path="restore-password" element={<RestorePasswordPage />} />
                    </>
                  )
                }
              </Route>
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;