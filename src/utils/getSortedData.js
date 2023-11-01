export default async function getSortedData(type, sort, limit, offset) {
  const res = await fetch(
    `https://nss-product-catalog-api.onrender.com/products?${
      type ? `type=${type}` : ''
    }&sort=${sort}&limit=${limit}&offset=${offset}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
