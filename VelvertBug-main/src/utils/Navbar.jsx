import "./Navbar.css";
import { Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav class="navbar  ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">TheVelVetBug</Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav  mb-1  " id="navbaroptions"> 
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Upload New Card</a>
        </li> */}
        
        <li class="nav-item dropdown">
        <div class="dropdown">
            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </button>
            <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/Wedding">Wedding</Link></li>
                <li><Link class="dropdown-item" to="/SaveTheDate">Save the date</Link></li>
                <li><Link class="dropdown-item" to="/Roka">Roka & engagement ceremony</Link></li>
                <li><Link class="dropdown-item" to="/">Countdown</Link></li>
                <li><Link class="dropdown-item" to="/Lovestory">Lovestory based wedding</Link></li>
                <li><Link class="dropdown-item" to="/Housewarming">Housewarming Ceremony</Link></li>
                <li><Link class="dropdown-item" to="/BabyShower">Baby Shower Invitation</Link></li>
                <li><Link class="dropdown-item" to="/BabyName">Baby Name Announcement</Link></li>
                <li><Link class="dropdown-item" to="/Birthday">Birthday</Link></li>
                <li><Link class="dropdown-item" to="/Anniversary">Anniversary</Link></li>
                <li><Link class="dropdown-item" to="/Dhoti">Dhoti Ceremony</Link></li>
                <li><Link class="dropdown-item" to="/HalfSaree">Half Saree Ceremony</Link></li>
            </ul>
            </div>
        </li>
      </ul>
      {/* <form class="d-flex " role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}