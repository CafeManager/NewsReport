import React from 'react';
import {Card, Grid} from '@material-ui/core'
import { createStyles } from '@material-ui/styles'

const useStyles = createStyles(
    
)
export default function Articles() {
    return(
        <Grid container justify="center">
            <Grid item>
                <Card>BREAKING NEWS: WALLET BURNS IN RIVER</Card>
            </Grid>
        </Grid>
    )
}