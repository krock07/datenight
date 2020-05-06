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
                        <img src={`${date.img}`} alt={name}/>
                    </div>
                    <form action={`/dates/${date._id}?_method=PUT`} method="POST">
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
                </form>

                </div>
            </Default>
        )
    }
}
module.exports = Edit;