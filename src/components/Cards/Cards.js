import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import styles from './Cards.module.css'
import cx from 'classnames'

const useStyles =  makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
      lastUpdated: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
      },
      title: {
          fontSize: 14
      }
}));

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    const classes = useStyles();

    if(!confirmed) {
        return 'Loading...';
    }
    return(
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Confirmed!
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                                />
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} className={styles.cardw}>
                    <Paper className={classes.paper}>
                        <Typography className={styles.secTitle} color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                                />
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>
                        <Typography className={styles.secTitle} color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                                />
                        </Typography>
                        <Typography color="textSecondary">
                            Stats
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs className={classes.lastUpdated}>
                    <Typography variant="body2" component="p">
                        Last Updated: <strong>{new Date(lastUpdate).toDateString()}</strong>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards