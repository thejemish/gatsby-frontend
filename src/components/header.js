import React, { useEffect } from "react"
import { Link } from "gatsby"

// CSSS
import "../styles/header.scss"

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky)
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  const isSticky = e => {
    const header = document.querySelector("header")
    const scrollTop = window.scrollY
    scrollTop >= 90
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky")
  }

  return (
    <>
      <header className="text-white bg-dark-blue">
        <div className="container mx-auto flex justify-between">
          {/* Logo */}
          <div>
            <span className="font-bold text-xl">Logo</span>
          </div>
          {/* Menu */}
          <div>
            <ul className="flex menu-ul font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="case-studies">Case Studies</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="our-process">Our Process</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
