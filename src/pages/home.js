import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="message">
        <h2>
          If not connected: sign in to be able to save your graphs on your
          account
        </h2>
      </div>
      <h2 className="text">
        Here some exemples to see what you can do with Charter
      </h2>
      <div className="containerExemple">
        <img src="https://picsum.photos/200" alt="ex1" />
        <img src="https://picsum.photos/200" alt="ex2" />
        <img src="https://picsum.photos/200" alt="ex3" />
      </div>
    </>
  );
};

export default Home;
