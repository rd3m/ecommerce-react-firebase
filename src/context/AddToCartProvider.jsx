import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isInCart, setIsInCart] = useState(false);

    const toggle = () => {
        setIsDark(!isDark);
    };

    const contextData = { isDark, toggle };

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    );
};
