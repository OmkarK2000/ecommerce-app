import { Link } from "react-router-dom"

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: "Products",
    path: "/products"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            < span className="ml-3 text-xl">Flash Store</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation)=>{
              return <Link to={navigation.path} key={navigation.name} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
            })
          }
        </nav>
        <button  className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"><Link to={'/cart'}>Go To Cart</Link>
        </button>
    </div>
      </header >
    </div >
  )
}

export default Header