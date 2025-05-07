let todo = [{ text: "first", IsChecked: true }];

function addTask(e) {
  e.preventDefault();
  todo.push({ text: e.target[0].value.trim(), IsChecked: false });
  e.target[0].value = "";
  render();
}

function checkbox(task) {
  console.log(task.IsChecked);
  task.IsChecked = !task.IsChecked;
  render();
}

let taskfn = (task, i) => {
  return (
    <li key={i} className="w-full sm:w-1/2 lg:w-1/3 border-2  rounded p-3">
      <div className="grid sm:grid-cols-8 grid-cols-5 items-center gap-2 justify-items-center">
        <span className=" col-start-1 " onClick={() => checkbox(task)}>
          {task.IsChecked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              height="25"
            >
              <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
              <path d="M9.333,15.919,5.414,12A1,1,0,0,0,4,12H4a1,1,0,0,0,0,1.414l3.919,3.919a2,2,0,0,0,2.829,0L20,8.081a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              height="45"
            >
              <path d="M15,19h-6c-2.21,0-4-1.79-4-4v-6c0-2.21,1.79-4,4-4h6c2.21,0,4,1.79,4,4v6c0,2.21-1.79,4-4,4ZM9,6c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3h-6Z" />
            </svg>
          )}
        </span>
        <h3 className="inline-block text-3xl sm:col-start-3 col-start-2 capitalize">
          {task.text}
        </h3>
        <span className="-col-end-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            height="35"
          >
            <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
            <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
            <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
          </svg>
        </span>
        <span className="-col-end-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            height="30"
          >
            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
            <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
          </svg>
        </span>
      </div>
    </li>
  );
};

function render() {
  let ele = (
    <div className="  flex items-center flex-col justify-center  mt-5 p-5 ">
      <h1 className="text-center sm:text-4xl lg:text-6xl text-3xl">To-Do WebSite</h1>
      <span className="h-0.5 my-5 bg-black w-full"></span>
      <div className=" flex  *:m-3 justify-around items-center flex-col w-full">
        <form onSubmit={addTask} className="flex justify-around w-full sm:w-2/3 lg:w-1/3">
          <input type="text" className="w-2/3 border-2" />
          <input
            type="submit"
            className="bg-blue-500  rounded text-white w-1/4"
            content="add"
          />
        </form>
        <ul className="flex flex-col-reverse w-full justify-center items-center *:my-1">
          {todo.length
            ? todo.map((task, i) => {
                return taskfn(task, i);
              })
            : ""}
        </ul>
      </div>
    </div>
  );

  ReactDOM.render(ele, document.getElementById("app"));
}

render();
