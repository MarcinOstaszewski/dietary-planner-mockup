import { StyledFooter } from './styles/Footer.styled';
import Article from './Article';

function Footer() {
    const sampleText = 'Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.'

    const firstButtons = [{
        alt: '',
        icon: '',
        name: 'Buy now'
    }];

    const secondButtons = [
        {
            alt: '',
            icon: 'ios',
            name: 'iOS',
        },
        {
            alt: '',
            icon: 'android',
            name: 'Android'
        }
    ];

    const thirdButtons = [{
        alt: '',
        icon: '',
        name: 'Read FAQs'
    }];

    return (
        <StyledFooter>
            <Article
                title="Running out of products?"
                text={sampleText}
                buttons={firstButtons}
            />
            <Article
                title="Bod-e Trainer in your pocket"
                text={sampleText}
                buttons={secondButtons}
            />
            <Article
                title="Frequently Asked Questions"
                text={sampleText}
                buttons={thirdButtons}
            />
        </StyledFooter>
    )
}

export default Footer;