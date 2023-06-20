import Section from '../common/Section';
import Wrapper from '../common/Wrapper';
import ReferencesContainer from './ReferencesContainer';

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