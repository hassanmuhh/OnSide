import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home'
import Matches from './pages/Matches';
import Videos from './pages/Videos';
import VideoDetails from './pages/VideoDetails';
import VideoProvider from './store/VideoContext';
import Leagues from './pages/PremierLeague';
import LeagueDetails from './pages/LeagueDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        { index: true, element: <Home /> },
        { path: 'matches', element: <Matches /> },
        { path: 'leagues', element: <Leagues /> },
        { path: 'leagues/:leagueId', element: <LeagueDetails /> },
        { path: 'videos', element: <Videos /> },
        { path: 'videos/:videoId', element: <VideoDetails /> },
      ]
    }
  ])

  return (
    <VideoProvider>
      <RouterProvider router={router}></RouterProvider>
    </VideoProvider>
  );
}

export default App;
