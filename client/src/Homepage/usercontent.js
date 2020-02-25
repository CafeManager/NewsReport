import React, { useState, useEffect } from 'react'
import Article from './Article'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
// import { useState } from 'react'

const useStyles = makeStyles({
    centerDivStyles: {
        display: 'flex',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyles: {
        display: 'flex',
        justifyContent: 'center',
    }

})

export default () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([])

    useEffect(() => {
        let preArticles = []
        for (let i = 0; i < 25; i++) {

            preArticles.push(i)
        }
        setArticles(preArticles)
    }, [])

    return (
        <div>
            {/* {ArticleList} */}
            {articles.map(article => <Article num={article} key={Math.random()} />)}
            <div className={classes.centerDivStyles}>
                <Button classes={{ root: classes.buttonStyles }} onClick={() => setArticles([...articles, articles.length + 1])}> Add Article</Button>
            </div>
        </div>
    )
}
