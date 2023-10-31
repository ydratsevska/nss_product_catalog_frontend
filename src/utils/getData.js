export default async function getData(type) {
  const res = await fetch(
    `https://nss-product-catalog-api.onrender.com/products?${
      type ? `type=${type}` : ''
    }`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

