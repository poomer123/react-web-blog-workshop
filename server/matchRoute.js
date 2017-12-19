import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from '../web/routes'

function matchRoute(req) {
  return new Promise((resolve, reject) => {
    match(
      {routes, location: req.url},
      (error, redirectLocation, renderProp) => {
        if({error}){
          resolve({error})
        } else if (redirectLocation) {
          resolve({
            redirect: {
              url: redirectLocation.pathname + redirectLocation.search
            }
          })
        } else if (renderProp) {
          const element = <RouterContext {...renderProps} />
          const content = ReactDOMServer.renderToString(element)
          resolve({content})
        } else {
          console.log('error')
        }
      }
    )
  })
}

export default matchRoute