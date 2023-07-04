import './section.css';

const Section = ( props, { id = null, className = null } ) => {
    return (
        <section id={props.id} className={props.className}>
            {props.children}
        </section>
    )
}

export default Section;