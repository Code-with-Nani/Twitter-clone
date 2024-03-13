import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <>
      <div className="main flex container mx-auto">
        <div className="first w-full ">
          <First />
        </div>
        <div className="second w-[170%] border-x border-[#2F3336] ">
          <Second />
        </div>
        <div className="third w-full hidden lg:block ">
          <Third />
        </div>
      </div>
    </>
  );
}

export default App;
