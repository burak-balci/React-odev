import React from "react";
import "../App.css"

function Footer({newTodo}) {

  return (
    <footer className="footer">
		
		<span className="todo-count">
			{newTodo.length}  items left
		</span>

	</footer>
  );
}

export default Footer;
