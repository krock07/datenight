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
        <div className="header">
        <img src={`${date.img}`} alt={name} />
        </div>
        <div className="describe">
            <p>{description}</p>
        </div>
        </div>
    </Default>
    );
}
}
module.exports = Show;
