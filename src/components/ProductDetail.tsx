import { MouseEvent, useEffect } from 'react';
import Image from 'next/image';
import { ProductItemType } from '../../types/Product';
import Button from './Button';
import {
  useProductDetailState,
  useProductDetailUpdater
} from '../context/product-detail-context';

function ProductDetail({ item }: { item: ProductItemType }) {
  const { name, image_link, price, description, category, product_type } = item;
  const setParam = useProductDetailUpdater();
  useEffect(() => {
    setParam({ item });
  }, []);

  const param = useProductDetailState();
  console.log(param);
  return (
    <div className="page-wrap">
      <div className="flex my-10 mx-0 ">
        <div className="flex-[200px_0_0]">
          <Image
            className="block"
            layout="fixed"
            width={160}
            height={180}
            src={image_link}
            alt={name}
          />
        </div>
        <div className="flex-[1_0_0]">
          <div className="font-bold text-[24px] mt-5">{name}</div>
          <div className="font-bold text-[#00bcd4] text-[34px]">${price}</div>
          <div className="text-[24px] mb-4">
            {category ? `${category}/` : ''}
            {product_type}
          </div>

          <Button
            color="#ff9c2f"
            content="구매하기"
            onClick={(e: MouseEvent<HTMLElement>) => {
              e.preventDefault();
            }}
          />
        </div>
      </div>
      <div className="text-[22px] font-bold pt-2 pb-1 border-t-[1px] border-solid border-gray-300">
        Description
      </div>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </div>
  );
}

export default ProductDetail;
