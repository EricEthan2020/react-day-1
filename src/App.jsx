import React from 'react';
import "./index.css";
const App = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Web Design"
    },
    {
      id: 2,
      title: "Special Web Design"
    },
    {
      id: 3,
      title: "Advance Web Design"
    },
    {
      id: 4,
      title: "sout tat gyi pyit pi"
    }

  ];
  const title = "Course Choice"
  return (
    <div className='p-20 m-10 border border-red-300 font-serif'>
      <h1 className='text-3xl text-blue-600 mb-10'>{title}</h1>
      <ul className='p-20 lg:w-[70%]'>
        {courses.map((course) => (
          <li className='text-center hover:cursor-pointer shadow-md group mb-10 relative hover:scale-125 overflow-hidden rounded border border-gray-100 bg-slate-0  px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white' key={course.id}>
            {course.title}
            {/* <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-600 transition-all duration-500 group-hover:w-full"></span> */}
            <span class="ease absolute right-0 top-0 h-0 shadow-xl w-0 border-r-4 border-blue-600 transition-all duration-500 group-hover:h-full"></span>
            <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-blue-600 transition-all duration-500 group-hover:w-full"></span>
            {/* <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-600 transition-all duration-500 group-hover:h-full"></span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App