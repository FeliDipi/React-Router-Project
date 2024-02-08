import { Suspense, lazy } from 'react';

import './App.css';
import Page404 from './Pages/Page404.jsx';
import Search from './Pages/Search.jsx';

import Route from './Route.jsx';
import Router from './Router.jsx';

const Home = lazy(()=>import('./Pages/Home.jsx'));
const About = lazy(()=>import('./Pages/About.jsx'));

const appRoutes = [
  {
    path:"/search/:query",
    Component:Search
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={<div>...Loading</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
