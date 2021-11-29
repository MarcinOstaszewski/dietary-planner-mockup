import StyledButton  from './styles/Button.styled';

export default function Button(props) {
    const { data } = props;

    const icon = data.icon ?
        <img className="icon" src={`${data.icon}.svg`} alt={data.alt} />
        : '';

    return (
        <StyledButton>
            {icon}
            {data.name}
            <img className="chevron" src="chevron-right.svg" alt="Right chevron" />
        </StyledButton>
    );
}