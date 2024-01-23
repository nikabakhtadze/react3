import React from 'react';
import ReactDOM from 'react-dom/client';
class App extends React.Component{
    render (){
        return(
           <React.Fragment>
             <h1>magaliti</h1>
             <p>meore magaliti</p>
           </React.Fragment>
        );
    }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);