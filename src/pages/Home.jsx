import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import Sort from '../components/Sort'

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

import { SearchContext } from '../App'

function Home() {
  const dispatch = useDispatch()

  const { items, status } = useSelector((state) => state.pizza)
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter)
  const sortType = sort.sortProperty

  const { searchValue } = useContext(SearchContext)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        currentPage,
        category,
        sortBy,
        order,
        search,
      })
    )

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizzas()
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
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить пиццы. Повторите попытку позднее.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeleton : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
