import App from './app/app'
import Home from './home/home'
import About from './about/about'

const routes = {
  path: '/',
  component: App,
  indexRoute: {component: Home},
  childRoutes: [
    {path: 'about', component: About},
  ]
}

export default routes