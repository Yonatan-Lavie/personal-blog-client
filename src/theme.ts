// theme.ts

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light'
    // your other theme configuration here
  },
});

// const theme = {
//   colors: {
//     primary: '#007bff',
//     secondary: '#6c757d',
//     // Add more color variables as needed.
//   },
//   fonts: {
//     main: 'Arial, sans-serif',
//     // Add more font variables as needed.
//   },
//   breakpoints: {
//     mobile: '576px',
//     tablet: '768px',
//     desktop: '992px',
//     // Add more breakpoint variables as needed.
//   },
// };

export default theme;