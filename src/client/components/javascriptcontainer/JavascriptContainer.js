import JavascriptPost from '../javascriptpost/JavascriptPost';

const JavascriptContainer = ({ items }) => {
    return (
        <div id="javascript-container">
            <article>
                <h1>Javascript Small Games</h1>
                {(items.length > 0) && items.map((item) =>
                    <JavascriptPost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default JavascriptContainer;