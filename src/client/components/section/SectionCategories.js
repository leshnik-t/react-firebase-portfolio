import Section from './Section';
import Wrapper from '../wrapper/Wrapper';
import CategoryListContainer from '../categorylist/CategoryListContainer';


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