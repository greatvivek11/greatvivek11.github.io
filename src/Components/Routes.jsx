import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Blog = lazy(() => import('./Blog'));
const Project = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));


const Routes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Project} />
            <Route path="/" component={Home} />
        </Switch>
    </Suspense>

);

export default Routes;
