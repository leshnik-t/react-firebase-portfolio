import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './client/layout/layout/Layout';
import Home from './client/pages/home/Home';
import Websites from './client/pages/websites/Websites';
import JavaScript from './client/pages/javascript/JavaScript';
import Emails from './client/pages/emails/Emails';
import Videos from './client/pages/videos/Videos';
import Banners from './client/pages/banners/Banners';
import Logos from './client/pages/logos/Logos';
import Contact from './client/pages/contact/Contact';
import { useAuth } from './context/AuthContext';
import Login from './dashboard/pages/login/Login';
import Dashboard from './dashboard/layout/dashboard/Dashboard';
import HomeDashboard from './dashboard/pages/home/Home';
import List from './dashboard/pages/list/List';
import Single from './dashboard/pages/single/Single';
import New from './dashboard/pages/new/New';
import Edit from './dashboard/pages/edit/Edit';

function App() {
  const { currentUser } = useAuth();
  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  const RedirectAuthUser = ({ children }) => {
    return currentUser ? <Navigate to="/dashboard" /> : children
  }

  return (
    <Routes>
      <Route path="/login" element={
          <RedirectAuthUser>
            <Login />
          </RedirectAuthUser>
      }/>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web-design-and-frontend-development" element={<Websites />} />
          <Route path="javascript-small-games" element={<JavaScript />} />
          <Route path="email-newsletter-design-development" element={<Emails />} />
          <Route path="video-editing-effects" element={<Videos />} />
          <Route path="web-banners" element={<Banners />} />
          <Route path="logo-design" element={<Logos />} />
          <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>  
      }>
        <Route index element={<HomeDashboard />} />
        <Route path="references-image">
          <Route index element={
            <List 
              collectionName="references-image" 
              listTitle="References with image" 
              addNewPath="/dashboard/references-image/new"
            />
          }/>
          <Route path=":id">
            <Route index element={<Single/>} />
            <Route path="edit" element={
              <Edit 
                collectionName="references-image" 
                pageTitle="Edit Post: Reference With Image"
              />} 
            />
          </Route>
          <Route path="new" element={
            <New
              collectionName="references-image" 
              pageTitle="New Post:  Reference With Image"
            />} 
          />
        </Route>
        <Route path="references-rating">
          <Route index element={
            <List 
              collectionName="references-rating" 
              listTitle="References with rating" 
              addNewPath="/dashboard/references-rating/new"
            />
          }/>
          <Route path=":id">
            <Route index element={<Single/>} />
            <Route path="edit" element={
              <Edit 
                collectionName="references-rating" 
                pageTitle="Edit Post: Reference With Rating"
              />} 
            />
          </Route>
          <Route path="new" element={
            <New 
              collectionName="references-rating" 
              pageTitle="New Post: Reference With Rating"
            />} 
          />
          
        </Route>
        <Route path="websites">
          <Route index element={
            <List 
              collectionName="websites" 
              listTitle="Websites" 
              addNewPath="/dashboard/websites/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="websites" 
              pageTitle="New Post: Website"
            />} 
          />
        </Route>
        <Route path="javascript">
          <Route index element={
            <List 
              collectionName="javascript" 
              listTitle="JavaScript" 
              addNewPath="/dashboard/javascript/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="javascript" 
              pageTitle="New Post: JavaScript"
            />} 
          />
        </Route>
        <Route path="emails">
          <Route index element={
            <List 
              collectionName="emails" 
              listTitle="Emails" 
              addNewPath="/dashboard/emails/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="emails"  
              pageTitle="New Post: Email"
            />} 
          />
        </Route>
        <Route path="videos">
          <Route index element={
            <List 
              collectionName="videos" 
              listTitle="Videos" 
              addNewPath="/dashboard/videos/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="videos" 
              pageTitle="New Post: Video"
            />} 
          />
        </Route>
        <Route path="banners">
          <Route index element={
            <List 
              collectionName="banners" 
              listTitle="Banners" 
              addNewPath="/dashboard/banners/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="banners"  
              pageTitle="New Post: Banners"
            />} 
          />
        </Route>
        <Route path="logos">
          <Route index element={
            <List 
              collectionName="logos" 
              listTitle="Logos" 
              addNewPath="/dashboard/logos/new"
            />
          }/>
          <Route path=":id" element={<Single/>} />
          <Route path="new" element={
            <New
              collectionName="logos"  
              pageTitle="New Post: Logo"
            />} 
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
