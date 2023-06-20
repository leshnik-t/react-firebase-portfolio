const ReferenceWithImageItem = ({ item }) => {
    return (
        <div className="reference-block" key={item.id}>
            <div className="reference-image"><img src={item.img.url} alt={item.img.alt} className="img-circle" width="100" height="100" /></div>
            <div className="reference-text">
                {/* <p>"It’s my pleasure to recommend Lena for her skills in managing a company, team leading and project management. I’ve chosen her to be my startup managing director because she is honest, dependable, and incredibly hardworking.</p>
                <p>She is excellent at listening, openness and understanding which are the most important qualities I look for. She is an impressive problem solver who is able to address complex issues strategically and confidently.</p>
                <p>I thoroughly enjoyed my time working with her, and came to know her as a truly valuable asset. Beyond that, she is an impressive web designer and frontend developer who is able to drive results and complete the projects in time. She’s truly creative, thinking out of the box and paying attention to details. She is a true team player, and always fosters positive discussions and brings the best out of other employees.</p> 
                <p>Without a doubt, I confidently recommend Lena!"</p> */}
                {item.referenceText}
                <h3>{item.referenceHeading}</h3>
            </div>
        </div>
    )
}

export default ReferenceWithImageItem;