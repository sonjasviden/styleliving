import React from "react";
import InstagramFeed from "../components/InstagramFeed";
import OurBrandsStrip from "../components/OurBrandsStrip";

const HomePage = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-text">
          <h1>Om Oss</h1>
          <h2>
            Style & Living är en mode och livsstilsbutik belägen på Kullagatan i
            hjärtat av Helsingborg.
          </h2>
          <p>
            Våra kläder, skor, accessoarer och inredning är handplockade från en
            mängd olika märken och designers. Allt för att kvinnor i olika
            åldrar skall hitta snygga och tuffa outfits både till vardagen,
            jobbet och festen. Till hemmet har vi valt ut inredningsdetaljer som
            porslin, krukor, dekor, doft och serviser från våra
            favoritleverantörer.
            <br />
            <br />
            <strong>Ledorden för oss är varm och högklassig service.</strong>
            <br />
            <br />
            Varmt välkomna! <br />
            Malin med personal
          </p>
        </div>
        <div className="about-img">
          <img src="images/about.jpg" alt="picture of Malin" />
        </div>
      </div>
      <OurBrandsStrip />
      <InstagramFeed />
    </>
  );
};

export default HomePage;
