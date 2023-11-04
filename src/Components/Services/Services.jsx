import { useEffect, useState } from "react"
import Service from "./Service";

export default function Services() {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch("https://car-doctor-server-ten-jade.vercel.app/services" , {credentials : 'include'})
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div>
      <div className="text-center">
        <h2 className="text-orange-600 font-bold text-2xl">Services</h2>
        <h3 className="text-5xl font-bold">Our Services Area</h3>
        <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour,  or randomised words <br /> which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services?.map(service => <Service
            key={service._id}
            service={service}
            ></Service>)
        }
      </div>
    </div>
  )
}
