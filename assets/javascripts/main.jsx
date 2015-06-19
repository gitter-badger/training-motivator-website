import './vendor'
import '../stylesheets/main.sass'

import fetchData     from './http_requests/fetch_data'
import router        from './router'

router.run((Handler, state) =>
  fetchData(state.routes)
    .then(data =>
      React.render(
        <Handler data={ data } { ...state } />,
        document.body
      )
    )
);
