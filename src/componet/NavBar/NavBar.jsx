import React from 'react'
import logo from "../Image/logo.webp"
import logo1 from "../Image/bg-1.webp"
import contry1 from "../Image/ع1.png"
import contry2 from "../Image/ع2.png"
import contry3 from "../Image/ع3.png"
import contry5 from "../Image/ع5.png"
import contry6 from "../Image/ع6.png"
import contry7 from "../Image/ع7.png"
import contry8 from "../Image/ع8.png"
import "./NavBar.css"
import { FaSearch } from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
function NavBar() {
    return (
        < section className="navbar1" >
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="img1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 items " />
                        <li className="nav-item  mx-3">
                            <a className="nav-link active text-dark" aria-current="page" href="/"> Home</a>
                        </li>
                        <li className="nav-item  mx-3 dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Collection
                            </a>
                            <ul className="dropdown-menu  ull1" >
                                <div className="row  roww1" >
                                    <div className="col-md-6 col-lg-2">
                                        <div className="links">
                                            <h2 className="text-light text-dark h22" >SSD
                                                CARD</h2>
                                            <ul className="list-unstyled lh-lg">
                                                <li>Affinity M20</li>
                                                <li>Affinity P40</li>
                                                <li>Affinity P40 pro</li>
                                                <li>Tencho 7.7</li>
                                                <li>Tencho 7.1</li>
                                                <li>Tencho 7.3</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <div className="links">
                                            <h2 className="text-light text-dark h22" >
                                                POWER BANKS</h2>
                                            <ul className="list-unstyled lh-lg">
                                                <li>Spots 8Lite</li>
                                                <li>Spots ERA</li>
                                                <li>Connect 4</li>
                                                <li>Hunk cell</li>
                                                <li>Beat Cell</li>
                                                <li>Musah</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <div className="links">
                                            <h2 className="text-light text-dark h22" >
                                                EARPHONE</h2>
                                            <ul className="list-unstyled lh-lg">
                                                <li>Ampy</li>
                                                <li>Mol Cell</li>
                                                <li>Onlly Cell</li>
                                                <li>Alcaty</li>
                                                <li>MOL cell</li>
                                                <li>MOL SC</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <div className="links">
                                            <h2 className="text-light text-dark h22" >
                                                ANDROID</h2>
                                            <ul className="list-unstyled lh-lg">
                                                <li>Tecno 10 Lite</li>
                                                <li>Tecno 10 Lite pro</li>
                                                <li>Tecno 9 Lite</li>
                                                <li>Tecno 9 Lite pro</li>
                                                <li>Tecno 8 Lite</li>
                                                <li>Tecno 8</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <img src={logo1} alt="" className='imag1' />
                                    </div>
                                </div>

                            </ul>
                        </li>
                        <li className="nav-item  mx-3">
                            <a className="nav-link text-dark" href="/Shop">Shop</a>
                        </li>
                        <li className="nav-item  mx-3">
                            <a className="nav-link disabled text-dark" href='/Andriod'>Andriod</a>
                        </li>
                        <li className="nav-item  mx-3">
                            <a className="nav-link disabled text-dark">Accessories</a>
                        </li>
                        <li className="nav-item  mx-3">
                            <a className="nav-link disabled text-dark">Memory&storage</a>
                        </li>
                        <li className="nav-item  mx-3 dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-dark" href="#">About us</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-dark" href="#">Contact us</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-dark" href="#">Blog</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-dark" href="#">Faq's</a></li>
                            </ul>
                        </li>

                        <div className="icon ">
                            <FaSearch/>
                            <FaUser/>
                            <FaShoppingCart/>
                        </div>

                        <div className="nav-item dropdown">
                            <a className="result nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                language
                            </a>
                            <ul className="dropdown-menu ">
                                <li id='drob'> SR
                                    <img src={contry1} width="25PX" alt="" />
                                </li>
                                <li id='drob'> MR
                                    <img src={contry2} width="25PX" alt="" />
                                </li>
                                <li id='drob'>SR
                                    <img src={contry3} width="25PX" alt="" />
                                </li>
                                <l id='drob' i> UE
                                    <img src={contry8} width="25PX" alt="" />
                                </l>

                                <li id='drob'> LB
                                    <img src={contry5} width="25PX" alt="" />
                                </li>
                                <li id='drob'> SP
                                    <img src={contry6} width="25PX" alt="" />
                                </li>
                                <li id='drob'> GR
                                    <img src={contry7} width="25PX" alt="" />
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </section >
    )
}

export default NavBar