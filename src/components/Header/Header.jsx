
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className="inner">
                <img src={logo} alt="" />
                <div>
                    <a className='anchor' href="/order">Orders</a>
                    <a className='anchor' href="/cart">Cart</a>
                    <a className='anchor' href="/inventory">Inventory</a>
                    <a className='anchor' href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;