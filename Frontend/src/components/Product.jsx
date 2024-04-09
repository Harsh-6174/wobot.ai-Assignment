import React from 'react';

function Product({ recipe }) {
  return (
    <div className="mx-5 h-full">
        <div className="border rounded-lg overflow-hidden shadow-lg h-full">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <div className="mt-2" dangerouslySetInnerHTML={{ __html: `${recipe.summary.split(" ").slice(0,30).join(" ")}...` }}></div>
            </div>
        </div>
    </div>
  );
}

export default Product;
