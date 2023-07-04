import SectionCategories from '../../components/section/SectionCategories';
import SectionHero from '../../components/section/SectionHero';
import SectionLogos from '../../components/section/SectionLogos';
import SectionReferences from '../../components/section/SectionReferences';

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