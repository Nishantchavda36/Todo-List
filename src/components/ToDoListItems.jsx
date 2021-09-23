import React from "react";

function ToDoListItems(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.checkedItem(props.id);
        }}
      >
        {" "}
        {props.text}{" "}
      </li>
      ;
    </div>
  );
}

export default ToDoListItems;
