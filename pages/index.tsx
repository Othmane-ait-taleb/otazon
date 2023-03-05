import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import db from "../utils/db";
import Product from "../models/Product";
import { ProductType } from "../components/types";
import { useContext } from "react";
import { Store } from "../utils/Store";
import axios from "axios";
import { toast } from "react-toastify";

export default function Home({ products }: { products: ProductType[] }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async (product: ProductType) => {
    const existItem = state.cart.cartItems.find(
      (x: ProductType) => x.slug == product.slug
    );
    const qty = existItem ? existItem.qty + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (qty >= data.countInStock)
      return toast.error(
        `Sorry, thy are only ${product.countInStock} items in stock`
      );
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, qty },
    });
  };
  return (
    <Layout title="Home page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, index) => {
          return (
            <div key={index}>
              <ProductItem
                product={p}
                key={index}
                addToCartHandler={() => addToCartHandler(p)}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
