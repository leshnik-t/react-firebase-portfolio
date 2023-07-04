import Section from './Section';
import Wrapper from '../wrapper/Wrapper';
import HeroContainer from '../hero/HeroContainer';


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