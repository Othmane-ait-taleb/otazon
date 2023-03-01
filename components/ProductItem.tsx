import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "./types";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="bg-green-100 m-2">
      <Link href={`/product/${product.id}`} className="shadow-2xl">
        <Image
          width={400}
          height={420}
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        ></Image>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="text-gray-500">${product.price}</p>
        <button className="primary-button">Add to cart</button>
      </div>
    </div>
  );
}
