const React = require("react");
const Default = require('./Default');

class Show extends React.Component {
render() {
    const { date } = this.props;
    const { description } = date;
    const { name } = date;
    const {phoneNumber} = date;
    const {type} = date;

    return (
    <Default>
      <div className="container">
        {/* <div className="parent">
          <div className="child one"><img src={`${date.img}`}/>
          </div>
          <div className="child one">{description}</div>
        </div> */}
    <h1 className="center-align">{name}</h1>
        <div class="row">
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image">
          <img src={`${date.img}`}/>
        </div>
        <div class="card-content">
      <span class="card-title">{type}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m6 l3 m6">
    {/* <h1>My Google Map</h1> */}
    <div id="maps"></div>
      <blockquote>Phone Number: {phoneNumber}</blockquote>
    </div>
    </div>
  </div>
    </Default>
    );
}
}
module.exports = Show;
