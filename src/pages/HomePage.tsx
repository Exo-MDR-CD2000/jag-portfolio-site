import React from "react";
import PageTitle from "../components/PageTitle";


const HomePage: React.FC = () => {
  return (
    <>
    <PageTitle title="Jose | Home" />
    <div className="container">
      <h1>Home Page</h1>
        <p>Is this working?</p>
    </div>
    </>
  );
};

export default HomePage;