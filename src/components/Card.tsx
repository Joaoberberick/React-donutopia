import { Children } from "react";
import "./styles/Card.css";

interface props {
  img: string;
  sabor: string;
  children: string;
}

export const Card = ({ img, sabor, children }: props) => {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={img} alt={sabor} />
      <div className="card-body">
        <h4 className="card-title">{sabor}</h4>
        <p className="card-text">{children}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">
          Comprar
        </a>
      </div>
    </div>
  );
};
