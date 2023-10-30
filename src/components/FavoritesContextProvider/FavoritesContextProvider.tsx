'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

type FavContext = {
  favorites: number[];
  setFavourites: Dispatch<SetStateAction<number[]>>;
};

export const FavoritesContext = createContext<FavContext>({
  favorites: [],
  setFavourites: () => undefined,
});

export function FavouritesContextProvider({ children }: { children: any }) {
  const [favorites, setFavorites] = useState([] as number[]);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', '[]');
    }
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites,
        setFavourites: setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
