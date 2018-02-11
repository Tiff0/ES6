import React from 'react'
import Article from './Article'
import articles from '../fixtures'

function App(){
    return (
        <div>
            <h1>Article Names</h1>
            <Article article = {articles[0]} />
        </div>
    )
}

export default App