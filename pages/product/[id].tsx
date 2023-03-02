import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { Product } from "../../components/types";
import data from "../../utils/data";
import { Store } from "../../utils/Store";

export default function ProductPage() {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { id } = query;
  const product = data.products.find((p) => id == p.id);

  if (!product) return <div>Product Not Found</div>;
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x: Product) => x.id == product.id
    );
    const qty = existItem ? existItem.qty + 1 : 1;
    if (qty >= product.countInStock)
      return alert(
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
