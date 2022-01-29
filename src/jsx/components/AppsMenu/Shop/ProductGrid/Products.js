import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product: { previewImg, title, rating, price } }) => {
  return (
    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <img className="img-fluid border rounded border-warning" src={previewImg} alt="" />
            </div>
            <div className="new-arrival-content text-center mt-3">
              <h4>
                <Link to="/ecom-product-detail">{title}</Link>
              </h4>
              {rating}
              <span className="price">
                <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="width-15 me-2" />
                {price}
              </span>
            </div>
            <div className="justify-content-center text-center mt-4">
              <button className="btn btn-primary">Mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
