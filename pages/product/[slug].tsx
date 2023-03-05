import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { ProductType } from "../../components/types";
import Product from "../../models/Product";
import db from "../../utils/db";
import { Store } from "../../utils/Store";

export default function ProductPage({ product }: { product: ProductType }) {
  const { state, dispatch } = useContext(Store);

  if (!product)
    return (
      <Layout title="Item not found">
        <div>Product Not Found</div>
      </Layout>
    );
  const addToCartHandler = async () => {
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
    <Layout title={"Home"}>
      <>
        <div className="py-2">
          <Link href={"/"}>Back to result</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
            ></Image>
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-2">
              <div className="mb-2 flex justify-between">
                <div>price</div>
                <div className="text-xl font-bold">${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <button
                className="primary-button w-full"
                onClick={() => addToCartHandler()}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  interface IParams extends ParsedUrlQuery {
    slug: string;
  }
  const { params } = context;
  const { slug } = params as IParams;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
};
