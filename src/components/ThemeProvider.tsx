import { useEffect, useState } from "react"
import { ThemeContext } from "../Context/ThemeContext";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, SetTheme] = useState("light");
    const toogleTheme = () => {
        SetTheme((res) => res === "light" ? "dark" : "light");
    }
    useEffect(
        ()=>{
            document.documentElement.setAttribute("data-theme",theme);
        },[theme]
    )
    return (
        <>
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}
