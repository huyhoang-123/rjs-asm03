import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import classes from './MainNav.module.css'

function MainNavigation() {
    return <>
        <div className={` container `}>
            <nav className={` container ${classes.header}`}>
                <ul className={classes.list}>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? classes.active : undefined)} end>Home</NavLink></li>
                    <li><NavLink to='/shop' className={({ isActive }) => (isActive ? classes.active : undefined)}>Shop</NavLink></li>
                </ul>
                <p>BOUTIQUE</p>
                <ul className={classes.list}>
                    <li><NavLink to='/cart' className={({ isActive }) => (isActive ? classes.active : undefined)} ><i class="fa-solid fa-cart-shopping"></i>Cart</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? classes.active : undefined)}><i class="fa-solid fa-user"></i>Login</NavLink></li>
                </ul>



            </nav>
            <div className={classes.banner}><p className={classes.fixp}>NEW INSPIRATION 2020</p>
                <p style={{ marginLeft: '4rem', fontSize: '2rem' }}>20% OFF ON NEW <br />SEASON</p>
                <button className={classes.fbtn}><NavLink to='/shop' style={{ color: 'white', fontStyle: "italic", textDecoration: 'none' }}>Browse colections</NavLink></button>
            </div>
            {/* <img src='.\images\banner1.jpg' style={{ width: "100%" }} /> */}

        </div>







    </>
}

export default MainNavigation;