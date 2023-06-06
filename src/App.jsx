import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import AllProducts from "./components/AllProducts"
import Groceries from "./components/Groceries"
import Juice from "./components/Juice"
import About from "./components/About"
import Contact from "./components/Contact"

import organicCoffe from "./assets/groceries/organic-coffee.png"
import organicHoney from "./assets/groceries/pure-organic-honey.png"
import organicOliveOil from "./assets/groceries/virgin-olive-oil.png"
import organicChiliPowder from "./assets/groceries/chilipowder.png"
import organicCashew from "./assets/groceries/Cashews.png"
import organicChili from "./assets/groceries/Organic-Chillies.png"

import freshAppleJuice from "./assets/juice/apple-juice.png"
import freshOrangeJuice from "./assets/juice/orange-juice-ben-organic-BNR02-removebg-preview.png"
import freshBalckberryJuice from "./assets/juice/blackberry.png"
import freshCeleryJuice from "./assets/juice/celery-juice-bundle.png"
import freshMangoJuice from "./assets/juice/mango-juice.png"
import freshSoursopJuice from "./assets/juice/soursop-juice.png"

function App() {
  let products = [
    {
        imgUrl:`${organicCoffe}`,
        id: 1,
        category:"Groceries",
        name:"Assorted Coffee",
        ratings: 5,
        soldProducts: 23000,
        price:300.00,
        salePrice:150.00,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:true,
        bestSell:true,
        trending:true,
    },
    {
        imgUrl:`${organicHoney}`,
        id: 1,
        category:"Groceries",
        name:"Fresh Organic Honey",
        ratings: 5,
        soldProducts: 18500,
        price:500.00,
        salePrice: 300.00,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:true,
        bestSell:true,
        trending:false,
    },
    {
        imgUrl:`${organicOliveOil}`,
        id: 1,
        category:"Groceries",
        name:"Extra Virgin Olive Oil",
        ratings: 5,
        soldProducts: 20000,
        price:150.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:true,
        trending:true,
    },
    {
        imgUrl:`${organicChiliPowder}`,
        id: 1,
        category:"Groceries",
        name:"Organic Chilli powder",
        ratings: 5,
        soldProducts: 15000,
        price:100.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:true,
        trending:false,
    },
    {
        imgUrl:`${freshAppleJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Apple Juice",
        ratings: 5,
        soldProducts: 100000,
        price:180.00,
        salePrice: 100.00,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:true,
        bestSell:false,
        trending:true,
    },
    {
        imgUrl:`${freshOrangeJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Orange Juice",
        ratings: 5,
        soldProducts: 200000,
        price:100.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:true,
    },
    {
        imgUrl:`${organicCashew}`,
        id: 1,
        category:"Groceries",
        name:"Organic Raw Cashew",
        ratings: 5,
        soldProducts: 20500,
        price:150.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
    {
        imgUrl:`${organicChili}`,
        id: 1,
        category:"Groceries",
        name:"Handpicked Red Chillies",
        ratings: 5,
        soldProducts: 20000,
        price:150.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
    {
        imgUrl:`${freshBalckberryJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Blackberry Juice",
        ratings: 5,
        soldProducts: 200000,
        price:100.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
    {
        imgUrl:`${freshCeleryJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Celery Juice",
        ratings: 5,
        soldProducts: 200000,
        price:300.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
    {
        imgUrl:`${freshMangoJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Mango Juice",
        ratings: 5,
        soldProducts: 300000,
        price:200.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
    {
        imgUrl:`${freshSoursopJuice}`,
        id: 1,
        category:"Juice",
        name:"Fresh Soursop Juice",
        ratings: 5,
        soldProducts: 300000,
        price:250.00,
        salePrice: null,
        location:"Pili, Camarines Sur",
        stock:100,
        sale:false,
        bestSell:false,
        trending:false,
    },
];

let shopReviews = [
    {
        message:" Emily Davis here. I recently tried this organic product and was blown away by the taste and quality. It's so refreshing to know that I can trust the ingredients and feel good about what I'm putting into my body. I highly recommend giving it a try! ",
        ratings:5,
        name:'Emily Davis',
        img:'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        message:' I love these products it\'s pure natural, There\'s no chemical. So don\'t panic it\'s organic',
        ratings:5,
        name:'Isko',
        img:'https://randomuser.me/api/portraits/men/10.jpg'
    },
    {
        message:'I love this organic product! It\'s fresh, delicious, and high-quality. I highly recommend it to anyone looking for a healthier alternative to conventional products.',
        ratings:5,
        name:'Jacob Martin',
        img:'https://randomuser.me/api/portraits/men/18.jpg'
    }
]

  return (
    <main>
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route index element={ <Home products={products} shopReviews={shopReviews}/> }/>
                <Route path="/allproducts" element={ <AllProducts /> }/>
                <Route path="/groceries" element={ <Groceries /> }/>
                <Route path="/juice" element={ <Juice /> }/>
                <Route path="/about" element={ <About /> }/>
                <Route path="/contact" element={ <Contact /> }/>
            </Route>
        </Routes>
    </main> 
  )
}

export default App
