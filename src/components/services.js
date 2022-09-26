import React, { useEffect, useState } from "react"
import axios from "axios"
import { data } from "autoprefixer"

const Services = () => {
  const [service, setService] = useState([])
  //   console.log(service)
  useEffect(() => {
    axios
      .get("https://podamium.herokuapp.com/api/services?populate=*")
      .then(function (response) {
        const allslogen = response.data.data
        setService(allslogen)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <>
      <section className="mt-16 mb-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-extrabold text-5xl text-dark-blue">
              Our Services
            </h2>
          </div>
          <div className="grid gap-4 grid-cols-4 mt-5">
            {service.map((item, index) => {
              return (
                <div className="bg-white shadow-md p-5 rounded-md" key={index}>
                  <img
                    src={`https://podamium.herokuapp.com${item.attributes.icons.data.attributes.url}`}
                    alt="new"
                    height="30"
                    width="30"
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-3 text-black1">
                    {item.attributes.Service_Name}
                  </h3>
                  <p className="text-sm font-mediums text-black2">
                    {item.attributes.Service_Description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
