import React, { useState } from "react";
import { NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuItemLink, IconLogoMovile, IconLogo } from "./NavBar.elements";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5"
import { GoSignIn } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUser } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";


function NavBar() {

    const [click, setClick] = useState(false);

    const changeClick = () => {
        setClick(!click);
    }

    let user = useSelector(state => state.user.user)

    let dispatch = useDispatch();

    let navigate = useNavigate()

    function logout() {
        window.localStorage.removeItem("user")
        dispatch(getUser(null))
        navigate('/')
    }

    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <Link to="/" className="Link">
                            Projects-App
                        </Link>
                    </IconLogo>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <FaTimes /> : <FaBars />}
                    </IconLogoMovile>
                    <Menu click={click}>
                        {user ?
                            <MenuItem onClick={() => changeClick()}>
                                <MenuItemLink>
                                    <div>
                                        <IoLogOutSharp />
                                        <NavLink to="/" onClick={() => logout()}>LOGOUT</NavLink>
                                    </div>
                                </MenuItemLink>
                            </MenuItem>
                            :
                            <>
                                <MenuItem onClick={() => changeClick()}>
                                    <MenuItemLink>
                                        <div>
                                            <FaUserAlt />
                                            <NavLink to="/signup">SIGN UP</NavLink>
                                        </div>
                                    </MenuItemLink>
                                </MenuItem>
                                <MenuItem onClick={() => changeClick()}>
                                    <MenuItemLink>
                                        <div>
                                            <GoSignIn />
                                            <NavLink to="/signin">SIGN IN</NavLink>
                                        </div>
                                    </MenuItemLink>
                                </MenuItem>
                            </>
                        }
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;