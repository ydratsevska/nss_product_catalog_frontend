'use client'
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'

type FavContext = {
  favourites: string[],
  setFavourites:  Dispatch<SetStateAction<string[]>>,
}

const FavouritesContext = createContext<FavContext>({
  favourites: [],
  setFavourites: () => undefined
});

export function FavouritesContextProvider({ children }: { children: any }) {
  const [favourites, setFavourites] = useState([] as string[]);

  useEffect(() => {
    if (!localStorage.getItem('favourites')) {
      localStorage.setItem('favourites', '[]');
    }
    setFavourites(JSON.parse(localStorage.getItem('favourites') || '[]'))
  }, [])

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        setFavourites
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

