import './sticky-navigation-page.css';
import { useState, useEffect } from 'react';
import { endPointWebsites } from '../config/constants';
import useFetchRealtimeFirebase from '../hooks/useFetchRealtimeFirebase';
import './simple-page.css';
import Wrapper from '../common/Wrapper';
import SideNav from '../layout/SideNav';
import WebsitesContainer from './WebsitesContainer';

const Websites = () => {
    const [websitePosts, setWebsitePosts] = useState([]);
    const responseWebsites = useFetchRealtimeFirebase(endPointWebsites);

    useEffect(() => {
        if (responseWebsites.data.length === 0) return;

        setWebsitePosts(responseWebsites.data);
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
                                    {!responseWebsites.fetchError && !responseWebsites.isLoading &&
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