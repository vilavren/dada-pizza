import './scss/app.scss'
import Card from './components/Card'
import Categories from './components/Categories'
import Header from './components/Header'
import Sort from './components/Sort'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
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
