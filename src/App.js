
import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import { fetchData } from './api'
import styles from './App.module.css'
import './App.css';
import logo from './imgs/covid-logo-fw.png'; // with import


class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount(){
    const data = await fetchData()
    this.setState({
      data
    })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    console.log('Country specific', fetchedData)
    // fetchAPI
    this.setState({data: fetchedData, country: country})
  }

  render(){
    const {data, country} = this.state

    return (
      <div className={styles.container}>
        <img src={logo} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Cards data={this.state.data}/>
        <br />
        <Chart data={data} country={country}/>
      
    </div>
  );
}
}

export default App;
