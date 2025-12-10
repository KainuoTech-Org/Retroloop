import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterBar } from "@/components/archive/FilterBar";

// Define the Product interface matching Sanity schema
interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  grade: "S" | "A" | "B" | "C" | "D";
  image: any; // Sanity image object
  category: string;
}

// Mock Data for Demo (Fallback when Sanity is empty)
const MOCK_PRODUCTS = [
  {
    id: "mock-1",
    name: "1994 Pink Floyd Division Bell Tee",
    brand: "Brockum",
    price: 2800,
    size: "XL",
    grade: "B" as const,
    image: "/lookbook/look1.jpg",
    category: "Tops",
  },
  {
    id: "mock-2",
    name: "Vintage Carhartt Detroit Jacket",
    brand: "Carhartt",
    price: 1500,
    size: "L",
    grade: "A" as const,
    image: "/lookbook/look4.jpg",
    category: "Outerwear",
  },
  {
    id: "mock-3",
    name: "Nike 90s Center Swoosh Hoodie",
    brand: "Nike",
    price: 850,
    size: "M",
    grade: "B" as const,
    image: "/lookbook/look2.jpg",
    category: "Tops",
  },
  {
    id: "mock-4",
    name: "Levi's 501 Big E Selvedge",
    brand: "Levi's",
    price: 3200,
    size: "32/30",
    grade: "A" as const,
    image: "/lookbook/look4.jpg",
    category: "Bottoms",
  },
  {
    id: "mock-5",
    name: "Stussy 80s Rasta Tee",
    brand: "Stussy",
    price: 1200,
    size: "L",
    grade: "C" as const,
    image: "/lookbook/look6.jpg",
    category: "Tops",
  },
  {
    id: "mock-6",
    name: "Prada Sport Nylon Vest",
    brand: "Prada",
    price: 4500,
    size: "48",
    grade: "S" as const,
    image: "/lookbook/look2.jpg",
    category: "Outerwear",
  },
  {
    id: "mock-7",
    name: "Harley Davidson 3D Emblem",
    brand: "Harley Davidson",
    price: 1800,
    size: "XL",
    grade: "A" as const,
    image: "/lookbook/look1.jpg",
    category: "Tops",
  },
  {
    id: "mock-8",
    name: "Issey Miyake Pleats Pants",
    brand: "Issey Miyake",
    price: 2200,
    size: "2",
    grade: "A" as const,
    image: "/lookbook/look2.jpg",
    category: "Bottoms",
  },
];

// Fetch products from Sanity
async function getProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    brand,
    price,
    size,
    grade,
    image,
    category
  }`;
  return client.fetch(query);
}

export default async function ArchivePage() {
  const products = await getProducts();

  // Transform Sanity data to match ProductCard props
  const formattedProducts = products.map((p: Product) => ({
    id: p._id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    size: p.size,
    grade: p.grade,
    image: urlForImage(p.image).url(),
    category: p.category,
  }));

  // Combine Sanity data with Mock data for demo purposes
  const displayProducts = [...formattedProducts, ...(formattedProducts.length > 0 ? [] : MOCK_PRODUCTS)];

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
           <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase text-retro-black mb-4">
              Archive Collection
           </h1>
           <div className="h-1 w-24 bg-retro-red" />
        </div>

        {/* Client-side filtering logic will need to be adapted or passed initial data */}
        <FilterBar products={displayProducts} />
      </div>
    </div>
  );
}
