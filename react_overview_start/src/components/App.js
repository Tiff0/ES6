import React from 'react'
import ArticleList from './ArticleList/index'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
 
function App(){
    return (
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-3">Article Names</h1>
            </div>
            <ArticleList articles = {articles} />
        </div>
    )
}

export default App