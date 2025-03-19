"use client";
import { Maiden_Orange } from "next/font/google";
import { Input } from "postcss";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(task);
    // console.log(desc);
    setmainTask([...mainTask, {task, desc}]);
    settask("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setmainTask(copytask);
  } 

  let renderTask = <h2>No Tasks Available</h2>

  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} className="flex items-center justify-between">
      <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-2xl font-semibold">{t.task}</h5>
        <h6 className="text-lg font-medium">{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i);
      }}
       className="bg-red-400 text-white px-4 py-2 rounded font-bold mb-5">Delete</button>
      </li>
    );
  });
}
  return (
    <>
      <h1 className="bg-black text-white text-4xl text-center p-7 font-bold ">
        My ToDo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="ml-64 text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
          placeholder="Enter task here!"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
          placeholder="Enter desciption here!"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="text-white bg-black rounded text-xl font-bold mx-7 px-3 py-3">
          Add Task!
        </button>
      </form>

        <div className="p-8 bg-pink-200">
          <ul>
            {renderTask}
          </ul>
        </div>
    </>
  );
};

export default page;
