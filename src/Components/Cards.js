import React , {Component} from 'react';
import {Card , TitleCard , NumberCard , DateCard , Detail} from '../Styles/Styled-Components'
import {Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import {FetchData , FetchSpecific} from '../API/DataApi'
class Cards extends Component {
    state ={
        confirmed:null,
        deaths:null,
        recovered:null,
        lastUpdate:null
    }
    async componentDidMount(){
            const Data  = await FetchData();
            this.setState({
                confirmed:Data.confirmed.value,
                deaths:Data.deaths.value,
                recovered:Data.recovered.value,
                lastUpdate:Data.lastUpdate
            });
    }
    componentWillReceiveProps() {
        setTimeout(async() => {
            const CountryData = await FetchSpecific(this.props.Country);
            console.log(CountryData[0].confirmed.value)
            this.setState({
                confirmed:CountryData[0].confirmed.value,
                deaths:CountryData[0].deaths.value,
                recovered:CountryData[0].recovered.value,
                lastUpdate:CountryData[0].lastUpdate
            });
        }, 100);
    }
    render(){
        return (
            <Grid container spacing={1} direction='row' justify='center' alignItems='center' >
                <Grid item>
                    <Card Infected>
                        <TitleCard>Infected</TitleCard>
                        <NumberCard> <CountUp start={0} end={this.state.confirmed} duration={3} separator=',' /> </NumberCard>
                        <DateCard>{new Date(this.state.lastUpdate).toDateString()}</DateCard>
                        <Detail>Number of active cases of COVID-19</Detail>
                    </Card>
                </Grid>
                <Grid item>
                    <Card Recovered >
                        <TitleCard>Recovered</TitleCard>
                        <NumberCard> <CountUp start={0} end={this.state.recovered} duration={3} separator=',' /> </NumberCard>
                        <DateCard>{new Date(this.state.lastUpdate).toDateString()}</DateCard>
                        <Detail>Number of Recovered cases of COVID-19</Detail>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <TitleCard>Deaths</TitleCard>
                        <NumberCard> <CountUp start={0} end={this.state.deaths} duration={3} separator=',' /> </NumberCard>
                        <DateCard>{new Date(this.state.lastUpdate).toDateString()}</DateCard>
                        <Detail>Number of Deaths cases of COVID-19</Detail>
                    </Card>
                </Grid>
            </Grid>
        )
    }
    }
export default Cards;