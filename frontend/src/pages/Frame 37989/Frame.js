import "./Frame.css";

const Frame = () => {
  return (
    <div className="group-parent">
      <div className="rectangle-parent">
        <input className="group-child" />
        <img
          className="mingcutelocation-fill-icon"
          alt=""
          src="/fluent_location-12-filled.png"
        />
        <div className="areas-that-can">Areas that can be supplied</div>
      </div>

      <div className="rectangle-container">
        <select className="group-child">
            <option className="frame-child1">select district</option>
            <option>All Island</option>
            <option>Jaffna</option>
            <option>Jaffna</option>
            <option>Jaffna</option>
            <option>Jaffna</option>
            <option>Jaffna</option>
        </select>

        <img
          className="mingcutelocation-fill-icon"
          alt=""
          src="/fluent_location-12-filled.png"
        />
        <div className="areas-that-can">Areas that can be supplied</div>
      </div>
      <div className="rectangle-group">
        <input className="group-child" placeholder="colombo"/>
        <img
          className="mingcutelocation-fill-icon1"
          alt=""
          src="/fluent_location-12-filled.png"
        />
        <div className="areas-that-can">Areas that can be supplied</div>
      </div>
      <div className="group-div">
        <input className="group-child" />
        <img
          className="mingcutelocation-fill-icon3"
          alt=""
          src="/fluent_location-12-filled.png"
        />
        <div className="areas-that-can">Areas that can be supplied</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child1" />
        <div className="colombo1">Colombo</div>
        <img className="icround-close-icon" alt="" src="/ic_round-close.png" />
      </div>
    </div>
  );
};

export default Frame;
