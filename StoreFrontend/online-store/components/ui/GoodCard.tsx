import Link from "next/link";
import Image from "next/image";
import { Good } from "@/interfaces/interfaces";

interface GoodCardProps {
  good: Good;
}

export default function GoodCard({ good }: GoodCardProps) {
  return (
    <Link href={`/products/${good.id}`} className="group bg-white rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="relative w-full aspect-square rounded-t-xl overflow-hidden bg-gray-50">
        <Image
          src={good.imageUrl}
          alt={good.title}
          fill
          className="object-contain p-1"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors line-clamp-2">
          {good.title}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {good.price.toLocaleString("uk-UA")} ₴
          </span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-2 rounded-lg transition-colors">Buy</button>
        </div>
      </div>
    </Link>
  );
}