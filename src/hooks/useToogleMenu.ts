import { useState } from "react";

export const useMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return {
        menuOpen,
        toggleMenu
    };
};
