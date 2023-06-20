import Wrapper from '../common/Wrapper';
import SideNav from '../layout/SideNav';
import './sticky-navigation-page.css';
import './simple-page.css';
import WebsitesContainer from './WebsitesContainer';

const Websites = () => {
    return (
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        <SideNav className="sticky-navigation-container"/>
                    </div>
                    <div className="col col-main">
                        <main>
                            <div className="row">
                                <div className="col">
                                    <WebsitesContainer />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Websites;