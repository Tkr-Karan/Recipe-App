import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const fetchRecipeData = async function () {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    console.log(data.categories);
    setRecipes(data.categories);
  };

  return (
    <div>
      <h1
        className=" m-2 text-3xl text-amber-300 text-[40px] font-bold"
        style={{ "font-family": "'Rubik Iso', cursive" }}
      >
        Recipe App
      </h1>

      <div className="flex flex-wrap justify-center items-center ">
        {recipes.map((recipe) => {
          return (
            <div
              className="w-[30%] h-[300px] m-3 flex justify-between items-center rounded-md border-solid border-4 border-gray-600 bg-slate-500 overflow-hidden cursor-pointer transition-all hover:bg-cyan-200 hover:scale-[1.12]"
              key={recipe.idCategory}
            >
              <div className="w-[20%] break-words flex flex-col justify-center items-center ">
                <img
                  className="w-[10rem] h-[8rem] "
                  src={recipe.strCategoryThumb}
                  alt="food-img"
                />
                {/* <h3 className="font-bold text-xl break-normal">{recipe.strCategory}</h3> */}
              </div>
              <div className="w-[75%] h-[90%] m-2 text-left overflow-hidden ">
                <p>{recipe.strCategoryDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
