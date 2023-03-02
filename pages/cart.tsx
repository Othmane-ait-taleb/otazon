import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function CartPage() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  return (
    <Layout title="Shoping Cary">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty
          <Link href="/" className="text-blue-800">
            Go shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead className="border-b">
                <tr className="h-12 uppercase">
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right ">Quantity</th>
                  <th className="p-5 text-right">Item</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item: any, index: number) => (
                  <tr key={index} className="h-12 border-b border-gray-200">
                    <td className="px-5">
                      <Link href={`/product/${item.slug}`}>
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="object-cover w-20 rounded"
                          />
                          <span className="ml-3 text-sm">{item.name}</span>
                        </div>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      {
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "CART_ADD_ITEM",
                              payload: {
                                ...item,
                                qty: Number(e.target.value),
                              },
                            })
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      }
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 flex justify-center">
                      <button
                        onClick={() => removeItemHandler(item)}
                        className="flex items-center justify-center w-8 h-8 mr-1 text-gray-600 border-2 rounded-full hover:bg-gray-300"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3">
                  Subtotal (
                  {cartItems.reduce((a: number, b: any) => a + b.qty, 0)}) : $
                  {cartItems.reduce(
                    (a: number, b: any) => a + b.price * b.qty,
                    0
                  )}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("/shipping")}
                  className="w-full primary-button"
                >
                  checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
