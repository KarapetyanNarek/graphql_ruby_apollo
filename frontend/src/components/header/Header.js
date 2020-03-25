import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-bold"></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <span className="p-2 text-dark font-weight-bold"><Link to="/">Home</Link></span>
                    <span className="p-2 text-dark font-weight-bold"><Link to="/companies">Companies</Link></span>
                    <span className="p-2 text-dark font-weight-bold"><Link to="/employees">Employees</Link></span>
                </nav>
            </div>
    )
}

export default Header;