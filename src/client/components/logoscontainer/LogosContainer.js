import LogoPost from '../logopost/LogoPost';

const LogosContainer = ({ items }) => {
    return (
        <div id="logos-container">
            <article>
                <h1>Logo Design</h1>
                {(items.length > 0) && items.map((item) =>
                    <LogoPost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default LogosContainer;