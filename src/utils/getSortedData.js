export default async function getSortedData(type, sort, limit) {
  const res = await fetch(
    `https://nss-product-catalog-api.onrender.com/products?${
      type ? `type=${type}` : ''
    }&sort=${sort}&limit=${limit}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
