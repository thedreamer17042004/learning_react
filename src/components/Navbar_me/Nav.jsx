import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../images/logo.png";
import { useState } from "react";

const Menu = () => {
  return(
    <>
    <ul >
        <li style={{color: 'yellow'}}>Home</li>
        <li style={{color: 'yellow'}}>About</li>
        <li style={{color: 'yellow'}}>Service</li>
        <li style={{color: 'yellow'}}>Blogs</li>
    </ul>;
  </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="wrapper" style={{backgroundColor: 'red', position: 'relative'}}>
      <div className="sub_wrapper" style={{display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto', alignItems: 'center'}}>
        <div className="logo">
          <img src={logo} alt="logoImg" />
        </div>
        <div className="toggle">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="" style={{width: '200px', height: '200px', backgroundColor: 'blueviolet', position: 'absolute', left: '50%'}}>
                  <Menu />               
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
