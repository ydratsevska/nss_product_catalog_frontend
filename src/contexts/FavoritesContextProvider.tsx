'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import {toast} from "react-toastify";

type FavContext = {
  favorites: number[];
  setFavorites: Dispatch<SetStateAction<number[]>>;
  handleFavorites: (id: number) => void;
};

export const FavoritesContext = createContext<FavContext>({
  favorites: [],
  setFavorites: () => undefined,
  handleFavorites: () => undefined,
});

export function FavouritesContextProvider({ children }: { children: any }) {
  const [favorites, setFavorites] = useState([] as number[]);

  useEffect(() => {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', '[]');
    }
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  const handleFavorites = (id: number) => {
    const exists = favorites.includes(id)
    const newFavorites = exists
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    if (exists) {
      toast.error('Successfully removed from favorites')

      return;
    }

    toast.success('Successfully added to favorites')
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        handleFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
