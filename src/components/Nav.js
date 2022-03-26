import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" style={{ position: "relative", left: "29px", fontSize: "30px", color: "#00ff00" }}>VEGYSHOP</a>
            <button className="btn btn-primary" style={{ position: "relative", left: "133vh", width: "100px" }}>WHISHLIST</button>
            <button className="btn btn-success" style={{ position: "relative", left: "80vh", width: "10vh" }}>SEARCH</button>
            <button className="btn btn-outline-primary" style={{ position: "relative", left: "70vh", width: "10vh" }}>CART</button>
            <form class="form-inline">
                <input style={{ position: "relative", right: "50vh", width: "80vh" }} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
}
