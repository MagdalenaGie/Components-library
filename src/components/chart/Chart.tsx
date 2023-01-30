import React from 'react'
import styled from 'styled-components';
import {ChartProps, BarProps} from "./Chart.types"
import './Chart.css';

const StyledChartWrapper = styled.div`
    font-family: 'Montserrat';
    color: #fff;
    margin: 0 auto;
    padding: 50px;
    max-width: 1200px;
`;

const StyledBarChartDiv = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
`;

const StyledGraphBarsList = styled.ul`
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: calc(96%);
    left: 4%;
`;

const StyledGraphBarBack = styled.span`
    border-radius: 2px;
    background: #E0F2FF17;
    margin-bottom: 10px;
    display: block;
`;

const StyledGraphBar = styled.li<BarProps>`
    background: rgb(106,149,0);
    background: linear-gradient(90deg, rgba(106,149,0,1) 5%, rgba(32,144,32,1) 27%, rgba(24,160,160,1) 68%);
    -webkit-transition: all 1s ease-out;
    -moz-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    transition: all 1s ease-out;
    border-radius: 2px;
    cursor: pointer;
    margin-bottom: 10px;
    position: relative;
    z-index: 9999;
    display: block;
    height: 20px;
    width: ${props => props.width}%;
    &:hover {
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        background: rgb(136,191,0);
        background: linear-gradient(90deg, rgba(136,191,0,1) 5%, rgba(41,175,41,1) 27%, rgba(30,194,194,1) 68%);
    }
    &:last-child {
        margin-bottom: 0;
    }
    &:after {
        position: absolute;
        content: "${props => props.numberOfVotes + " votes"}";
        display: none;
        font-size: 12px;
        border-radius: 2px;
        color: #fff;
        line-height: 20px;
        height: 20px;
        width: 100px;
        padding: 0 10px;
        margin-left: 5px;
        left: 100%;
        top: 0;
    }
    &:hover:after {
        display: block;
    }
`;

export const Chart: React.FC<ChartProps> = ({ ...props}) => {

    let segregatedVotes= new Map<number, number>();

    props.votes.sort();

    props.votes.forEach((vote) => {
        if (segregatedVotes.has(vote)) {
            segregatedVotes.set(vote, segregatedVotes.get(vote)! + 1);
        } else {
            segregatedVotes.set(vote, 1);
        }
    });

    let graphBars: JSX.Element[] = []

    segregatedVotes.forEach((value: number, key: number) => {
        let barLength = value / props.votes.length * 100;
        graphBars.push(
            <StyledGraphBarBack>
                <StyledGraphBar width={barLength} value={key} numberOfVotes={value}>
                    <span className="graph-legend">{key} sp</span>
                </StyledGraphBar>
            </StyledGraphBarBack>  
        );
    });

    return (
        <StyledChartWrapper>   
            <h2>Voting result</h2>
            <StyledBarChartDiv>
                <StyledGraphBarsList>

                    {graphBars}

                </StyledGraphBarsList>
            </StyledBarChartDiv>
        </StyledChartWrapper>
    )
}