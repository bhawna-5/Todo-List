import React, { useEffect, useRef, useState } from "react";
import todoIcon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { parse } from "postcss";
const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    // console.log(inputText);
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodoList((prev) => {
      console.log(prev);
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      console.log(prev);
      
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todoList))
  }, [todoList]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white  
    w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl
    "
      >
        {/* title */}
        <div className=" flex items-center mt-7 gap-2">
          <img className=" w-8 " src={todoIcon} alt="" />
          <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>
        {/* input */}
        <div className=" flex items-center my-7 rounded-full bg-gray-200">
          <input
            ref={inputRef}
            className=" bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
            type="text"
            placeholder="add your task"
          />
          <button
            onClick={add}
            className=" border-none rounded-full bg-orange-600 w-32 h-14
           text-white text-lg font-medium cursor-pointer"
          >
            ADD +
          </button>
        </div>
        {/* todo list */}

        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
