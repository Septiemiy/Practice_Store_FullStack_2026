import Link from "next/link";

import CategoryCard from "@/components/categories/CategoryCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getCategories } from "@/api/api";

export default function Home() {
  const categories = getCategories();

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumbs items={[]} />
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 md:p-12 mb-10 text-white">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">The best products for you</h1>
          <p className="text-orange-100 mb-6 text-lg">Smartphones, laptops, TVs, and much more at the best prices</p>
          <Link href="/products" className="inline-block bg-white text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Shop Now</Link> 
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <Link href="/products" className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">View All Products &rarr;</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </section>
  );
}
