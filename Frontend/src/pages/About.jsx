import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

const About = () => {
  return (
    <>
      <Hero title={"Learn more about us "}
      imageUrl={"/public/about.png"} />
      <Biography imageUrl={"/public/whoweare.png"} />
    </>
  )
}

export default About
