import { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'

const Categories = () => {

  const [categoris, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      // console.log(data)
      setCategories(data)
    }
    fetchCategories()
  }, [])


  return (
    <div>
      <FeatureCard cards={categoris} />
    </div>
  )
}

export default Categories