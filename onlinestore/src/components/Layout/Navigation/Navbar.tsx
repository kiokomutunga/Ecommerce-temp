import { Link } from "react-router-dom";
function Navbar (){

  return(
    <header>
      <div>
        <div>
          {/*logo*/}
          <Link to="/">
            <img
              src="/logo.png"
              alt = "store logo"
              className=""
            />

            <span>
              Custom <span>Kicks</span>
            </span>
          </Link>
        </div>
      </div>

    </header>
  );

}

export default Navbar;