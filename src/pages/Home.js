import SectionCategories from '../components/SectionCategories';
import SectionHero from '../components/SectionHero';
import SectionLogos from '../components/SectionLogos';
import SectionReferences from '../components/SectionReferences';

const Home = () => {
    return (
        <main>
            <SectionHero className="home-section"/>
            <SectionLogos className="home-section"/>
            <SectionCategories className="home-section"/>
            <SectionReferences className="home-section"/>
        </main>
    )
}

export default Home;