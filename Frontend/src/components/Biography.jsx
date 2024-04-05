import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          explicabo veritatis nostrum tempore blanditiis, at modi vel error
          sequi rem?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          officiis doloribus, neque quo vitae nihil esse dolorem sint illum
          placeat quas minima laboriosam distinctio aut expedita hic cumque
          accusantium unde veniam perferendis laudantium veritatis cupiditate.
          Laborum, quis quasi! Aut, repellendus.
        </p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
};

export default Biography;
