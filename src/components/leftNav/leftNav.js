import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class LeftNav extends Component {
  render() {
    return (
   	 <div class="float-xl-right">


BLOG LIST<p> -  -   -  -  -
  -  -  -</p>
<div id="div1"><Link to ="/HomePage1">JAVA</Link> </div>
<div id="div2"><Link to ="/HomePage">ReactJs</Link> </div>


	</div>
    );
  }
}

export default LeftNav;
