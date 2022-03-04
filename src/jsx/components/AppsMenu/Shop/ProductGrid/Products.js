import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product: { image, name, rating, price, token_id }, contractAddress }) => {
  var img = '';
  if (image.substring(0, 7) == 'ipfs://') {
    img = "https://ipfs.io/ipfs/" + image.substring(7, image.length);
  }
  else
    img = image;
  const openInNewTab = () => {
    window.open('https://opensea.io/assets/' + contractAddress + '/' + token_id);
  }
  return (
    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <img className="img-fluid border rounded border-warning" src={img} alt="" />
            </div>
            <div className="new-arrival-content text-center mt-3">
              <h4>
                <Link to="/ecom-product-detail">{name} #{token_id}</Link>
              </h4>
              {/* {rating}
              <span className="price">
                <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="width-15 me-2" />
                {price}
              </span> */}
            </div>
            <div className="justify-content-center text-center mt-4">
              <button className="btn btn-primary" onClick={() => openInNewTab()}>Mint</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
