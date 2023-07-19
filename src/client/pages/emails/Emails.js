import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { endPointEmails } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import EmailsContainer from '../../components/emailscontainer/EmailsContainer';

const Emails = () => {
    const [emailPosts, setEmailPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointEmails);

    useEffect(() => {
        setEmailPosts(processListData(response.data));
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
                        {!response.fetchError && !response.isLoading && emailPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={emailPosts}
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
                                    {!response.fetchError && !response.isLoading && emailPosts &&
                                        <EmailsContainer items={emailPosts} />
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

export default Emails;