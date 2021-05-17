import React from "react";
import { cardProps } from "../props/CardProps";
import Card from "../components/Card.component";
import ContactPage from "../pages/ContactPage";
const HomePage = () => {
  return (
    <div className="container">
      <div className="services" id="home-page">
        <p>Tìm jobs không khó</p>
        <div className="card-services">
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
