import { createContext } from 'react';

export const DataContext = createContext({
  year: 0,
  yearType: "BCE",
  searchRoutes: ()=>{},
  route: [],
  setYear: ()=>{},
  setYearType: ()=>{},
  chooseRoute: ()=>{},
});
