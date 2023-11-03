'use client';
import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import favorites from '../../styles/modules/page.module.scss';
import getData from '@/utils/getData';
import ProductList from '@/components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import { ProductsList } from '@/types/ProductsList';
import Loader from '@/components/Loader/Loader';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [data, setData] = useState<ProductsList>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setFavoriteIds(
      JSON.parse(window.localStorage.getItem('favorites') || '[]'),
    );
    getData().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  const favoritesList = data?.products.filter(({ itemId }: { itemId: string }) =>
    favoriteIds.includes(itemId),
  );

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'favorites'} />
      <h1 className={titles.main}>Favorites</h1>
      <p className={favorites.title_sub}>{favoritesList?.length} Models</p>

      {isLoading ? <Loader /> : <ProductList products={favoritesList || []} />}
    </div>
  );
}
