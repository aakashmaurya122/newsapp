import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'

export default function App() {
    var [language, setlanguage] = useState("hi")
    var [search, setsearch] = useState("")
    let changeLanguage = (data) => {
        setlanguage(data)
    }
    let changeSearch = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <NavBar changeLanguage={changeLanguage} changeSearch={changeSearch} />
                <Routes>
                    <Route path='' element={<Home search={search} language={language} q="World" />} />
                    <Route path='/World' element={<Home search={search} language={language} q="World" />} />
                    <Route path='/Climate Change' element={<Home search={search} language={language} q="Climate Change" />} />
                    <Route path='/Covid 19' element={<Home search={search} language={language} q="Covid 19" />} />
                    <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
                    <Route path='/Economy' element={<Home search={search} language={language} q="Economy" />} />
                    <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
                    <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
                    <Route path='/Games' element={<Home search={search} language={language} q="Games" />} />
                    <Route path='/Human Rights' element={<Home search={search} language={language} q="Human Rights" />} />
                    <Route path='/Discovery' element={<Home search={search} language={language} q="Discovery" />} />
                    <Route path='/Art' element={<Home search={search} language={language} q="Art" />} />
                    <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
                    <Route path='/Social Media' element={<Home search={search} language={language} q="Social Media" />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
