import "./Home.css";
import LogoSvg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <div className='home-container'>
        <div className='home-heading-container'>
          <h1 className='home-heading'>SQL Studio - Master Your Query{<br />}</h1>
          <h2 className='black'>
            Select * From World Where "Everyone" LIKE %'ATLAN'
          </h2>
          <h2 className='blue'>
            Crunch Your SQL Queries
          </h2>
          
          <Link to='/editor'>
            <button className='button'>Run  SQL Query Here</button>
          </Link>
        </div>
      </div>
      <footer className='footer'>
        <p>
          Developed with &lt;3 by{" "}
          <a
            href='https://atlan.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='atlan-link'
          >
            <img src={LogoSvg} alt='atlan' className='footer-logo' />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
