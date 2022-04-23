import React from 'react';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router)
  return (<div>
    Products for {slug}
  </div>)
}