import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import car1 from "./images/car1.png";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Rania Hamdi</h1>
        <div>
          <img src={car1} />
        </div>
        <div>
          <img src="/images/car2.png" />
        </div>
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
