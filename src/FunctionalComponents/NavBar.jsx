import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
    var [search, setsearch] = useState("")
    function getData(event) {
        setsearch(event.target.value)
    }
    function postData(event) {
        event.preventDefault()
        props.changeSearch(search)
        this.setState({ search: "" })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">LatestNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/" onClick={() => props.changeSearch("")}>World</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Climate Change" onClick={() => props.changeSearch("")}>Climate Change</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Covid 19" onClick={() => props.changeSearch("")}>Covid 19</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Politics" onClick={() => props.changeSearch("")}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Economy" onClick={() => props.changeSearch("")}>Economy</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Science" onClick={() => props.changeSearch("")}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology" onClick={() => props.changeSearch("")}>Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/Games" onClick={() => props.changeSearch("")}>Games</Link></li>
                                    <li><Link className="dropdown-item" to="/Human Rights" onClick={() => props.changeSearch("")}>Human Rights</Link></li>
                                    <li><Link className="dropdown-item" to="/Discovery" onClick={() => props.changeSearch("")}>Discovery</Link></li>
                                    <li><Link className="dropdown-item" to="/Art" onClick={() => props.changeSearch("")}>Art</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes" onClick={() => props.changeSearch("")}>Jokes</Link></li>
                                    <li><Link className="dropdown-item" to="/Social Media" onClick={() => props.changeSearch("")}>Social Media</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown nav-language">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage('hi')}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage('en')}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-50" role="search" onSubmit={(event) => postData(event)}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(event) => getData(event)} value={search} />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}