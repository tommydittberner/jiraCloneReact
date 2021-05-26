import {useEffect, useState} from "react";

const useTheme = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
       const storedTheme = window.localStorage.getItem('components/theme')
       if (storedTheme) {
           setTheme(storedTheme);
       }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark')
            setTheme('dark')
        } else {
            window.localStorage.setItem('theme', 'light')
            setTheme('light')
        }
    }

    return [theme, toggleTheme];
}

export default useTheme