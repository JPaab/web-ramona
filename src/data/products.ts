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
    name: "Red Velvet de Presencia",
    slug: "tarta-red-velvet",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 2,
    name: "Caja de Cupcakes Indóciles",
    slug: "caja-cupcakes",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 3,
    name: "Zanahoria con Remate",
    slug: "tarta-zanahoria",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    price: 54,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    id: 4,
    name: "Cheesecake de Frutos Rojos",
    slug: "cheesecake-frutos-rojos",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    price: 58,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&h=900&q=80",
  },
];
