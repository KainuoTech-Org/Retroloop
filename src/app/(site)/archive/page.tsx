import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterBar } from "@/components/archive/FilterBar";
import { ArchiveHeader } from "@/components/archive/ArchiveHeader";

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

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ArchiveHeader />

        {/* Client-side filtering logic will need to be adapted or passed initial data */}
        <FilterBar products={formattedProducts} />
      </div>
    </div>
  );
}
