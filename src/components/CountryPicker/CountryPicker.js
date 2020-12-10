import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { useState, useEffect } from 'react'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const CountryPicker = () => {
    const [fetchedCountries, setCountries] = useState ([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }

        fetchAPI()
    }, [setCountries])

    console.log('Countries', fetchedCountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker