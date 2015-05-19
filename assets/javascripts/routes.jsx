import { Route, DefaultRoute, Redirect } from 'react-router'

import App from './components/app'


export default (
  <Route name='app' path='/' handler={ App }>
  </Route>
)
