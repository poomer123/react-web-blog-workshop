import App from './app/app'
// import Home from './home/home'
// import About from './about/about'

function loadRoute(cb) {
  return (module) => {
    cb(null, module.default)
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    // component: Home,
    getComponent(nextState, cb) {
      import('./home/home').then(loadRoute(cb))
    }
  },
  childRoutes: [
    {
      path: 'about',
      // component: About,
      getComponent(nextState, cb) {
        import('./about/about').then(loadRoute(cb))
      }
    },
  ]
}

export default routes