import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CategoriesSidebar from "@/components/categories/CategoriesSidebar";
import GoodCard from "@/components/ui/GoodCard";
import { BreadcrumbItem } from "@/interfaces/interfaces";
import { getCategories, getGoodsByCategoryId, getCategoryById, getParentCategory } from "@/api/api";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const categoryId = category ?? null;
  const categories = getCategories();
  const filteredGoods = getGoodsByCategoryId(categoryId);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Products", href: "/products" },
  ];

  if (categoryId) {
    const category = getCategoryById(categoryId);
    const parent = getParentCategory(categoryId);

    if (parent && parent.id !== categoryId) {
      breadcrumbs.push({
        label: parent.name,
        href: `/products?category=${parent.id}`,
      });
    }

    if (category) {
      breadcrumbs.push({
        label: category.name,
        href: `/products?category=${category.id}`,
      });
    }
  }

  const pageTitle = categoryId
    ? getCategoryById(categoryId)?.name ?? "Products"
    : "All products";

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <div className="flex gap-6 mt-4">
        <CategoriesSidebar categories={categories} />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {pageTitle}
            <span className="ml-2 text-base font-normal text-gray-400">
              ({filteredGoods.length} products)
            </span>
          </h1>

          {filteredGoods.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
              <p className="text-gray-400 text-lg">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGoods.map((good) => (
                <GoodCard key={good.id} good={good} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}