import './App.css';
import {useState} from "react";

function App() {
  // const color = "black";
  const [color,setColor] = useState("olive");
  // function red() {
  //   setColor ("red");
  // }
  function changeColor(newcolor) {
    setColor(newcolor);
  }
  return (
    
    <div className="App h-screen w-full duration-200" style={{backgroundColor:color}}>
      
      <div className="container  fixed    flex flex-wrap justify-center bottom-0 inset-x-0 ">
        <div className="bar space-x-2 shadow-lg bg-orange-200 px-4 py-3 rounded-3xl">
        <button className="btn rounded-full  bg-red-700 text-white py-1 px-3" onClick={()=>changeColor("red")}>Red</button>
        <button className="btn rounded-full  bg-green-700 text-white py-1 px-3" onClick={()=>changeColor("green")}>Green</button>
        <button className="btn rounded-full  bg-blue-700 text-white py-1 px-3" onClick={()=>changeColor("blue")}>Blue</button>
        <button className="btn rounded-full  bg-olive text-white py-1 px-3" onClick={()=>changeColor("olive")}>Olive</button>
        <button className="btn rounded-full  bg-yellow-300 text-black py-1 px-3" onClick={()=>changeColor("yellow")}>Yellow</button>
        <button className="btn rounded-full  bg-gray-500 text-white py-1 px-3" onClick={()=>changeColor("gray")}>Gray</button>
        <button className="btn rounded-full  bg-pink-500 text-white py-1 px-3" onClick={()=>changeColor("pink")}>Pink</button>
        <button className="btn rounded-full  bg-purple-500 text-white py-1 px-3" onClick={()=>changeColor("purple")}>Purple</button>
        <button className="btn rounded-full  bg-lavender text-black py-1 px-3" onClick={()=>changeColor("lavender")}>Lavender</button>
        <button className="btn rounded-full  bg-white text-black py-1 px-3" onClick={()=>changeColor("white")}>White</button>
        <button className="btn rounded-full  bg-black text-white py-1 px-3" onClick={()=>changeColor("black")}>Black</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
