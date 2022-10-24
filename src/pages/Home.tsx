import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import Sort from '../components/Sort'

import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter)
  const sortType = sort.sortProperty

  const onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index))
  }

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      // @ts-ignore
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

  const pizzas = items.map((item: any) => (
    <Link key={item.id} to={`/pizza/${item.id}`}>
      <Card {...item} />
    </Link>
  ))
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
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
