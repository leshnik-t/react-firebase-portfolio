import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { endPointWebsites } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import WebsitesContainer from '../../components/websitescontainer/WebsitesContainer';

const Websites = () => {
    const [websitePosts, setWebsitePosts] = useState(null);
    const responseWebsites = useFetchRealtimeFirebase(endPointWebsites);

    useEffect(() => {
        setWebsitePosts(processListData(responseWebsites.data));
    }, [responseWebsites.data]);

    return (
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        <SideNav 
                            className="sticky-navigation-container"
                            items={websitePosts}
                        />
                    </div>
                    <div className="col col-main">
                        <main>
                            <div className="row">
                                <div className="col">
                                    {responseWebsites.isLoading && <p>Loading Items...</p>}
                                    {responseWebsites.fetchError && 
                                        <p style={{color: "red"}}>{`Error: ${responseWebsites.fetchError}`}</p>
                                    }
                                    {!responseWebsites.fetchError && !responseWebsites.isLoading && websitePosts &&
                                        <WebsitesContainer items={websitePosts} />
                                    }
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