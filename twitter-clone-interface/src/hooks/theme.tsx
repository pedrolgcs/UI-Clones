import React, { createContext, useState, useContext, useCallback } from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeStruct {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    search: string;
    text: string;
    gray: string;
    outline: string;
    retweet: string;
    like: string;
    twitter: string;
    twitterDarkHover: string;
    twitterLightHover: string;
    input: string;
  };
}

interface ThemeState {
  theme: ThemeStruct;
}

// return interface
interface ThemeContextData {
  theme: ThemeStruct;

  toggleTheme(): void;
}

// create context
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

// provider, around the all application
const ThemeProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ThemeState>(() => {
    const activedTheme = localStorage.getItem('@twitter:theme');

    if (activedTheme === 'light') {
      return { theme: light };
    }

    return { theme: dark };
  });

  const toggleTheme = useCallback(() => {
    if (data.theme.title === 'light') {
      localStorage.setItem('@twitter:theme', 'dark');
      setData({ theme: dark });
    } else {
      localStorage.setItem('@twitter:theme', 'light');
      setData({ theme: light });
    }
  }, [data.theme]);

  return (
    <ThemeContext.Provider value={{ theme: data.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within as Theme provider');
  }

  return context;
}

export { ThemeProvider, useTheme };
