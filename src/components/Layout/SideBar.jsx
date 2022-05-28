import Api from "./Api";
function SideBar() {
  <Api />;
  return (
    <div className="side">
      <input
        type="text"
        placeholder="Search City..."
        className="sb"
        onChange={(event) => setLocation(event.target.value)}
      />

      <hr className="ew" />

      {/* <=====Details=====> */}
      <div className="ds">
        <h3>Weather Details</h3>
        <p>
          Wind:<span>12</span>
        </p>

        <p>
          Humidity:<span>12</span>
        </p>

        <p>
          Visibility:<span>12</span>
        </p>

        <p>
          Temp_Min:<span>12</span>
        </p>

        <p>
          Temp_Max:<span>12</span>
        </p>

        <p>
          Air pressure:<span>12</span>
        </p>
      </div>

      <hr />

      {/* <==========> */}
      <div className="days">
        <h3>Saturday</h3>
        <div className="wDay1"></div>

        <h3>Monday</h3>
        <div className="wDay2"></div>

        <h3>Tuesday</h3>
        <div className="wDay3"></div>

        <h3>Thursday</h3>
        <div className="wDay4"></div>

        <h3>Wednesday</h3>
        <div className="wDay5"></div>
      </div>
      {/* <=====Details=====> */}
    </div>
  );
}

export default SideBar;
