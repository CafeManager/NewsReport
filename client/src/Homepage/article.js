import React from 'react';
import { Card, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export default ({ num }) => {


    const useStyles = makeStyles({
        cardStyles: {
            margin: '3rem',
            height: '15vh',
            width: '50vw',
            position: 'relative'
        },
        AvatarStyles: {
            display: 'inline-block',
            verticalAlign: 'top',
            height: '30%',
            width: '30%'
        },
        titleContainerStyles: {
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'center',
            height: '30%',
            width: '69%'
        },
        contentContainerStyles: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70%',
            textAlign: 'center',
    
        },
        contentBundleStyles: {
            display: 'flex',
            alignItems: 'center'
        }
    })

    const classes = useStyles();
    return (
        <Grid container justify="center">
            <Grid item>
                <Card classes={{ root: classes.cardStyles }}>
                    <Avatar classes={{ root: classes.AvatarStyles }} src="/images/cowboy.jpg" />
                    <div className={classes.titleContainerStyles}>


                        <h1> NOTICE ME </h1>
                    </div>
                    <div className={classes.contentContainerStyles}>
                        <div className={classes.contentBundleStyles}>
                            BREAKING NEWS: WALLET BURNS IN RIVER {num}
                            <br />dsadasdasddas
                    <br /> sadadsadasd</div>
                    </div>
                </Card>

            </Grid>
        </Grid>
    )
}