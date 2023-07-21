import EmailPost from '../emailpost/EmailPost';

const EmailsContainer = ({ items }) => {
    return (
        <div id="emails-container">
            <article>
                <h1>Email/Newsletter Design &amp; Development</h1>
                {(items.length > 0) && items.map((item) =>
                    <EmailPost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default EmailsContainer;