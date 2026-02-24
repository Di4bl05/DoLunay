'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';

const ProductPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Fetch product details from the API
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/productos/${id}`);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;