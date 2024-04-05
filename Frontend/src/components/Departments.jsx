import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Departments = () => {
    const departmentsArray = [
        { 
            name: "Pediatrics",
            imageUrl: "/public/department/pedia.jpg",
        },
        { 
            name: "Orthopedics",
            imageUrl: "/public/department/ortho.jpg",
        },
        { 
            name: "Cardiology",
            imageUrl: "/public/department/cardio.jpg",
        },
        { 
            name: "Neurology",
            imageUrl: "/public/department/neuro.jpg",
        },
        { 
            name: "Oncology",
            imageUrl: "/public/department/onco.jpg",
        },
        { 
            name: "Radiology",
            imageUrl: "/public/department/radio.jpg",
        },
        { 
            name: "Physical Therapy",
            imageUrl: "/public/department/therapy.jpg",
        },
        { 
            name: "Dermatology",
            imageUrl: "/public/department/derma.jpg",
        },
        { 
            name: "ENT",
            imageUrl: "/public/department/ent.jpg",
        },
    ]
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
          slidesToSlide :1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide :1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide :1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide :1,
        }
      };
      
  return (
    <div className="container departments">
    <h2>Departments</h2>
    <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile","tablet","desktop","superLargeDesktop"]}>
    {departmentsArray.map((depart,index)=>{
        return (
            <div className="card" key={index}>
                <div className="depart-name">{depart.name}
                </div>
                <img src={depart.imageUrl} alt={depart.name} />
            </div>
        )
    })}
  </Carousel>;
    </div>
  )
}

export default Departments
