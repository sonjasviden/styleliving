import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <main className="thanks-main">
      <div className="back-btn">
        <Link to="/">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Gå tillbaka till startsidan
          </p>
        </Link>
      </div>

      <div className="thanks">
        <h2>Tack för ditt mail!</h2>
        <h3>Vi hör av oss så fort vi kan.</h3>
      </div>
    </main>
  );
};

export default ThankYouPage;
