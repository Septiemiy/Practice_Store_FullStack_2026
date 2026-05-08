import Link from "next/link";
import { BreadcrumbItem } from "@/interfaces/interfaces";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
        <li className="flex items-center gap-1">
          <Link href="/" className="hover:text-orange-500 transition-colors">Homepage</Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
                <span className="text-gray-400">/</span>
                {isLast ? (
                    <span className="text-gray-800 font-medium">{item.label}</span>
                ) : (
                    <Link href={item.href} className="hover:text-orange-500 transition-colors">{item.label}</Link>
                )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}