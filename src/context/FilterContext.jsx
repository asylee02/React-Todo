import { useState } from "react";
import { createContext } from "react"

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [filter, setFilter] = useState('ALL');
    const [darkmode, setDarkmode] = useState(false);
    const changeDark = () => setDarkmode(!darkmode);
    return(
        <FilterContext.Provider value={{darkmode, changeDark, filter, setFilter}}>{children}</FilterContext.Provider>
    )
}

