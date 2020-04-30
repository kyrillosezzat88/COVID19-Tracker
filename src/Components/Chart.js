import React, {useEffect , useState} from 'react'
import {FetchDaily , FetchSpecific} from '../API/DataApi';
import {Line , Bar} from 'react-chartjs-2';
import {Grid } from '@material-ui/core';
const Chart = ({Country}) =>  {
    const [DailyData , setDailyData ] = useState({});
    const [DataofCountry , setDataOfCountry] = useState([]);
    useEffect(() =>{
        const FetchApi = async () => {
            const Data = await FetchDaily();
            setDailyData(Data.data);
        }
        FetchApi();
    },[]);
    // const FetchCountryData = async () => {
    //     if(Country){
    //         // const data = await FetchSpecific(Country);
    //         console.log(Country);
    //     }else{
    //         console.log('null value')
    //     }
    // }
    const LineChart = (
        DailyData.length ? (
            <Line 
            data={{
                labels: DailyData.map(({reportDate}) => reportDate),
                datasets:[{
                    data: DailyData.map(({confirmed}) => confirmed.total ),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                } ,{
                    data: DailyData.map(({deaths}) => deaths.total ),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }]
            }}
        />
        ) : null
    )
    // const BarChart = () => {
    //     Country ? (
    //         <Bar 
    //             data={{
    //                 labels:['Infected' , 'Recovered' , 'Deaths'],
    //                 datasets:[{
    //                     label:'People',
    //                     backgroundColor:[
    //                         'rgba(0 , 0 , 255 , 0.5)',
    //                         'rgba(0,255,0,0.5)',
    //                         'rgba(255,0,0,0.5)'
    //                     ]
    //                 }]
    //             }}
    //             options={{
    //                 legend:{display:false},
    //                 title:{display:true ,text:`Current State in ${Country}`}

    //             }}
    //         />
    //     ) : null
    // }
    return (
        <Grid container spacing={1} direction='row' justify='center' alignItems='center'>
            <Grid item xs={8}>
                {LineChart}
            </Grid>
        </Grid>
    )
}
export default Chart;