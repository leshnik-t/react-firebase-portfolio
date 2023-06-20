import ReferenceWithImageItem from './ReferenceWithImageItem';
import ReferenceWithRatingItem from './ReferenceWithRatingItem';
import './references-container.css';

const ReferencesContainer = () => {
    const item1 = {
        id: "referenceImage0",
        img: {
            url: "images/people/Chris.jpg",
            alt: "Chris"
        },
        referenceHeading: "-- Christophe Schutz, Founder at Pluton Media",
        referenceText: "It’s my pleasure to recommend Lena for her skills in managing a company, team leading and project management. I’ve chosen her to be my startup managing director because she is honest, dependable, and incredibly hardworking. She is excellent at listening, openness and understanding which are the most important qualities I look for. She is an impressive problem solver who is able to address complex issues strategically and confidently. I thoroughly enjoyed my time working with her, and came to know her as a truly valuable asset. Beyond that, she is an impressive web designer and frontend developer who is able to drive results and complete the projects in time. She’s truly creative, thinking out of the box and paying attention to details. She is a true team player, and always fosters positive discussions and brings the best out of other employees. Without a doubt, I confidently recommend Lena!"
    }

    const item2 = {
        id: "referencerating0",
        referenceHeading: "-- Project: Social network website design",
        referenceText: "Lena is an high professional designer. Also she understand the real requirement from customer. Definitely my best experience on odes. Thank you Lena for great job!!!"
    }
    return (
        <div className="reference-list-container">
            <h2>What do <span className="text-red">people say</span> about me</h2>
            <div className="row gx-5 gy-5">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <ReferenceWithImageItem item={item1}/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <ReferenceWithRatingItem item={item2}/>
                </div>
            </div>
        </div>
    )
}

export default ReferencesContainer;