import { FC } from 'react'
import { RadioAvatarsProps } from "./RadioAvatar.types"
import './styles.css'
import RadioAvatar from './RadioAvatar';
import styled from 'styled-components';

const FlexList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`


const  RadioAvatars: FC<RadioAvatarsProps> = ({avatarIdValue, avatarIdSetter, ...props}) => {

    // const [selectedAvatarId, setSelectedAvatarId] = useState(-1)

    const setAvatarId = (event: React.MouseEvent<HTMLButtonElement>, value: number) => {
        event.preventDefault();
        avatarIdSetter(value);
        console.log('selectedAvatarId: ', avatarIdValue)
    }

    let radioButtons: JSX.Element[] = [];

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].forEach((el) => {
        radioButtons.push(<RadioAvatar id={el.toString()} avatarId={el} key={el} selected={avatarIdValue===el} onClick={(e) => setAvatarId(e, el)}/>)
    })

    return (
        <FlexList>
            {radioButtons}
        </FlexList>
        
    );
}

export default RadioAvatars;