import Sidebar from "../components/Sidebar";
import Product from "../components/Product";
import ButtonComponent from "../components/ButtonComponent";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

let productList = [
  {
    id: "001",
    name: "Custom Yellow Crocs",
    rating: 4.5,
    price: 30000,
    imageUrl: "/images/IMG-20240706-WA0009.png",
  },
  {
    id: "002",
    name: "Pink summer crocs",
    rating: 4.5,
    price: 26000,
    imageUrl: "/images/IMG-20240706-WA0004.png",
  },
  {
    id: "003",
    name: "Classic Clog",
    rating: 4.5,
    price: 20000,
    imageUrl: "/images/IMG-20240706-WA0007.png",
  },
  {
    id: "004",
    name: "Crocs rubber clogs",
    rating: 4.5,
    price: 18000,
    imageUrl: "/images/IMG-20240706-WA0005.png",
  },
  {
    id: "005",
    name: "Barbie custom crocs",
    rating: 4.5,
    price: 40000,
    imageUrl: "/images/IMG-20240706-WA0008.png",
  },
  {
    id: "006",
    name: "Custom green crocs",
    rating: 4.5,
    price: 17000,
    imageUrl: "/images/IMG-20240706-WA0002.png",
  },
  {
    id: "007",
    name: "Pink camouflage crocs",
    rating: 4.5,
    price: 12000,
    imageUrl: "/images/IMG-20240706-WA0012.png",
  },
  {
    id: "008",
    name: "White custom crocs",
    rating: 4.5,
    price: 29000,
    imageUrl: "/images/IMG-20240706-WA0006.png",
  },
  {
    id: "009",
    name: "Pink glittery crocs",
    rating: 4.5,
    price: 24000,
    imageUrl: "/images/IMG-20240706-WA0010.png",
  },
];

let kidsSummerCollectionList = [
  {
    id: "001",
    name: "Pink glittery crocs",
    rating: 4.5,
    price: 12000,
    imageUrl: "/images/IMG-20240706-WA0011.png",
  },
  {
    id: "002",
    name: "White custom crocs",
    rating: 4.5,
    price: 9000,
    imageUrl: "/images/IMG-20240706-WA0006.png",
  },
  {
    id: "003",
    name: "Pink Kids custom crocs",
    rating: 4.5,
    price: 9000,
    imageUrl: "/images/IMG-20240706-WA0014.png",
  },
  {
    id: "004",
    name: "Blue unicorn crocs",
    rating: 4.5,
    price: 9000,
    imageUrl: "/images/IMG-20240706-WA0009.png",
  },
];

function Home() {
  return (
    <>
      <Sidebar />
      <div className="all-container">
        {/* <Navbar /> */}
        <main className="home-main">
          <h1>
            Product List <span>({productList.length})</span>
          </h1>
          <div className="product-grid">
            {productList.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <ButtonComponent text={"see more"} route={"/"} />
        </main>
        <Banner title={"Kids summer collection"} />
        <div className="special-section">
          <div className="special-section-grid">
            {kidsSummerCollectionList.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
