import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductActions from "@/components/ui/ProductActions";
import Image from "next/image";
import { BreadcrumbItem } from "@/interfaces/interfaces";
import { getGoodById, getCategoryName } from "@/api/api";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const good = getGoodById(id);
  
  if (!good) {
      return (
      <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-500">Product not found</p>
      </div>
      );
  }

  const category = getCategoryName(good.categoryId);

  const breadcrumbs: BreadcrumbItem[] = [
      { label: "Товари", href: "/products" },
  ];

  if (category) {
      breadcrumbs.push({
          label: category.parent,
          href: `/products?category=${good.categoryId.split("-")[0]}`,
      });
      
      breadcrumbs.push({
          label: category.sub,
          href: `/products?category=${good.categoryId}`,
      });
  }

  breadcrumbs.push({
      label: good.title,
      href: `/products/${good.id}`,
  });

  return (
  <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumbs items={breadcrumbs} />
      <div className="mt-4 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={good.imageUrl}
                        alt={good.title}
                        fill
                        className="object-contain p-1"
                      />
                  </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                  {category && (
                  <div className="flex items-center gap-2">
                      <span className="text-xs bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
                          {category.parent}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          {category.sub}
                      </span>
                  </div>
                  )}
                  <h1 className="text-2xl font-bold text-gray-900">{good.title}</h1>
                  <p className="text-sm text-green-600 font-medium">
                      In stock {good.quantity}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                      {good.description}
                  </p>
                  <hr className="border-gray-100" />
                  <ProductActions maxQuantity={good.quantity} good={good} />
              </div>
          </div>
      </div>
  </div>
  );
}