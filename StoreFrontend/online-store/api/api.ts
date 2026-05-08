import { Category, Good } from "@/interfaces/interfaces";
import categoriesData from "./data/categories.json";
import goodsData from "./data/goods.json";

const categories: Category[] = categoriesData as Category[];
const goods: Good[] = goodsData as Good[];

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryById(id: string): Category | undefined {
  for (const cat of categories) {
    if (cat.id === id) return cat;
    const sub = cat.subCategories?.find((s) => s.id === id);
    if (sub) return sub;
  }
  return undefined;
}

export function getParentCategory(categoryId: string): Category | undefined {
  return categories.find((cat) =>
    cat.subCategories?.some((s) => s.id === categoryId)
  );
}

export function getCategoryName(categoryId: string): { parent: string; sub: string } | null {
  for (const cat of categories) {
    const sub = cat.subCategories?.find((s) => s.id === categoryId);
    if (sub) return { parent: cat.name, sub: sub.name };
  }
  return null;
}

export function getGoods(): Good[] {
  return goods;
}

export function getGoodById(id: string): Good | undefined {
  return goods.find((g) => g.id === id);
}

export function getGoodsByCategoryId(categoryId: string | null): Good[] {
  if (!categoryId) return goods;

  const isParent = categories.some((c) => c.id === categoryId);
  if (isParent) {
    const parent = categories.find((c) => c.id === categoryId);
    const subIds = parent?.subCategories?.map((s) => s.id) ?? [];
    return goods.filter((g) => subIds.includes(g.categoryId));
  }

  return goods.filter((g) => g.categoryId === categoryId);
}