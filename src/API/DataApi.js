import axios from 'axios'


const url = 'https://covid19.mathdro.id/api';


// All Data 
export const FetchData = async () => {
    try{
        const {data : {confirmed , recovered , deaths,lastUpdate}} = await axios.get(`${url}`);
        return {confirmed,recovered,deaths,lastUpdate};
    }catch(err){
        console.log({Error:err.message})
    }
}

// Countries Data 
export const FetchCountry = async () => {
    try{
        let AllCountries = [ ] ;
        await axios.get(`${url}/countries`).then(res => res.data.countries.map(country => AllCountries=[...AllCountries , country.name]));
        return AllCountries;
    } catch(err){
        console.log({FetchCountryErr: err.message});
    }
}

// Daily Data 
export const FetchDaily = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        return {data};
    } catch(err) {
        console.log({FetchDailyErr:err.message});
    }
}


//Fetch Data of Specifc Country 
export const FetchSpecific = async (country) => {
    try{
        var data;
        await axios.get(`${url}/countries/${country}`).then(res => data =[res.data]);
        return data;
    }catch(err){
        console.log({FetchSpecificErr:err.message});
    }
}