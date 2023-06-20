import Section from '../common/Section';
import Wrapper from '../common/Wrapper';
import CategoryListContainer from './CategoryListContainer';


const SectionCategories = ( props ) => {
    return (
        <Section id={props.id} className={props.className}>
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col"> 
                            {props.children}
                            <CategoryListContainer />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default SectionCategories;