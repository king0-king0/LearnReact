let num = 3;
let ele = (
  <div className=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
    <div className=" flex flex-col *:m-3 items-center">
      <h1 className="text-9xl">test {num}</h1>
      <button className="bg-blue-500 w-1/3 rounded text-white">add</button>
    </div>
  </div>
);
ReactDOM.render(ele, document.getElementById("app"));
