import React, { useContext } from 'react';

// Context
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode ? "#041634" : "white",
        height: "100vh",
        width: "100vw"
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}
 
export default PageContent;