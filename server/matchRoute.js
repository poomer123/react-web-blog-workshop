import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from '../web/routes'

function matchRoute(req) {
  console.log('mat!')
  return new Promise((resolve, reject) => {
    match(
      {routes, location: req.url},
      (error, redirectLocation, renderProp) => {
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
          console.log(renderProp)
          const element = <RouterContext {...renderProp} />
          const content = ReactDOMServer.renderToString(element)
          console.log(content)
          resolve({content})
        } else {
          console.log('error')
        }
      }
    )
  })
}

export default matchRoute