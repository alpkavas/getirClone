import React, { useEffect, useState } from "react";
import categoriesData from "../api/categoriesData.json";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoriesData);
  }, []);

  console.log(categories);
  return (
    <>
      <div className=" bg-white py-4">
        <div className="container mx-auto">
          <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
          <div className="grid grid-cols-10">
            {categories &&
              categories.map((category, index) => (
                <Category key={index} category={category} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
