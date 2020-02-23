import React from 'react'
import Article from './article'


export default function Usercontent() {
    let articles = []
    for (let i = 0; i < 25; i++) {
        articles.push(<Article key={i}></Article>)
    }


    return (
        <div>
            {articles}
        </div>
    )
}