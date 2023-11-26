import { Inter } from "next/font/google";
import HeroItems from "../components/hero-items";
import Category from "../components/category";
import HorizontalList from "../components/horizontal-list";
import Layout from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetCart, addToCart } from "@/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
const path = process.env.NEXT_PUBLIC_API_PATH;
const Home = () => {
  const [products,setProducts]=useState([]);
  const [heroSection,setHeroSections]=useState([]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  console.log("propsAAAAA", heroSection);
  const onPressCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Item added to cart");
  };

  const fetchProducts = async()=>{
    const res = await fetch(`${path}/api/products`);
    const response = await res.json();
    setProducts(response)
  }
  const fetchHeroSection = async()=>{
  const heroRes = await fetch(`${path}/api/static/heroSection`);
    const heroResponse = await heroRes.json();
    setHeroSections(heroResponse?.data)
  }
  useEffect(() => {
    fetchHeroSection()
    fetchProducts();
  }, []);
  return (
    <Layout cartCount={cart?.cartCount || 0}>
      <HeroItems heroSection={heroSection}/>
      <Category />
      <HorizontalList products={products} onPressCart={onPressCart} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        them="dark"
      />
    </Layout>
  );
};


// export async function getStaticProps(context) {
//   try {
//     const path = process.env.NEXT_PUBLIC_API_PATH;
//     const res = await fetch(`${path}/api/products`);
//     const response = await res.json();
//     const heroRes = await fetch(`${path}api/static/heroSection`);
//     const heroResponse = await heroRes.json();
//     return {
//       props: {
//         products: response,
//         heroSection:heroResponse?.data
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         products: [],
//         heroSection:[]
//       },
//     };
//   }
// }
export default Home;
