import { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  const onclickCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onclickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
