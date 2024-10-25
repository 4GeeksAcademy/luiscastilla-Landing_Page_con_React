import React from "react";

const Card = ({ imagen, titulo, texto }) => {
    return (
        <div className="col-md-6  col-lg-3 tarjeticas">
            <div className="card">
                <div className="tamaño-img">
                    <img className="card-img-top" src={imagen} alt="Imagen de la tarjeta" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="#" className="btn btn-primary">Descubre más</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
