import React from 'react';
import { Link } from 'react-router-dom';

export default function BreakNav() {

  return (
    <div>
      <style jsx>{`
        .titles {
          width: 100%;
          margin: auto;
          font-size: 2em;
          display: flex;
          justify-content: space-evenly;
          font-family: Playfair Display SC;
          opacity: .7;

        }
        @media only screen and (max-width: 600px) {
          * {
            color: light-blue;
          }
        }
        `}
      </style>
      <div className="titles">
        <h6><Link to='/men'>ABOUT THE MEN</Link></h6><h6>ABOUT GIGI</h6><h6>WHY GIGI'S MEN</h6>

      </div>
      <hr/>
    </div>
  );
}
