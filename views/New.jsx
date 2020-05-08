const React = require("react");
const Default = require("./Default");

class New extends React.Component {
render() {
    return (
    <Default>
        <div class="card-panel red darken-2">
        <h1 className="center-align white-text ">Your Perfect Date Night</h1>
        </div>
        <div class="row">
        <form className="col s12" action="/dates" method="POST">
            <div className="row">
            <div className="input-field col s6">
                Name:{" "}
                <input
                className="form-control"
                placeholder="Walk on The Beach"
                type="text"
                name="name"
                />
                <br />
            </div>
            <div className="input-field col s6">
                Type: <input type="text" name="type" placeholder="Adventure" />
            </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
                Description:{" "}
                <textarea
                className="form-control materialize-textarea"
                type="textarea"
                name="description"
                rows="3"
                ></textarea>
                <br />
            </div>
            </div>
            <div className="row">
            <div className="input-field col s6">
                <i class="material-icons prefix">image</i>
                <input type="text" name="img" className="validate" />
                <br />
                <label for="icon_telephone">Image</label>
            </div>
            <div className="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input type="tel" name="phoneNumber" className="validate" />
                <br />
                <label for="icon_telephone">Telephone</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s2">
                Street Number <input type="number" name="streetNumber" />
                <br />
            </div>
            <div className="input-field col s2">
                Street <input type="text" name="street" />
                <br />
            </div>
            <div className="input-field col s2">
                City <input type="text" name="city" />
                <br />
            </div>
            <div className="input-field col s3">
                State <input type="text" name="state" />
            </div>
            <div className="input-field col s2">
                Zip <input type="number" name="zip" />
            </div>
            </div>
            <button
            class="btn waves-effect waves-light red darken-2"
            type="submit"
            name="action"
            >
            Add Your Date Night
            <i class="material-icons right ">send</i>
            </button>
        </form>
        </div>
    </Default>
    );
}
}

module.exports = New;
