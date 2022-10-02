import './scss/app.scss'
import Card from './scss/components/Card'
import Categories from './scss/components/Categories'
import Header from './scss/components/Header'
import Sort from './scss/components/Sort'

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <Card title="Мексиканская" price={395} />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
