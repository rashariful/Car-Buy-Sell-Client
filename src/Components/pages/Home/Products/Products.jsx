import Product from './Product';
import { useQuery } from "@tanstack/react-query";
import BookingModal from '../BookingModal/BookingModal';
import { useState } from 'react';

const Products = () => {
  const [mProducts, setMproudcts] = useState([])
      const { data: products=[] } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
          fetch(`http://localhost:5000/products`).then(
            (res) => res.json()
          ),
      });
 
    console.log(products);

  

    return (
      <div>
        <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {products?.map((product) => (
            <Product
              key={product._id}
              product={product}
              setMproudcts={setMproudcts}
            ></Product>
          ))}
        </div>
        <div>
          <BookingModal mProducts={mProducts}></BookingModal>
        </div>
      </div>
    );
};

export default Products;