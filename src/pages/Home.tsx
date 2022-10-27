import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import Sort from '../components/Sort'
import { selectFilter } from '../redux/filter/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { selectPizzaData } from '../redux/pizza/selectors'
import { useAppDispatch } from '../redux/store'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter)
  const sortType = sort.sortProperty

  const onChangeCategory = useCallback((index: number) => {
    dispatch(setCategoryId(index))
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        currentPage: String(currentPage),
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

  const pizzas = items.map((item: any) => <Card key={item.id} {...item} />)
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
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
