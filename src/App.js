import React,{Component} from 'react';
import Cards from './Components/Cards';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import CountryPicker from './Components/CountryPicker';
import Chart from './Components/Chart';
import {Main , CovImg} from './Styles/Styled-Components'
import {FetchSpecific} from './API/DataApi';
import CovidImg from './images/covid.png' 
class App extends Component{
  state={
    SelectedCountry:null,
    specificCountry:null
  }
  //function to handel Country 
  HandelCountry = async (Country) => {
    await this.setState({SelectedCountry:Country});
    console.log(this.state.SelectedCountry)
  }
  // async componentDidMount(){
  //   if(this.state.SelectedCountry){
  //     const CDATA = await FetchSpecific(this.state.SelectedCountry);
  //     console.log(CDATA);
  //   } else{
  //       console.log('null');
  //   }
      
  // }
  render(){
    return (
      <Main>
          <Container >
            <Grid container direction='column' justify='center' alignItems='center' >
              <CovImg><img src={CovidImg} alt=""/></CovImg>
              <Cards Country={this.state.SelectedCountry} />
              <CountryPicker HandelCountry={this.HandelCountry} Country={this.state.SelectedCountry} />
              <Chart/>
            </Grid>
          </Container>
      </Main>
    );
  }
}

export default App;
