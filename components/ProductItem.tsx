import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "./types";

export default function ProductItem({
  product,
  addToCartHandler,
}: {
  product: ProductType;
  // eslint-disable-next-line no-unused-vars
  addToCartHandler: () => {};
}) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} className="shadow-2xl">
        <Image
          width={1000}
          height={1000}
          src={product.image}
          alt={product.name}
          className="rounded shadow w-full"
        ></Image>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="text-gray-500">${product.price}</p>
        <button className="primary-button" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
