import { StyledHeader } from './styles/Header.styled';
import  { StyledInfoText } from './styles/InfoText.styled'
import ProgressDots from './ProgressDots';

import { observer } from 'mobx-react';
import store from '../store/store';

function Header() {
    return (
        <StyledHeader>
            <div className="header-progress">
                <StyledInfoText>Your 12 week progress</StyledInfoText>
                <ProgressDots />
            </div>


            <div className="header-slider">
                <div className={'slider-button prev' + (store.currentWeek <= 1 ? ' disabled' : '') }
                    onClick={ e => store.setCurrentWeek(-1) }
                >
                    <img src="chevron-right.svg" alt="Left chevron"></img>
                </div>
                <span className="slider-title">Week {store.currentWeek}</span>
                <div className={'slider-button next' + (store.currentWeek >= store.maxWeek ? ' disabled' : '') }
                    onClick={ e => store.setCurrentWeek(1) }
                >
                    <img src="chevron-right.svg" alt="Right chevron"></img>
                </div>
            </div>


            <div className="header-options">
                <StyledInfoText>Select your protein options</StyledInfoText>
                <ul className="options-display">
                    <li className="options vegetables"><img src="carrot.svg" alt="Icon of a carrot"></img></li>
                    <li className="options cheese"><img src="cheese.svg" alt="Icon of a cheese"></img></li>
                    <li className="options meat"><img src="meat.svg" alt="Icon of a meat"></img></li>
                    <li className="options fish"><img src="fish.svg" alt="Icon of a fish"></img></li>
                    <li className="options chicken"><img src="chicken.svg" alt="Icon of a chicken"></img></li>
                </ul>
            </div>
        </StyledHeader>
    )
}

export default observer(Header);