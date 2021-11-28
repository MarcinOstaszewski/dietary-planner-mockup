import { StyledProgressDots } from './styles/ProgressDots.styled';

import store from '../store/store';

export default function ProgressDots() {
    const createProgress = () => {
        let dots = [];
        for (let i = 1; i <= store.maxWeek; i++) {
            if (i === store.currentWeek) {
                dots.push(<li key={i} className="current"></li>);
            } else {
                dots.push(<li key={i}></li>);
            }
        }
        return dots;
    }

    return (
        <StyledProgressDots>
            {createProgress()}
        </StyledProgressDots>
    )
}
