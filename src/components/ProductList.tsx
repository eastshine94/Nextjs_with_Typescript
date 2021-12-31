import React from 'react';
import { ProductItemType } from '../../types/Product';
import Link from './Link';

interface ProductListProps {
  list: ProductItemType[];
}

function ProductList({ list }: ProductListProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {list.map((item, idx) => (
        <ProductItem item={item} key={idx} />
      ))}
    </div>
  );
}

function ProductItem({ item }: { item: ProductItemType }) {
  return (
    <Link href={`/detail/${item.id}`}>
      <div className="pb-5 text-center">
        <img
          className="block mt-0 mb-0 m-auto"
          src={item.image_link}
          alt={item.name}
        />
        <div className="line-clamp-2 w-40 mb-2 mt-2 m-auto text-sky-700 text-sm">
          <strong>{item.name}</strong>
        </div>
        <div className="mb-2.5 text-zinc-400 text-sm">
          {item.category} {item.product_type}
        </div>
        <div className="font-bold text-teal-400 text-base">${item.price}</div>
      </div>
    </Link>
  );
}

export default ProductList;
