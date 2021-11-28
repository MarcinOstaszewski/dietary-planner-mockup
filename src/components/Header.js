import { StyledHeader } from './styles/Header.styled';
import  { StyledInfoText } from './styles/InfoText.styled'
import ProgressDots from './ProgressDots';

import { observer } from 'mobx-react';
import store from '../store/store';

function Header() {

    const toggleProteinOptions = e => {
        const li = e.currentTarget;
        li.classList[li.classList.contains('active') ? 'remove' : 'add']('active');
    }

    const createProteinOptions = () => {
        return (
            Object.keys(store.proteinOptions).map( opt => {
                let cls = store.proteinOptions[opt] ? ' active' : '';
                return (
                    <li className={`options ${opt + cls}`} key={`options ${opt}`}
                        onClick={toggleProteinOptions}
                    >
                        <img src={`${opt}.svg`} alt={`${opt} icon`}></img>
                    </li>
                )}
            )
        );
    }

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
                    {createProteinOptions()}
                </ul>
            </div>
        </StyledHeader>
    )
}

export default observer(Header);