import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./MainNav.module.css";

function MainNavigation() {
  return (
    <>
      <div className={` container `}>
        <nav className={` container ${classes.header}`}>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
          <p>BOUTIQUE</p>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <i class="fa-solid fa-cart-shopping"></i>Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <i className="fa-solid fa-user"></i>Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
