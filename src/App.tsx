import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import Router from "./Router";

import { darkTheme, lightTheme } from "./assets/style/theme";
import { GlobalStyle } from "./assets/style/globalStyles";

export const ThemeContext = React.createContext<any>(null);
const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet></Helmet>
                <Router />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;
