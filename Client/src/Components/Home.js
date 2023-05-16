import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-heading">
          <h1>
           <b> Delivering</b> <br />
            <span className="green-text">farm fresh produce</span> <br />
           <b>at low costs</b> <br />
            <span className="green-text">to your home</span>
          </h1>
        </div>
        <div className="header-image">
          <img src="https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGdyZWVuJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="not found" />
        </div>
      </div>
      <div className="content">
        <h2 className="content-heading">
          <span className="green-text">Discover</span> <br />
          our products
        </h2>
      </div>
      <hr />
     
      <div className="product-category"><h2><b>Fruits</b></h2>
      <div className="products">
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Mango</div>
            <div className="product-price">$8/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>
        </div>
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Banana</div>
            <div className="product-price">$6/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>

        </div>
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Apple</div>
            <div className="product-price">$8/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>

        </div>
       </div>
      </div>
      <hr />
      <div className="product-category"><h2><b>Vegetables</b></h2>
      <div className="products">
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1578594640334-b71fbed2a406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdGF0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Potato</div>
            <div className="product-price">$2/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>

        </div>
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Tomato</div>
            <div className="product-price">$3/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>

        </div>
        <div className="product-card">
          <img
            src="https://images.unsplash.com/photo-1587334207407-deb137a955ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="not found"
            className="card-img"
          />
          <div className="product-description">
            <div className="product-name">Pea</div>
            <div className="product-price">$5/kg</div>
          </div>
          <div className="btn"><button>ADD TO CART</button></div>

        </div>
      </div>
      </div>
      <div className="footer">
        <h2>Vegstack Pvt. Ltd.</h2>
      <h4>copyright@reserved</h4>

      </div>
    </div>
  );
};

export default Home;
