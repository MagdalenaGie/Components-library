import React from 'react'
import styled from 'styled-components';
import {ChartProps, BarProps} from "./Chart.types"

const StyledChartWrapper = styled.div`
    font-family: 'Montserrat';
    color: #fff;
    margin: 0 auto;
    padding: 0 30vw;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const StyledBarChartDiv = styled.div`
    position: relative;
    width: 100%;
    // height: auto;
    display: flex;
    align-items: center;
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
    margin: 10px 0;
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

const StyledGraphLegend = styled.span`
    position: absolute;
    margin-right: 10px;
    left: -50px;
    z-index: 9999;
`;

const StyletResultDiv = styled.div`
    margin-left: 30px;
    text-align: center;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledH1 = styled.h1`
    margin: 0;
`;

const StyledH2 = styled.h2`
    margin: 0;
`;

export const Chart: React.FC<ChartProps> = ({ ...props}) => {
    const possibleVotes = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    const prepareVotesMapEntries = (votes: Array<number>): Array<number> => {
        const lowestVote = Math.min(...votes);
        const highestVote = Math.max(...votes);
        const lowestVoteIndex = possibleVotes.indexOf(lowestVote);
        const highestVoteIndex = possibleVotes.indexOf(highestVote);
        if(highestVoteIndex - lowestVoteIndex > 1 ){
            return possibleVotes.slice(lowestVoteIndex, highestVoteIndex + 1);
        }else if( lowestVoteIndex === 0){
            return possibleVotes.slice(lowestVoteIndex, highestVoteIndex + 3);
        }else if( highestVoteIndex === possibleVotes.length - 1){
            return possibleVotes.slice(lowestVoteIndex - 3, highestVoteIndex + 1);
        }else{
            return possibleVotes.slice(lowestVoteIndex - 1, highestVoteIndex + 2);
        } 
    }

    const prepareMapWithEntries = (votes: Array<number>): Map<number, number> => {
        return new Map<number, number>(votes.map((vote) => [vote, 0]));
    }

    const countVotes = (votes: Array<number>, voteMap: Map<number, number>): Map<number, number> => {
        votes.forEach((vote) => {
            voteMap.set(vote, voteMap.get(vote)! + 1);
        });
        return voteMap;
    }

    const mapEntries = prepareVotesMapEntries(props.votes);
    const mapWithEntries = prepareMapWithEntries(mapEntries);
    const segregatedVotes = countVotes(props.votes, mapWithEntries);

    const maxVotes = Math.max(...segregatedVotes.values());

    let graphBars: JSX.Element[] = []

    segregatedVotes.forEach((value: number, key: number) => {
        let barLength = value / maxVotes * 100;
        graphBars.push(
            <StyledGraphBarBack>
                <StyledGraphBar width={barLength} value={key} numberOfVotes={value}>
                    <StyledGraphLegend>{key} sp</StyledGraphLegend>
                </StyledGraphBar>
            </StyledGraphBarBack>  
        );
    });

    let votingResult = props.votes.reduce((a, b) => a + b, 0) / props.votes.length;

    return (
        <StyledChartWrapper>   
            <StyledBarChartDiv>
                <StyledGraphBarsList>

                    {graphBars}

                </StyledGraphBarsList>
            </StyledBarChartDiv>
            <StyletResultDiv>
                <StyledH2>Voting result:</StyledH2>
                <StyledH1>{votingResult.toFixed(1)}</StyledH1>
            </StyletResultDiv>   
        </StyledChartWrapper>
    )
}