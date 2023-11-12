import React from 'react'

function product(Props) {
    // const { Product } = Props;
    return (

        <>
            <div className="card" >
                <img src={Product.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">{Product.description}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>


        </>
    );
}

export default product