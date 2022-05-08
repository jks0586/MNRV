import React from "react";

import LetscmsRoutes from '../../routes/routes';
class RightSidebar extends React.Component {
    componentDidMount(){
      // console.log(window.innerHeight);
      document.getElementById('root').style.height=window.innerHeight+'px';
    }
    render() {
      return (
       <>
       <div  id="page-content-wrapper" className="col-md-9">
        <LetscmsRoutes/>
       </div>
       </>
      );
    }
  }
  
  export default RightSidebar;