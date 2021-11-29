import { StyledArticle } from './styles/Article.styled';
import Button from './Button';

function Article(props) {
    return (
        <StyledArticle>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="buttons">
                {props.buttons.map(button => <Button data={button} />)}
            </div>
        </StyledArticle>
    )
}

export default Article;