import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from '../web/routes'
import {Provider} from 'react-redux'
import configureStore from '../web/configureStore'

function matchRoute(req) {
  const store = configureStore()
  return new Promise((resolve, reject) => {
    match(
      {routes, location: req.url},
      async (error, redirectLocation, renderProp) => {
        if(error){
          console.log('1!')
          resolve({error})
        } else if (redirectLocation) {
          console.log('2!')
          resolve({
            redirect: {
              url: redirectLocation.pathname + redirectLocation.search
            }
          })
        } else if (renderProp) {
          const prefetches = renderProp.components
            .filter(c => c.fetchData)
            .map(c => c.fetchData(store))
          await Promise.all(prefetches)
          const element = (
            <Provider store={store}>
              <RouterContext {...renderProp} />
            </Provider>
          )
          const content = ReactDOMServer.renderToString(element)
          console.log(content)
          resolve({
            content,
            data: store.getState(),
          })
        } else {
          console.log('error')
        }
      }
    )
  })
}

export default matchRoute