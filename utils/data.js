import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'John',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Jane',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {
            id:"p_1",
            name: 'Free Shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 6,
            description: "A popular pants"
        },
        {
            id: "p_2" ,
            name: 'Fit Shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Nike',
            rating: 4.2,
            numReviews: 5,
            countInStock: 6,
            description: "A popular pants"
        },
        {
            id:"p_3",
            name: 'Best Pant',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 50,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 2,
            countInStock: 6,
            description: "A popular pants"
        },
        {
            id:"p_4",
            name: 'Taine Pant',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 90,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 6,
            description: "A popular pants"
        },
        {
            id:"p_5",
            name: 'fit Pant',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 50,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 2,
            countInStock: 12,
            description: "A popular pants"
        },
    ]
}
export default data;