import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid rgb(27, 218, 167);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
    &:after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-left: 4px solid #7700ff;
        border-bottom: 4px solid transparent;
        animation: ${rotation} 0.5s linear infinite reverse;
      }
    
`

export const Loader = () => {
    return(
        <StyledLoader data-testid="loader"></StyledLoader>
    )
}