const React = require('react')
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const {date} = this.props;
        const {name,type,description,img,phoneNumber,} = date;
        const {streetNumber, state,city,zip,street} = date.address
        return (
            <Default>
                <div className="container">
                    <div className="head">
                        <h1>Make This Date Night Better</h1>
                        {/* <img src={`${date.img}`} alt={name}/> */}
                    </div>
                    <div class="row">
                    <form className="col s12"  action={`/dates/${date._id}?_method=PUT`} method="POST">
            <div className="row">
            <div className="input-field col s6">
                Name:{" "}
                <input
                className="form-control"
                type="text"
                name="name"
                value={name} 
                />
                <br />
            </div>
            <div className="input-field col s6">
                Type: <input type="text" name="type" placeholder="Adventure" value={type} />
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
                value={description}
                ></textarea>
                <br />
            </div>
            </div>
            <div className="row">
            <div className="input-field col s6">
                <i class="material-icons prefix">image</i>
                <input type="text" name="img" className="validate" value={img} />
                <br />
                <label for="icon_telephone">Image</label>
            </div>
            <div className="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input type="tel" name="phoneNumber" className="validate" value={phoneNumber} />
                <br />
                <label for="icon_telephone">Telephone</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s2">
                Street Number <input type="number" name="streetNumber" value={streetNumber} />
                <br />
            </div>
            <div className="input-field col s2">
                Street <input type="text" name="street" value={street} />
                <br />
            </div>
            <div className="input-field col s2">
                City <input type="text" name="city" value={city} />
                <br />
            </div>
            <div className="input-field col s3">
                State <input type="text" name="state"value={state} />
            </div>
            <div className="input-field col s2">
                Zip <input type="number" name="zip" value={zip} />
            </div>
            </div>
            <button
            class="btn waves-effect waves-light red darken-2"
            type="submit"
            name="action"
            >
            Make This Date Night Better
            <i class="material-icons right ">send</i>
            </button>
        </form>
        </div>
                    {/* <form action={`/dates/${date._id}?_method=PUT`} method="POST">
                Name: <input className="form-control" type="text" name="name" value={name} /><br/>
                Description: <textarea className='form-control' type="textarea" name="description" rows="3" value={description}></textarea><br/>
                Type: <input type="text" name="type" value={type}/>
                Img: <input type="text" name="img" value={img}/><br/>
                Phone Number:<input type="tel" name="phoneNumber" value={phoneNumber}/><br/>
                <label for="address">Address</label>
                Street Number <input type="number" name="streetNumber" value={streetNumber}/><br/>
                Street <input type="type" name="street" value={street}/><br/>
                City <input type="text" name="city" value={city}/><br/>
                State <input type="text" name="state" value={state}/>
                Zip <input type="number" name="state" value={zip}/>
                <input class="btn" type="submit" name="" value="Create Product"/>
                </form> */}

                </div>
            </Default>
        )
    }
}
module.exports = Edit;