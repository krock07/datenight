const React = require("react");
const Default = require("./Default");

class Index extends React.Component {
  render() {
    const { dates } = this.props;
    const {name,type,description,img,phoneNumber} = dates;
    // const {streetNumber, state,city,zip,street} = dates.address
  
    return (
    <Default>
        <h1 className="center-align">Lets Get Started</h1>
        <p className="center-align"> Are you looking for some date inspiration? Maybe you are craving some romantic ideas to surprise your other half! Perhaps you’re looking for fun things to do with your girlfriends? If you are a do it yourself kind of person, browse these date ideas for inspiration and great discounts.  Whether you are in your home town, or traveling the country, we have spectacular date experiences for you.  We will be adding more ideas, discounts and locations regularly, so bookmark this page and keep coming back!</p>
        <div className="containers">

        {dates.map((date, index) => {
            // console.log(date.address[0].streetNumber, "address test")
            // console.log(date)
            //  const {streetNumber, state,city,zip,street} = date.address
            //  console.log(streetNumber);
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
                    {/* <p>Address: {date.address[0].streetNumber[0]}</p> */}
                    {/* <img className="card-image small" src="https://escapetheroom.com/wp-content/uploads/2018/11/Escape-the-room-OG.jpg" alt=""/> */}
                    </div>
                    <div className="card-action">
                    <form action={`/dates/${date._id}?_method=DELETE`} method="post">
                      <a href={`/dates/${date._id}`}>Show more</a>
                      <a href={`/dates/${date._id}/edit`}>Edit</a>
                      <a class="waves-effect waves-teal btn-flat" type="submit" value="Delete"><input  type="submit" value="Delete"/></a>
                      </form>
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
