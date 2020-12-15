import React from 'react'
import { NativeSelect, FormControl, Grid, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const useStyles =  makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
      },

}));

const CountryPicker = ({ handleCountryChange }) => {
    const classes = useStyles();

    const [fetchedCountries, setCountries] = useState ([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }

        fetchAPI()
    }, [setCountries])

    console.log('Countries', fetchedCountries)
    return(
        <Grid container spacing={3} className={styles.mb24}>
            <Grid item xs={12} md={8} ></Grid>
            <Grid item xs={12} md={4} >
                <FormControl className={(styles.formControl, classes.root)}>
                    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="global">Global</option>
                        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default CountryPicker