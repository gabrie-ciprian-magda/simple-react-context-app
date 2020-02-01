import React, {createContext} from 'react';

// Custom hooks
import useToggle from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, toggleTheme] = useToggle(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}