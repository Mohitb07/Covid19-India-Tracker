import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';

import Card from './Card'
import Search from './Search'
import './App.css'
import Table from './Table';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      daily_confirmed_cases : 0,
      daily_recovered_cases : 0,
      daily_deceased_cases : 0,
      date: null,
      total_confirmed : 0,
      total_recovered : 0,
      total_deceased : 0
    }
  }

  async componentDidMount(){
    const res = await axios.get('https://api.covid19india.org/data.json')
    console.log(res.data.cases_time_series)
    // const dailyCases = res.data.cases_time_series.reverse()[0].dailyconfirmed
    const dailyConfirmedCases  = res.data.cases_time_series.reverse()[0].dailyconfirmed
    const dailyRecoveredCases = res.data.cases_time_series[0].dailyrecovered

    const dailyDeceasedCases = res.data.cases_time_series[0].dailydeceased
    const date = res.data.cases_time_series[0].date

    const totalConfirmed = res.data.cases_time_series[0].totalconfirmed
    const totalRecovered = res.data.cases_time_series[0].totalrecovered
    const totalDeceased = res.data.cases_time_series[0].totaldeceased
    this.setState({
      daily_confirmed_cases:dailyConfirmedCases,
      daily_recovered_cases : dailyRecoveredCases,
      daily_deceased_cases : dailyDeceasedCases,
      date : date,
      total_confirmed : totalConfirmed,
      total_recovered:totalRecovered,
      total_deceased : totalDeceased,
    })
  }

  render() {
    const { total_confirmed, total_recovered, total_deceased } = this.state;
    const active = total_confirmed - total_recovered - total_deceased
    console.log(active)
    return (
      <div style={{background:'#161625', height:'100vh'}}>
      <Navbar/>
      <div style={{display:'flex', justifyContent:'center',}}>
        <Card totalConfirmedCases={this.state.total_confirmed} color="red" date={this.state.date} dailyConfirmedCases={this.state.daily_confirmed_cases}/>

        <Card activeCase={active} color="#007BFF" date={this.state.date}/>

        <Card totalRecoveredCases={this.state.total_recovered} color="#80cf0a" date={this.state.date} dailyRecoveredCases={this.state.daily_recovered_cases}/>

        <Card totalDeceasedCases={this.state.total_deceased} color="#505660" date={this.state.date} dailyDeceasedCases={this.state.daily_deceased_cases}/>
      </div>
      <div className="table">
        {/* <Table/> */}
      </div>
    </div>
    )
  }
}

export default App
