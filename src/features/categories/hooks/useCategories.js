import { useEffect, useState } from "react";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../services/categoryService";


export function useCategories(){

  const [categories,setCategories] = useState([]);


  async function loadCategories(){

    const data = await getCategories();

    setCategories(data);

  }


  async function addCategory(category){

    await createCategory(category);

    await loadCategories();

  }


  async function editCategory(id,data){

    await updateCategory(id,data);

    await loadCategories();

  }


  async function removeCategory(id){

    await deleteCategory(id);

    await loadCategories();

  }


  useEffect(()=>{

    loadCategories();

  },[]);


  return {
    categories,
    addCategory,
    editCategory,
    removeCategory
  };

}