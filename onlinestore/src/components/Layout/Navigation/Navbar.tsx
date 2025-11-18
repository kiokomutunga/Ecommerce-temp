import { Link } from "react-router-dom";

function Navbar (){

const navigation = [
  {name: 'Home' , href: '/'},
  {name: 'Shop', href: '/shop',
  dropdown: [
    {name: 'All Products', href: '/shop/all'},
    {name: 'New Arrivals', href: '/shop/new'},

  ]
  },
{
  name: 'categories',
  href: '/categories',
  dropdown: [
    {name:'Tables', href: '/category/tables' },
    {name: 'Bedroom', href:'/category/bedroom'},
    {name: 'Office', href: '/category/office'},
    {name: 'Storage', href: '/category/storage'},
    
  ]

},

{name: 'Offers', href:'/offers'},

{name: 'Contact', href: '/contact'},

]


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

          <nav>
            {
              navigation.map((item) =>(
                <div key={item.name}>

                  {item.dropdown?(
                    <>
                    <Link to={item.href}
                    >
                      {item.name}
                    </Link>

                    <div>
                      {item.dropdown.map((subItem) =>(
                        <Link
                        key={subItem.name}
                        to={subItem.href}>

                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                    
                    </>

                  ):(
                    <Link to={item.href}>
                      {item.name}
                    </Link>
                  )}

                </div>
              ))
            }
          </nav>


        </div>
      </div>

    </header>
  );

}

export default Navbar;