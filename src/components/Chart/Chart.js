import React from 'react'
import { useState, useEffect } from 'react'
import {fetchDailyData} from '../../api'

import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = () => {
    const [dailyData, setDailyData] = useState ({})

    useEffect (() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchApi()
    }, [])

    const lineChart = (
        dailyData.length
        ? <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    labell: 'Infected',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)'
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    labell: 'Deaths',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.5)'
                }]
            }}
        />
        : null
    )

    return(
        <div className={styles.container}>
            {lineChart }
        </div>
    )
}

export default Chart