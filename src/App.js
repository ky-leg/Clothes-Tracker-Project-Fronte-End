import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <h1>Clothes Tracker!</h1>
      <nav 
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
        <Link to="/brands">Brands</Link> |{" "}
        <Link to="/articles">Articles</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
