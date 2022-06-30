import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,

} from 'react-router-dom'
import Routes from "./router/index"



function App () {
  // let location = useLocation()
  return (

    <Router>
      <Suspense fallback={<div>加载中.....</div>}>
        <Routes />
      </Suspense>

    </Router>


  );
}

export default App;
