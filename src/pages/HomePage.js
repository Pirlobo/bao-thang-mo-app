import React from "react";
import { cardProps } from "../props/CardProps";
import Card from "../components/Card.component";
import ContactPage from "../pages/ContactPage";
const HomePage = () => {
  return (
    <div className="container">
      <div className="services" id="home-page">
        <p>Việc Làm San Jose</p>
        <div className="card-services" id = "responsive">
          {cardProps.map((card, index) => {
            return (
              <Card
                value={index}
                key={index}
                title={card.title}
                description={card.description}
              ></Card>
            );
          })}
        </div>
      </div>
      <ContactPage></ContactPage>
    </div>
  );
};

export default HomePage;
