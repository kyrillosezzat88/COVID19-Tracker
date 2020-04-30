import styled from 'styled-components'
import {css} from 'styled-components'

export const Main = styled.div`
    background:#FAF9FA;
    height:100vh;
`;

export const Heading = styled.h1`
    color:red;
`;
export const Card = styled.div`
    color:red;
    height:150px;
    width:200px;
    background:#fff;
    margin:10px;
    box-shadow:${props => props.Infected ? '0 5px 2px 0 #7D7DF9' : props.Recovered ? '0 5px 2px 0 #21bf73' : '0 5px 2px 0 #fd5e53'};
    border-radius:10px;
    padding:15px;
`;
export const TitleCard = styled.h4`
    color:grey;
    font-size:14px;
    text-transform:capitalize;
    padding:0;
    margin:0;
`;
export const NumberCard = styled.h2`
    font-size:18px;
    color:${props => props.Death ? 'red' : props.Covered ? 'Green' : 'Black'};
    font-weight:bold;
`;

export const DateCard = styled.span`
    font-size:12px;
    color:Grey;
    padding:0;
    margin:0;
`;
export const Detail = styled.h6`
    font-weight:bold;
    font-size:13px;
    text-transform:capitalize;
    color:#000;
    margin:0;
    margin-top:5px
`;
export const CountryInput = styled.div`
    width:100%;
`;

export const Input = styled.div`
    width:250px;
    height:10px;
`
