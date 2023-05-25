import React from 'react';

const NavbarSearch = () => {
    return (
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search"
                       aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </form>
    );
};

export default NavbarSearch;