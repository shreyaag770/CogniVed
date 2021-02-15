import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-evenly items-start h-auto bg-gray-100 text-black flex-wrap" style= {{ boxShadow : "0 -7px 8px rgba(0,0,0,0.5)"}}>
        <div className="text-left p-2 m-2">
          <div className="upercase font-bold text-xl mb-2">Company</div>
          <a href="/" className="text-sm  pr-1 block hover:text-blue-300">
            Horro
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Blog
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Cocons
          </a>
        </div>
        <div className="text-left p-2 m-2">
          <div className="upercase font-bold block text-xl mb-2">About</div>
          <a href="/" className="text-sm  pr-1 block hover:text-blue-300">
            About us
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Contact us
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Privacy policy
          </a>
        </div>
        <div className="text-left p-2 m-2">
          <div className="upercase font-bold text-xl mb-2">Services</div>
          <a href="/" className="text-sm  pr-1 block hover:text-blue-300">
            CKD
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Wound
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Jll
          </a>
          <a href="/" className="text-sm  pr-1 block pt-1 hover:text-blue-300">
            Matenity
          </a>
        </div>
        <div className="text-left p-2 m-2 w-36">
          <div className="upercase font-bold text-xl mb-2">Boston</div>
          <p className="text-sm">1C-24 SonoolS..Suio..Bo2 Boster, MA 021c3 JSA</p>
        </div>
        <div className="text-left p-2 m-2 w-36">
          <div className="upercase font-bold text-xl mb-2">London</div>
          <p className="text-sm">The Kings Fund 11-12 Cavencish Scuare London W10 AN, UK</p>
        </div>
        <div className="text-left p-2 m-2 w-36">
          <div className="upercase font-bold text-xl mb-2">Telaviv</div>
          <p className="text-sm">ibn 3abiro lel Avik.5/C/02 Isroel</p>
        </div>
      </div>
      <p className="text-xs text-center pb-4 bg-gray-100 text-black">Copyright © 2021 CogniVed All rights reserved.</p>
    </>
  );
};

export default Footer;
