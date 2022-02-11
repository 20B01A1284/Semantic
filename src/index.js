import React from "react";
import ReactDOM from "react-dom";
import { Comment } from "./semantic";

ReactDOM.render(
  <div className="ui cards" style={{paddingTop : "150px",marginLeft : "400px"}}>
    <Comment name="Elliot Fu" sub="Friends of Veronika" des="Elliot requested permission to view your contact details"/>
    <Comment name="Jenny Hess" sub="New Member" des={<>Jenny wants to add you to the group <b>best friends</b>
      </>}/>
  </div>,
  document.getElementById("root")
);
