import './vendor'
import '../stylesheets/main.sass'

import fetchData     from './http_requests/fetch_data'
import router        from './router'
import Flux          from './flux/flux'
import FluxComponent from 'flummox/component'

const flux = new Flux();

router.run((Handler, state) =>
  fetchData(state.routes)
    .then(data =>
      React.render(
        <FluxComponent flux={ flux }>
          <Handler data={ data } { ...state } />
        </FluxComponent>,
        document.body
      )
    )
);
