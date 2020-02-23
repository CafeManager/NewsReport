import React from 'react';
import { Card, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export default function Article() {

    const useStyles = makeStyles({
        cardStyles: {
            padding: '10rem',
            margin: '3rem',
            position: 'relative'
        },
        AvatarStyles: {
            position: 'absolute',
            top: '0%',
            left: '0%',
            height: '30%',
            width: '30%'
        }
    })

    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item>
                <Card classes={{ root: classes.cardStyles }}>
                    <Avatar classes={{ root: classes.AvatarStyles }} src="/images/cowboy.jpg" />
                    BREAKING NEWS: WALLET BURNS IN RIVER</Card>
            </Grid>
        </Grid>
    )
}