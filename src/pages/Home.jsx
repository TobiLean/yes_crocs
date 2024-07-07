import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Product from '../components/Product';
import SeeMore from '../components/SeeMore';

let productList = [{
    id: "001",
    name: "cow",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0009.png"
},
{
    id: "002",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0004.png"
},
{
    id: "003",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0007.png"
},
{
    id: "004",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0005.png"
},
{
    id: "005",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0008.png"
},
{
    id: "006",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0002.png"
},
{
    id: "007",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0012.png"
},
{
    id: "008",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0006.png"
},
{
    id: "009",
    name: "goat",
    rating: 4.5,
    price: 30000,
    imageUrl: "/public/images/IMG-20240706-WA0010.png"
},
];

function Home() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <main>
            <h1>Product List <span>({productList.length})</span></h1>
            <div className= "product-grid">
                {
                    productList.map((product) => (
                        <Product key={product.id} product={product}/>
                    ))
                }
            </div>
            <SeeMore/>
        </main>
    </>
  )
}

export default Home