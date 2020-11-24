import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdated}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    console.log("props", confirmed)
    return(
        <div >
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} spacing={3}>
                    <CardContent className={styles.container}>
                        <Typography className={styles.secTitle} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {confirmed.value}
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent className={styles.container}>
                        <Typography className={styles.secTitle} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Stats
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent className={styles.container}>
                        <Typography className={styles.secTitle} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Stats
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards