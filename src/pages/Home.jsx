import { useEffect, useState } from 'react'

import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from '../components/Categories'
import Sort from '../components/Sort'

function Home() {
  const [items, setItems] = useState([])
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://633c28faf11701a65f7063c4.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isloading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Card key={item.id} {...item} />)}
      </div>
    </>
  )
}

export default Home
