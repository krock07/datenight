const React = require("react");
const Default = require('./Default');

class Show extends React.Component {
render() {
    const { date } = this.props;
    const { description } = date;
    const { name } = date;

    return (
    <Default>
      <div className="container">
    <h1>{name}</h1>
        <div class="row">
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image">
          <img src={`${date.img}`}/>
        </div>
        <div class="card-content">
        <span class="card-title">Card Title</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l3 m6">
    <h1>My Google Map</h1>
    <div id="maps"></div>
    </div>
    </div>
  </div>
        {/* <div className="container">
        <div className="header">
        <img src={`${date.img}`} alt={name} />
        </div>
        <div className="describe">
            <p>{description}</p>
        </div>
        </div> */}
        {/* </div> */}
    </Default>
    );
}
}
module.exports = Show;
