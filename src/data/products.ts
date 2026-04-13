export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Tarta 1",
    slug: "tarta-red-velvet",
    description: "Bizcocho",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 2,
    name: "Tarta 2",
    slug: "caja-cupcakes",
    description: "Cupcakes",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 3,
    name: "Tarta 3",
    slug: "tarta-zanahoria",
    description: "Tarta",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 4,
    name: "Tarta 4",
    slug: "cheesecake-frutos-rojos",
    description: "Base crujiente",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&h=900&q=80",
  },
];
