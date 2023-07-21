import Section from './Section';
import Wrapper from '../wrapper/Wrapper';
import LogosContainer from '../logoline/LogosContainer';

const SectionLogos = ( props ) => {
    return (
        <Section id={props.id} className={props.className}>
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"> 
                            {props.children}
                            <LogosContainer />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default SectionLogos;