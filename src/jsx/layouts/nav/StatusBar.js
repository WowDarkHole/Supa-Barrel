import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
// import logo from "../../images/logo-full-white.png";
import logoWhite from "../../../images/logo-full-white.png";
import logo from "../../../images/logo.png";
import { useSelector, useDispatch, useStore } from 'react-redux';
import Marquee from "react-fast-marquee";

// const StatusValues = [
//   { title: 'Cool Cats NFT', price: 0.1, percent: -5 },
//   { title: 'Moon Boyz', price: 0.1, percent: -5 },
//   { title: 'Frog Land NFT', price: 0.1, percent: -5 },
//   { title: 'Wulfz NFT', price: 0.1, percent: -5 },
//   { title: 'CryptoPunk', price: 0.1, percent: -5 },
//   { title: 'VeeFriends', price: 0.1, percent: -5 },
//   { title: 'Crypto Baristas', price: 0.1, percent: -5 },
//   { title: 'Meka Verse', price: 0.1, percent: -5 },
//   { title: 'Nouns', price: 0.1, percent: -5 },
//   { title: 'Adam Bomb Squad', price: 0.1, percent: -5 },
//   { title: 'Decentraland', price: 0.1, percent: -5 },
// ];

const StatusBar = () => {
  const [toggle, setToggle] = useState(false);
  const status = useSelector(state => state.status);
  const StatusValues = status.list;
  console.log("Status", status.list);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="status-bar overflow-hidden text-nowrap d-flex align-item-center">
      <Marquee gradientWidth={0} className="overflow-hidden">
        <span className="d-inline-bloc my-1">
          {
            StatusValues.map((item, ind) => (
              <span className="px-2 border-2 border-black border-right" style={{ color: 'black' }} key={ind}>
                {item.name}, {' '}
                {item.id}, {' '}
                {item.id}%
              </span>
            ))
          }
        </span>
      </Marquee>
    </div>
  );
};

export default StatusBar;
