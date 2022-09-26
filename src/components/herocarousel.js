import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import axios from "axios"

const HeroCarousel = () => {
  const [slogen, setSlogens] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/home")
      .then(function (response) {
        // handle success
        const allslogen = response.data.data.attributes
        setSlogens(allslogen)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])
  return (
    <>
      <section className="hero-carousel bg-dark-blue">
        <div className="container mx-auto">
          <Typewriter
            options={{
              strings: [slogen.Slogan_1, slogen.Slogan_2],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="hero-bg"></div>
      </section>
    </>
  )
}

export default HeroCarousel
