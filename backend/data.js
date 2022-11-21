import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Hai',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Hair',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Asus',
      slug: 'asus-mo01',
      category: 'Laptop',
      image: '/images/pic1.jfif',
      price: 1000000,
      countInStock: 10,
      brand: 'Asus',
      rating: 4,
      numReview: 10,
      description: 'Asus Vivo book',
    },
    {
      //_id: '2',
      name: 'Asus1',
      slug: 'asus-mo02',
      category: 'Laptop',
      image: '/images/pic1.jfif',
      price: 1000000,
      countInStock: 10,
      brand: 'Asus',
      rating: 4,
      numReview: 10,
      description: 'Asus Vivo book',
    },
    {
      //_id: '3',
      name: 'Asus2',
      slug: 'asus-mo03',
      category: 'Laptop',
      image: '/images/pic1.jfif',
      price: 1000000,
      countInStock: 10,
      brand: 'Asus',
      rating: 4,
      numReview: 10,
      description: 'Asus Vivo book',
    },
  ],
};
export default data;
