import React, { useState, useEffect } from "react";
import "./project.css";

const Project = () => {
  const [furniture, setFurniture] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/furniture`)
      .then((response) => response.json())
      .then((data) => setFurniture(data));
  }, []);

  const filteredFurniture =
    filter === "all"
      ? furniture
      : furniture.filter((item) => item.type.includes(filter));

  return (
    <div className="project-page">
      <div className="buttons">
        <button onClick={() => setFilter("bathroom")}>Bathroom</button>
        <button onClick={() => setFilter("bedroom")}>Bed Room</button>
        <button onClick={() => setFilter("kitchan")}>Kitchen</button>
        <button onClick={() => setFilter("all")}>All</button>
      </div>
      <div className="project-cards">
        {filteredFurniture.map((item) => (
          <div className="project-card" key={item.id}>
            <img
              className="project-img-card"
              src={item.image}
              alt={item.name}
            />
            <div className="main-cards">
              <div className="cards-text">
                <h1>{item.name}</h1>
                <p>{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
