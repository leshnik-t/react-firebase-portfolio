import Section from '../common/Section';
import Wrapper from '../common/Wrapper';
import HeroContainer from './HeroContainer';


const SectionHero = ( props ) => {
    return (
        <Section id={props.id} className={props.className}>
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"> 
                            {props.children}
                            <HeroContainer />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default SectionHero;