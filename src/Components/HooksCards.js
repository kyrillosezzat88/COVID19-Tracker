import React  , {useEffect , useState} from 'react';
import {Card , TitleCard , NumberCard , DateCard , Detail} from '../Styles/Styled-Components'
import { CovidContext } from '../ContextApi/CovidContext';
import {Grid ,Container} from '@material-ui/core'
import CountUp from 'react-countup'
import axios from 'axios'
const HooksCards = () => {
    const [CovidData , setCovidData] = useState([{
        confirmed: 0,
        recovered:0,
        deaths:0,
        LastUpdate:'',
    }]);
    useEffect(() => {
        // Get Covid Data and sotre it in State 
        if(CovidData.length === 1) {
            axios.get('https://covid19.mathdro.id/api')
            .then(async(res) => {
                await setCovidData({confirmed: res.data.confirmed.value ,recovered:res.data.recovered.value,deaths:res.data.deaths.value , LastUpdate:res.data.lastUpdate })
            }).catch(err => console.log({Error:err.message}));
        }
    })
        return (
            <Grid container spacing={1} direction='row' justify='center' alignItems='center' >
                <Grid item>
                    <Card Infected>
                        <TitleCard>Infected</TitleCard>
                        <NumberCard> <CountUp start={0} end={CovidData.confirmed} duration={3} separator=',' /> </NumberCard>
                        <DateCard>{new Date(CovidData.LastUpdate).toDateString()}</DateCard>
                        <Detail>Number of active cases of COVID-19</Detail>
                    </Card>
                </Grid>
                <Grid item>
                    <Card Recovered >
                        <TitleCard>Covered</TitleCard>
                        <NumberCard Covered>{CovidData.recovered}</NumberCard>
                        <DateCard>Real Date</DateCard>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <TitleCard>Deaths</TitleCard>
                        <NumberCard Death>{CovidData.deaths}</NumberCard>
                        <DateCard>Real Date</DateCard>
                    </Card>
                </Grid>
            </Grid>
        )

}
export default HooksCards;