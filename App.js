import React from 'react';
import RestaurantScreen from './src/Features/Restaurants/Screens/RestaurantScreen';

import { ThemeProvider } from 'styled-components/native';

import { theme } from "./src/Infrastructure/Theme/index";





export default function App() {

return (
  <>
      <ThemeProvider theme = {theme}>
        <RestaurantScreen/>
      </ThemeProvider>
  </>
);
}


