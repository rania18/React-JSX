import "./App.css";
import "./style.css";
import car1 from "./images/car1.png";
import Video from "./images/video.mp4";

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
      {/* there are two ways to change tag video  */}
      <video autostart autoPlay muted src={Video} type="video/mp4"  style={{width:700, height:240}} />
      {/* <video style={{width:320, height:240}} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
