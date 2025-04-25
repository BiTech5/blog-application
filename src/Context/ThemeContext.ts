import { createContext } from "react";

interface ThemeContextType {
    theme: string;
    toogleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toogleTheme: () => {},
});