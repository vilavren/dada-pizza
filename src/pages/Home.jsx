import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import Sort from '../components/Sort'

import { setCategoryId } from '../redux/slices/filterSlice'

import { SearchContext } from '../App'

function Home() {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector((state) => state.filter)
  const sortType = sort.sortProperty

  const { searchValue } = useContext(SearchContext)

  const [items, setItems] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangeCategory = (id) => {
    console.log(id)
    dispatch(setCategoryId(id))
  }

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    axios
      .get(
        `https://633c28faf11701a65f7063c4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items.map((item) => <Card key={item.id} {...item} />)
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => onChangeCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isloading ? skeleton : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  )
}

export default Home
