import Navvbar from "./Components/Navvbar/Navvbar";
import main from "../src/assets/main.jpg";
import "./App.css";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <img
          src={main}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="h-screen ">
          <Navvbar />
          <div className="absolute flex pt-[210px] pl-[100px] inset-0">
            <Main />
          </div>
        </div>
      </div>
      <div>
        <h1>Akash</h1>
      </div>
    </>
  );
}

export default App;
