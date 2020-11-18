/* globals fetch */
import 'tachyons'
import './App.css'
import { useEffect, useState } from 'react'
import TriviaCategory from './components/TriviaCategory'

function App () {
  const [triviaCat, setTriviaCat] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        return setTriviaCat(data.trivia_categories)
      })
  }, [])

  if (selectedCategory) {
    return (
      <TriviaCategory
        category={selectedCategory}
        clearSelectedCategory={() => setSelectedCategory(null)}
      />
    )
  }
  return (
    <div className='mw7 center pa2'>
      <h2>Trivia Categories</h2>
      <ul>
        {triviaCat.map((category) => (
          <li key={category.id}>
            <div className='f4 w5'>
              <button
                onClick={() => setSelectedCategory(category)}
                className='pl0 bw0 bg-white underline pointer blue'
              >
                {category.name}
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
