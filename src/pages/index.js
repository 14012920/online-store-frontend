import { Inter } from "next/font/google";
import HeroItems from "../components/hero-items";
import Category from "../components/category";
import HorizontalList from "../components/horizontal-list";
import Layout from "../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetCart, addToCart } from "@/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ products,heroSection }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  console.log("propsAAAAA", heroSection);
  const onPressCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Item added to cart");
  };

  // useEffect(() => {
  //   dispatch(resetCart());
  // }, []);
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
export async function getStaticProps(context) {
  try {
    const res = await fetch("http://localhost:4000/api/products/");
    const response = await res.json();
    const heroRes = await fetch("http://localhost:4000/api/static/heroSection");
    const heroResponse = await heroRes.json();
    return {
      props: {
        products: response,
        heroSection:heroResponse?.data
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        heroSection:[]
      },
    };
  }
}
export default Home;
