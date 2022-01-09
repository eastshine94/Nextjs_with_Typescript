import React, { useContext, useState } from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}

interface ProductDetailContextValue {}

type ProductDetailUpdaterContextValue = React.Dispatch<
  React.SetStateAction<ProductDetailContextValue>
>;

const ProductDetailStateContext = React.createContext<
  ProductDetailContextValue | undefined
>(undefined);
const ProductDetailUpdaterContext = React.createContext<
  ProductDetailUpdaterContextValue | undefined
>(undefined);

function ProductDetailProvider({ children }: ChildrenProps) {
  const [ProductDetailParam, setProductDetailParam] =
    useState<ProductDetailContextValue>();
  return (
    <ProductDetailUpdaterContext.Provider value={setProductDetailParam}>
      <ProductDetailStateContext.Provider value={ProductDetailParam}>
        {children}
      </ProductDetailStateContext.Provider>
    </ProductDetailUpdaterContext.Provider>
  );
}

const useProductDetailUpdater = () => {
  const contextValue = useContext(ProductDetailUpdaterContext);
  if (typeof contextValue === 'undefined') {
    throw new Error(
      'useProductDetailUpdater must be used within a ProductDetailProvider'
    );
  }
  return contextValue;
};

const useProductDetailState = () => {
  const contextValue = useContext(ProductDetailStateContext);

  return contextValue;
};

export {
  ProductDetailProvider,
  useProductDetailState,
  useProductDetailUpdater
};
