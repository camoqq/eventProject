import { Card, Image } from "antd";
import React, { useContext } from "react";
import "./CardComp.css";
import { ContextApp } from "../context/Context";

const CardComp = ({ ev }) => {
  return (
    <div className="card">
      <Card
        hoverable={true}
        cover={
          <div className="an">
            <Image src={ev.image} />
          </div>
        }
      >
        <h2>{ev.name}</h2>
        <h3>When: {ev.date}</h3>
        <p>
          {" "}
          <b>Address:</b> {ev.location}
        </p>
        <p>
          <b>Description:</b> {ev.description}
        </p>
      </Card>
    </div>
  );
};

export default CardComp;
