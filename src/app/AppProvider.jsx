import { useEffect } from "react";

import { seedDatabase } from "../database/seed";


function AppProvider({ children }) {


  useEffect(()=>{

    seedDatabase();

  },[]);


  return children;

}


export default AppProvider;