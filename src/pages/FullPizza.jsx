import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function FullPizza() {
  const navigate = useNavigate()
  const [pizza, setPizza] = useState()
  const { id } = useParams()

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://633c28faf11701a65f7063c4.mockapi.io/items/' + id
        )
        setPizza(data)
      } catch (error) {
        alert('Ошибка при получении пиццы')
        navigate('/')
      }
    }
    fetchPizza()
  }, [])

  if (!pizza) {
    return 'Загрузка...'
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title} </h2>
      <h4> {pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza
