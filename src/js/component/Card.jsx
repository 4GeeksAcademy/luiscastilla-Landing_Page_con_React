import React from "react";

const Card = () => {
	return (
		<div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
	);
};

export default Card;