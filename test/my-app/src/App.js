import {Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AIIMeetups';
import NewMeeupPage from './pages/NewMeetup';
import FavoriteMeetUpsPage from './pages/Favorites';
import Layout from './components/layout/layout';


function App() {
  return (
  <Layout>
    <Routes>
      <Route exact path='/' element={<AllMeetUpsPage />}/>
      <Route path="/new-meetup" element ={<NewMeeupPage />}/>
      <Route path='/favorite' element = {<FavoriteMeetUpsPage />}/>
    </Routes>
    </Layout>
  );
}

export default App;
