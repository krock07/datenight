const React = require("react");
const Default = require("./Default");

class Index extends React.Component {
  render() {
    const { dates } = this.props;
    // const {name,type,description,img,phoneNumber,} = dates;
    // const {streetNumber, state,city,zip,street} = dates.address
    return (
    <Default>
        <h1>Date Night Index Page</h1>
        <div className="container">
        {dates.map((date, index) => {
            return (
            <div className="row">
                <div className="col s12 m7">
                <div className="card hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img
                        className="activator"
                        src={`${date.img}`}
                        alt={date.name}
                    />
                    </div>
                    <div className="card-content">
                    <span class="card-title activator">
                        {date.name}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    <span className="">
                        {date.type[0]} {date.type[1]} {date.type[2]}
                    </span>
                    <p>{date.description}</p>
                    </div>
                    <div className="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        {date.name}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>Phone Number:{date.phoneNumber}</p>
                    <p>Address: {date.streetNumber}</p>
                    <p></p>
                    </div>
                    <div className="card-action">
                      <a href={`/dates/${date._id}`}>Show more</a>
                      <a href={`/dates/${date._id}/edit`}>Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Default>
    );
  }
}

module.exports = Index;
