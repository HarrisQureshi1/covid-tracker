import React from 'react'
import { useState, useEffect } from 'react'
import {fetchDailyData} from '../../api'

import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState ({})

    useEffect (() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchApi()
    }, [])

    // Thousands: comma separator
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join(', ');
    }

    console.log('Confirmed', confirmed)
    const data1 = '#009edb'
    const data2 = '#f26531'
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const lineChart = (
        dailyData.length
        ? <Line className={styles.chartBG}
            data={{
                labels: dailyData.map(({ date }) => {
                    const conv = new Date(date)
                    return conv.getDate()+' '+months[conv.getMonth()]
                }),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    fill: false,
                    backgroundColor: data1,
                    borderColor: data1+'33'
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    fill: false,
                    backgroundColor: data2,
                    borderColor: data2+'33',
                }]
            }}
            options = {{
                title: {
					display: true,
					text: 'Coronavirus Point Data'
				},
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                callback: function(label, index, labels) {
                                    return (label/1000000).toString().replace(/\B(?=(\d{6})+(?!\d))/g, ",")+'m';
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: '(million)'
                            },
                            gridLines: {
                                drawBorder: false,
                                color: '#eee'
                            },
                        }
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: '(showing lastest 20)'
                            },
                            gridLines: {
                                drawBorder: false,
                                color: '#eee'
                            },
                            ticks: {
                                major: {
                                    fontStyle: 'bold',
                                    fontColor: '#FF0000'
                                }
                            }
                        }
                    ]
                },
                tooltips: {
                    callbacks: {
                        // labelColor: function(tooltipItem, chart) {
                        //     return {
                        //         borderColor: {data1},
                        //         backgroundColor: {data1}
                        //     };
                        // },
                        labelTextColor: function(tooltipItem, chart) {
                            return '#ccc';
                        }
                    }
                }
            }}
        />
        : null
    )

    const barChart = (
        confirmed
        ?   <Bar 
                data= {{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{ 
                        data: [confirmed.value, recovered.value, deaths.value],
                        lineTension: 0.2,
                        fill: false,
                        borderWidth: 4,
                        pointStyle: 'crossRot',
                        pointRadius: 10,
                        hoverBackgroundColor: 'rgba(50, 50, 50, 0.9)',
                        hoverBorderColor: '#000',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    }],
                }}
                options = {{
                    title: {
                        display: true,
                        text: `Coronavirus Point Data for ${country}`
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    callback: function(label, index, labels) {
                                        return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    }
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'number of people affected'
                                }
                            }
                        ]
                    }
                }}
        />
        : null

    )

    return(
        <div className={styles.container}>
            {country !== 'global'
            ? barChart
            : lineChart}
        </div>
    )
}

export default Chart