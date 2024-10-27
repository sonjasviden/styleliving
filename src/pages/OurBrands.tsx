import React from "react";
import { Image } from "react-bootstrap";

export interface Brand {
  name: string;
  src: string;
}

export const brands: Brand[] = [
  { name: "Bow", src: "images/brands/bow.png" },
  { name: "Cocouture", src: "images/brands/cocouture.png" },
  { name: "Coster", src: "images/brands/coster.png" },
  { name: "Costamani", src: "images/brands/costamani.png" },
  { name: "Depeche", src: "images/brands/depeche.png" },
  { name: "Hvisk", src: "images/brands/hvisk.png" },
  { name: "Ibu", src: "images/brands/ibu.png" },
  { name: "Isay", src: "images/brands/isay.png" },
  { name: "Kmb", src: "images/brands/kmb.png" },
  { name: "Latalia", src: "images/brands/latalia.png" },
  { name: "Litek", src: "images/brands/litek.png" },
  { name: "Mos Mosh", src: "images/brands/mosmosh.png" },
  { name: "Nordal", src: "images/brands/nordal.png" },
  { name: "Numph", src: "images/brands/numph.png" },
  { name: "Olsson J", src: "images/brands/olssonj.png" },
  { name: "Pure", src: "images/brands/pure.png" },
  { name: "SF", src: "images/brands/sf.png" },
  { name: "Soaked", src: "images/brands/soaked.png" },
  { name: "Soya", src: "images/brands/soya.png" },
  { name: "Unmade", src: "images/brands/unmade.png" },
  { name: "Voluspa", src: "images/brands/voluspa.png" },
  { name: "Yaya", src: "images/brands/yaya.png" },
  { name: "7East", src: "images/brands/7east.png" },
];

const OurBrands = () => {
  return (
    <>
      <div className="heading-banner text-center">
        <h2>Våra Märken</h2>
        <p>
          I vår butik säljer vi kläder, skor, accessoarer och inredning
          handplockade från en mängd olika märken och designers.
        </p>
      </div>

      <div className="brands-container">
        <div className="grid-container">
          {brands.map((brand, index) => (
            <div className="grid-item" key={index}>
              <Image src={brand.src} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurBrands;
