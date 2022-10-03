import { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState()

  const onclickCategory = () =>

  return (
    <div className="categories">
      <ul>
        <li className={activeIndex ? 'active' : ''}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
