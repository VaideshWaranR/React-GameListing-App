import React, { useEffect, useState } from "react";
import GlobalApi from "../Service/GlobalApi";
function GenreList({ setGenid }) {
  const [ind, setindex] = useState(0);
  const [List, setList] = useState([]);
  useEffect(() => {
    getGener();
  }, []);

  const getGener = () => {
    GlobalApi.getGenerelist.then((resp) => {
      setList(resp.data.results);
    });
  };
  return (
    <div className="h-auto">
      <h2 className="text-[30px] font-bold dark:text-white text-black ">
        Genre
      </h2>
      {List.map((elem, index) => (
        <div
          onClick={() => {
            setGenid(elem.id);
          }}
          className="group transition-all ease-in-out hover:font-bold hover:text-lg cursor-pointer h-[4rem] dark:hover:text-black dark:hover:bg-slate-200 hover:bg-slate-700 hover:text-white hover:scale-105 mb-2 rounded-md p-2 w-[80%] flex gap-2 items-center font-semibold bg-slate-200 dark:bg-slate-800 "
        >
          <img
            src={elem.image_background}
            className="w-[50px] h-[50px] object-cover rounded-lg"
          />
          <h3 className="dark:group-hover:text-black group-hover:text-white dark:text-white text-black">
            {elem.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
