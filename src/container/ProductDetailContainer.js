import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { ProductDetail } from "../components/ProductDetail";

export const ProductDetailContainer = () => {
  const productParam = useParams();
  const data = useProducts();
  const filterData = data
    ? data.filter(({ id }) => productParam.id === id)
    : null;

  return (
    <>
      {filterData &&
        filterData.map(
          ({ description, src, name, price, stock, isNew }, index) => (
            <ProductDetail
              key={index}
              description={description}
              src={src}
              name={name}
              price={price}
              stock={stock}
              isNew={isNew}
            />
          )
        )}
    </>
  );
};
