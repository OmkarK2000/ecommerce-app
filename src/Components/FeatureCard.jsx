import { Link } from "react-router-dom"


const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            cards.map((card) => {
              return (
                <Link to={`/categories/${card}`} className="p-4 md:w-1/4 cursor-pointer" key={card} >
                  <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col uppercase">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">{card}</h2>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FeatureCard