import { StyledColumnSet } from './styles/ColumnSet.styled';
import { StyledColumn } from './styles/Column.styled';

import { observer } from 'mobx-react';
import store from '../store/store';

function Main() {
    let currDay = 0;
    const dayNumber = () => {
        return (store.currentWeek - 1) * 7 + ++currDay;
    }

    return (
            <StyledColumnSet>
                <StyledColumn width="85px" first={true}>
                    <div></div>
                    <div><b>6:00</b> AM</div>
                    <div><b>9:00</b> AM</div>
                    <div><b>12:00</b> AM</div>
                    <div><b>3:00</b> PM</div>
                    <div><b>6:00</b> PM</div>
                    <div></div>
                    <div>Workout</div>
                </StyledColumn>


                <StyledColumn>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Turkey melt</div>
                    <div>Bod-ë burn with Mozarella and Tomato Slices</div>
                    <div>Turkey melt</div>
                    <div>Low-Carb</div>
                    <div>
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>


                <StyledColumn highlight={true}>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Turkey melt</div>
                    <div>Bod-ë burn with Mozarella and Tomato Slices</div>
                    <div>Turkey melt</div>
                    <div>Low-Carb</div>
                    <div>
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>


                <StyledColumn>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Turkey melt</div>
                    <div>Bod-ë burn with Mozarella and Tomato Slices</div>
                    <div>Turkey melt</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Low-Carb</div>
                    <div>
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>


                <StyledColumn>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Turkey melt</div>
                    <div>Bod-ë burn and Whole-Wheat Englich Muffin with Butter Spray</div>
                    <div>Turkey melt</div>
                    <div>Hi-Carb</div>
                    <div>
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>


                <StyledColumn>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Turkey melt</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Bod-ë burn with Mozarella and Tomato Slices</div>
                    <div>Turkey melt</div>
                    <div>Hi-Carb</div>
                    <div>
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>


                <StyledColumn>
                    <div>Day {dayNumber()}</div>
                    <div>Bod-ë shake</div>
                    <div>Turkey melt</div>
                    <div>Ham and Swiss Roll ups</div>
                    <div>Turkey melt</div>
                    <div>Bod-ë burn with Mozarella and Tomato Slices</div>
                    <div>Low-Carb</div>
                    <div class="active">
                        <img src="weight.svg" alt="Weight icon"></img>
                    </div>
                </StyledColumn>

                <StyledColumn sunday={true}>
                    <div>Day {dayNumber()}</div>
                    <div className="sunday-guilt-free">
                        <span className="rotate">Guilt-free day</span>
                    </div>
                    <div className="sunday-print">
                        <img src="printer.svg" alt="Printer icon"></img>
                        {/* <svg href="printer.svg" alt="Printer icon"/> */}
                        <span>Print</span>
                    </div>
                </StyledColumn>
            </StyledColumnSet>
    );
}

export default observer(Main);