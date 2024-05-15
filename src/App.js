import "./App.css";
import { useState, useRef } from "react";
import ItemList from "./components/ItemList";
import ItemToday from "./components/ItemToday";

export default function App() {
  const [isEditingList, setIsEditingList] = useState(false);

  const [isEditingToday, setIsEditingToday] = useState(false);

  const editedItemIndex = useRef(null);

  const [lists, setLists] = useState([]);

  const [count, setCount] = useState(0);

  const [list, setList] = useState([
    {
      nameList: "",
    },
  ]);

  const handleDeleteList = (id) => {
    setLists(lists.filter((_, index) => index !== id));
    setIsEditingList(false);
    setList({ nameList: "" });
  };

  const handleEditList = (index) => {
    editedItemIndex.current = index;
    setList({
      nameList: lists[index].nameList,
    });
    setIsEditingList(true);
  };

  const [todays, setTodays] = useState([]);

  const [today, setToday] = useState([
    {
      nameToday: "",
    },
  ]);

  const handleDeleteToday = (id) => {
    setTodays(todays.filter((_, index) => index !== id));
    setIsEditingToday(false);
    setToday({ nameToday: "" });
  };

  const handleEditToday = (index) => {
    editedItemIndex.current = index;
    setToday({
      nameToday: todays[index].nameToday,
    });
    setIsEditingToday(true);
  };

  const handleSaveEditList = () => {
    const updatedLists = [...lists];
    updatedLists[editedItemIndex.current] = list;
    setLists(updatedLists);
    setIsEditingList(false);
    setList({ nameList: "" });
  };

  const handleCancelEditList = () => {
    setIsEditingList(false);
    setList({ nameList: "" });
  };

  const handleSaveEditToday = () => {
    const updatedTodays = [...todays];
    updatedTodays[editedItemIndex.current] = today;
    setTodays(updatedTodays);
    setIsEditingToday(false);
    setToday({ nameToday: "" });
  };

  const handleCancelEditToday = () => {
    setIsEditingToday(false);
    setToday({ nameToday: "" });
  };

  const handleCompleteToday = (index) => {
    const updatedTodays = [...todays];
    const updatedToday = { ...todays[index] };
    updatedToday.completed = !updatedToday.completed;

    updatedTodays[index] = updatedToday;
    setTodays(updatedTodays);
  };

  return (
    <div className="bg-black h-full xl:px-12 px-4 text-right">
      {/* Edit */}
      <button className="text-[#457BB1] py-2 text-sm xl:text-2xl">Edit</button>
      {/*SearchBar*/}
      <form className="flex bg-[#1C1C1E] gap-1 rounded-[1rem] place-items-center pl-2 pr-4 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#1C1C1E"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 xl:w-10 xl:h-10 text-[#9F9EA4]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 
            4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <input
          className=" text-[#9F9EA4] bg-[#1C1C1E] text-sm p-1 w-full xl:text-xl"
          type="text"
          placeholder="Search"
        ></input>
      </form>
      {/*List*/}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 text-left">
        {/*Today*/}
        <button className="grid grid-cols-2 bg-[#1C1c1e] hover:bg-gray-600 rounded-[1rem] text-[#9f9ea4] text-base p-2 text-left xl:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6 xl:w-10 xl:h-10 rounded-full bg-[#008FEE] p-0.5 mb-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p class="justify-self-end items-center">{count}</p>
          Today
        </button>
        {/*Scheduled*/}
        <button className="grid grid-cols-2 bg-[#1C1c1e] hover:bg-gray-600 rounded-2xl text-[#9f9ea4] text-base p-2 text-left xl:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6 xl:w-10 xl:h-10 rounded-full bg-[#FF443A] p-0.5 mb-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 
              7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 
              0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 
              2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 
              2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 
              2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <p class="justify-self-end items-center">{count}</p>
          Scheduled
        </button>
        {/*All*/}
        <button className="grid grid-cols-2 bg-[#1C1c1e] hover:bg-gray-600 rounded-2xl text-[#9f9ea4] text-base p-2 col-span-2 text-left xl:text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6 xl:w-10 xl:h-10 rounded-full bg-[#60646C] p-0.5 mb-2"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 
              2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 
              2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 
              0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
            />{" "}
          </svg>
          <p class="justify-self-end items-center">{count}</p>
          All
        </button>
      </div>
      {/* My List */}
      <p className="text-white text-xl text-left my-2 xl:text-2xl">My List</p>
      <div className="min-h-[400px]">
        {lists.map((list, index) => (
          <ItemList
            nameList={list.nameList}
            count={count}
            onDeleteList={() => handleDeleteList(index)}
            onEditList={() => handleEditList(index)}
          />
        ))}
      </div>
      <form className="flex bg-[#1C1C1E] gap-1 rounded-[1rem] place-items-center pl-2 pr-4 w-full mb-2">
        <input
          className=" text-[#9F9EA4] bg-[#1C1C1E] text-sm p-1 w-screen xl:text-xl"
          type="text"
          placeholder="Name List"
          id="nameList"
          value={list.nameList}
          onChange={(e) =>
            setList({
              ...list,
              nameList: e.target.value,
            })
          }
        />
        {isEditingList ? (
          <>
            <button
              className="text-[#457BB1] py-2 text-sm xl:text-2xl w-[200px]"
              onClick={handleSaveEditList}
            >
              Save Edit
            </button>
            <button
              className="text-[#F87171] py-2 text-sm xl:text-2xl w-[100px]"
              onClick={handleCancelEditList}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="text-[#457BB1] py-2 text-sm xl:text-2xl w-[100px]"
            onClick={(e) => {
              e.preventDefault();
              setLists([...lists, list]);
              setList({ nameList: "" });
            }}
          >
            Add List
          </button>
        )}
      </form>
      {/* ItemToday */}
      <div className="min-h-[400px]">
        <p className="text-left font-bold text-[#457BB1] xl:text-2xl">Today</p>
        <div className="min-h-[400px]">
          {todays.map((today, index) => (
            <ItemToday
              onCompleteToday={() => handleCompleteToday(index)}
              nameToday={today.nameToday}
              onDeleteToday={() => {
                setCount(count - 1);
                handleDeleteToday(index);
              }}
              onEditToday={() => handleEditToday(index)}
              completed={today.completed}
            />
          ))}
        </div>
        {/* NewReminder */}
        <form className="flex bg-[#1C1C1E] gap-1 rounded-[1rem] place-items-center pl-2 pr-4 w-full mb-2">
          <input
            className=" text-[#9F9EA4] bg-[#1C1C1E] text-sm p-1 w-screen xl:text-xl"
            type="text"
            placeholder="Name Reminder"
            id="nameToday"
            value={today.nameToday}
            onChange={(e) =>
              setToday({
                ...today,
                nameToday: e.target.value,
              })
            }
          />
          {isEditingToday ? (
            <>
              <button
                className="text-[#457BB1] py-2 text-sm xl:text-2xl w-[200px]"
                onClick={handleSaveEditToday}
              >
                Save Edit
              </button>
              <button
                className="text-[#F87171] py-2 text-sm xl:text-2xl w-[100px]"
                onClick={handleCancelEditToday}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="text-[#457BB1] py-2 text-sm xl:text-2xl w-[200px]"
              onClick={(e) => {
                e.preventDefault();
                setTodays([...todays, today]);
                setToday({ nameToday: "" });
                setCount(count + 1);
              }}
            >
              New Reminder
            </button>
          )}
        </form>
      </div>
      {/* ItemScheduled */}
      <div className="min-h-[400px]">
        <p className="text-left font-bold text-[#FF443A] xl:text-2xl">
          Scheduled
        </p>
        {/* NewReminder */}
        <p className=" text-sm text-white text-left xl:text-xl">Today</p>
        <button className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6 xl:w-8 xl:h-8 fill-[#9f9ea4] "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      {/* ItemScheduled */}
      <div className="min-h-[400px]">
        <p className="text-left font-bold text-[#9f9ea4] xl:text-2xl">All</p>
        {/* NewReminder */}
        <div className="flex gap-1">
          <p className=" text-sm text-[#9f9ea4] text-left xl:text-xl">
            Completed ●
          </p>
          <button className=" text-sm text-[#9f9ea4] xl:text-xl">Clear</button>
        </div>
      </div>
    </div>
  );
}
