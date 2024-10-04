import React from "react";
import tick from "../assets/tick.png";
import untick from "../assets/not_tick.png";
import deleteTick from "../assets/delete.png";
const TodoItems = ({text,id,deleteTodo,isComplete,toggle}) => {
  return (
    <div className=" flex items-center my-3 gap-2">
      <div onClick={()=>{toggle(id)}} className=" flex flex-1 items-center cursor-pointer">
        <img className=" w-7" src={isComplete ? tick:untick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete? "line-through":""}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} className=" w-3.5 cursor-pointer" src={deleteTick} alt=""/>
    </div>
  );
};

export default TodoItems;
