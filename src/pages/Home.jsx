import React  from "react";


import { Link} from 'react-router-dom'

const Home = () => {
  return <div>
   <h1> This is Home Page</h1>
   <Link to="/Products"> Check out Products</Link>
  </div>;
};

export default Home;
