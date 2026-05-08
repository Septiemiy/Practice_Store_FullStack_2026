import Link from "next/link";
import { Category } from "@/interfaces/interfaces";
import { categoryIcons } from "@/components/ui/CategoryIcons";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon ? categoryIcons[category.icon] : null;

  return (
    <Link href={`/products?category=${category.id}`} className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all duration-200">
      <div className="w-16 h-16 flex items-center justify-center text-gray-500 group-hover:text-orange-500 transition-colors duration-200">
        {Icon && <Icon className="w-full h-full" />}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500 text-center transition-colors duration-200">
        {category.name}
      </span>
      {category.subCategories && category.subCategories.length > 0 && (
        <span className="text-xs text-gray-400">
          {category.subCategories.length} subcategories
        </span>
      )}
    </Link>
  );
}