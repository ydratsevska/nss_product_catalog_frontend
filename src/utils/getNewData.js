export default async function getNewData(type) {
  const res = await fetch(
    `https://nss-product-catalog-api.onrender.com/products/new`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
