import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            paper: '#ffffff',
            default: '#f4f6f8',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 4px 8px rgba(0,0,0,0.1)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 16px 24px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)', // Repeat or customize as needed
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
        '0px 2px 4px rgba(0,0,0,0.1)',
    ],
};

const theme = createTheme(themeOptions);

export default theme;
