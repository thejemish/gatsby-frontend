import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import axios from "axios"

const HeroCarousel = () => {
  const [slogen, setSlogens] = useState("")
  useEffect(() => {
    axios
      .get("https://podamium.herokuapp.com/api/home")
      .then(function (response) {
        const allslogen = response.data.data.attributes
        setSlogens(allslogen)
      })
      .catch(function (error) {
        console.log(error)
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
