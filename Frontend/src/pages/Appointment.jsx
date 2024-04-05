import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'

const Appointment = () => {
  return (
    <>
    <Hero title={"Schedule your Appointment | Zeecare Medical Institue"} imageUrl={"/public/signin.png"}/>
   <AppointmentForm/> 
    </>
  )
}

export default Appointment
