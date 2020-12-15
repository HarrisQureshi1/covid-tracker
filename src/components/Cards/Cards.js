
import React from 'react'
import { Typography, Grid } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon'
import Alarm from '@material-ui/icons/Alarm';
import AlarmOff from '@material-ui/icons/AlarmOff';
import AlarmAdd from '@material-ui/icons/AlarmAdd';

import CountUp from 'react-countup'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
        fontSize: 14,
        color: '#fff'
    },
    cardIcon: {
        fontSize: 40,
        color: '#fff'
    }
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    const classes = useStyles();

    if(!confirmed) {
        return 'Loading...';
    }
    return(
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper className={cx(classes.paper, styles.confirmed)} >
                        <Grid container direction="row" alignItems="center" justify="space-between">
                            
                            <Grid item >
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
                            </Grid>
                            <Grid item>
                                <Alarm className={classes.cardIcon}/>
                            </Grid>
                        </Grid>
                        
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Paper className={cx(classes.paper, styles.recovered)}>
                        <Grid container direction="row" alignItems="center" justify="space-between">
                            
                            <Grid item >
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
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
                            </Grid>
                            <Grid item>
                                <AlarmAdd className={classes.cardIcon}/>
                            </Grid>
                        </Grid>
                    </Paper>
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={cx(classes.paper, styles.deaths)}>
                        <Grid container direction="row" alignItems="center" justify="space-between">
                            
                            <Grid item >
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
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
                            </Grid>
                            <Grid item>
                                <AlarmOff className={classes.cardIcon}/>
                            </Grid>
                        </Grid>
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