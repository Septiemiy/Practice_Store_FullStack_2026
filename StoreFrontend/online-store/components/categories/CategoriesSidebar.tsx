"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Category } from "@/interfaces/interfaces";

interface CategoriesSidebarProps {
  categories: Category[];
}

export default function CategoriesSidebar({ categories }: CategoriesSidebarProps) {
  const searchParams = useSearchParams();
  const activeCategoryId = searchParams.get("category");

  return (
    <aside className="w-64 shrink-0">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">Categories</h2>
        </div>

        <nav className="py-2">
          <Link
            href="/products"
            className={`flex items-center px-4 py-2 text-sm transition-colors ${
              !activeCategoryId
                ? "bg-orange-50 text-orange-500 font-medium"
                : "text-gray-600 hover:bg-gray-50 hover:text-orange-500"
            }`}
          >
            All goods
          </Link>

          {categories.map((category) => {
            const isActiveParent =
              activeCategoryId === category.id ||
              category.subCategories?.some((sub) => sub.id === activeCategoryId);
            return (
              <div key={category.id}>
                <Link
                  href={`/products?category=${category.id}`}
                  className={`flex items-center px-4 py-2 text-sm transition-colors ${
                    activeCategoryId === category.id
                      ? "bg-orange-50 text-orange-500 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-500 font-medium"
                  }`}
                >
                  {category.name}
                </Link>

                {isActiveParent && category.subCategories && (
                  <div className="border-l-2 border-orange-200 ml-4">
                    {category.subCategories.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/products?category=${sub.id}`}
                        className={`flex items-center px-4 py-1.5 text-sm transition-colors ${
                          activeCategoryId === sub.id
                            ? "text-orange-500 font-medium"
                            : "text-gray-500 hover:text-orange-500"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}