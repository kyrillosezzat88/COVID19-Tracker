import React , {useEffect , useState} from 'react';
import {CountryInput , Input} from '../Styles/Styled-Components'
import {Grid , FormControl , InputLabel , Select ,MenuItem} from '@material-ui/core'
import {FetchCountry} from '../API/DataApi'
const  CountryPicker = ({HandelCountry}) => {
        const [Countries , setCountries] = useState([ ]);
        useEffect(() => {
            const FetchApi = async () => {
                setCountries(await FetchCountry());
            }
            FetchApi();
        },[]);
        const handelChange = async (e) => {
            await HandelCountry(e.target.value);
        }
        return(
            <Grid container justify='center'>
                <Grid item>
                    <CountryInput>
                        <FormControl>
                            <Input><InputLabel id="demo-simple-select-label">Country</InputLabel></Input>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue='All'
                                onChange={handelChange}
                                >
                                {
                                    Countries.map((countrie ,i) => (
                                        <MenuItem key={i} value={countrie}>{countrie}</MenuItem>
                                    ))
                                }
                                </Select>
                        </FormControl>
                    </CountryInput>
                </Grid>
            </Grid>
        )
    }
export default CountryPicker