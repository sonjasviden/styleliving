import React from "react";
import { Brand, brands } from "../pages/OurBrands";
import { Link } from "react-router-dom";

const OurBrandsStrip = () => {
  const getRandomBrands = (brandArray: Brand[]) => {
    return brandArray.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  const randomBrands = getRandomBrands(brands);

  return (
    <div className="brands-box">
      <h2>Våra märken</h2>
      <div className="brands">
        {randomBrands.map((brand, index) => (
          <img key={index} src={brand.src} alt={brand.name} />
        ))}
      </div>
      <Link to="/vara-marken">Se alla våra märken</Link>
    </div>
  );
};

export default OurBrandsStrip;
