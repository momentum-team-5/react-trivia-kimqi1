/* globals fetch */
import 'tachyons'
import './App.css'
import { useEffect, useState } from 'react'

function App () {
  const [triviaCat, setTriviaCat] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => setTriviaCat(data.trivia_categories))
  }, [])

  return (
    <div className='mw7 center pa2'>
      <ul>
        {triviaCat.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
