import Section from './Section';
import Wrapper from '../wrapper/Wrapper';
import ReferencesContainer from '../references/ReferencesContainer';

const SectionReferences = ( props ) => {
    return (
        <Section id={props.id} className={props.className}>
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"> 
                            {props.children}
                            <ReferencesContainer />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default SectionReferences;