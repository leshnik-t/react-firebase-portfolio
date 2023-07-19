import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { endPointJavascript } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import JavascriptContainer from '../../components/javascriptcontainer/JavascriptContainer';

const JavaScript = () => {
    const [javascriptPosts, setJavascriptPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointJavascript);

    useEffect(() => {
        setJavascriptPosts(processListData(response.data));
    }, [response.data]);

    return (
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && javascriptPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={javascriptPosts}
                            />
                        }
                    </div>
                    <div className="col col-main">
                        <main>
                            <div className="row">
                                <div className="col">
                                    {response.isLoading && <p>Loading Items...</p>}
                                    {response.fetchError && 
                                        <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                                    }
                                    {!response.fetchError && !response.isLoading && javascriptPosts &&
                                        <JavascriptContainer items={javascriptPosts} />
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

export default JavaScript;