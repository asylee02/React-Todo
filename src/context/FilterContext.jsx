import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [filter, setFilter] = useState('ALL');
    const [darkmode, setDarkmode] = useState(false);
    const changeDark = () => {
        setDarkmode(!darkmode);
        updateDarkMode(!darkmode)
    };

    useEffect(()=>{
        const isDark =
            localStorage.theme ==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches);
            setDarkmode(isDark);
            updateDarkMode(isDark);
    }, [])

    return(
        <FilterContext.Provider value={{darkmode, changeDark, filter, setFilter}}>{children}</FilterContext.Provider>
    )
}
function updateDarkMode(darkmode){
    if (darkmode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark'
    }
    else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
    }
}

