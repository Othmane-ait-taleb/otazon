import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "p_1",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      description: "A popular pants",
    },
    {
      name: "Fit Shirt",
      slug: "p_2",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Nike",
      rating: 4.2,
      numReviews: 5,
      countInStock: 6,
      description: "A popular pants",
    },
    {
      name: "Best Pant",
      slug: "p_3",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 50,
      brand: "Nike",
      rating: 2.5,
      numReviews: 2,
      countInStock: 6,
      description: "A popular pants",
    },
    {
      name: "Taine Pant",
      slug: "p_4",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 90,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 6,
      description: "A popular pants",
    },
    {
      name: "fit Pant",
      slug: "p_5",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 50,
      brand: "Nike",
      rating: 4.3,
      numReviews: 2,
      countInStock: 12,
      description: "A popular pants",
    },
  ],
};
export default data;
