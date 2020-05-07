const React = require('react');
const Default = require('./Default');

class New extends React.Component{ 
    render() {
        return (
<Default>
            <h1>New Product page</h1>
            <form action="/dates" method="POST">
                Name: <input className="form-control" type="text" name="name"/><br/>
                Description: <textarea className='form-control' type="textarea" name="description" rows="3"></textarea><br/>
                Type: <input type="text" name="type"/>
                Img: <input type="text" name="img" value={img}/><br/>
                Phone Number:<input type="tel" name="phoneNumber"/><br/>
                <label for="address">Address</label>
                Street Number <input type="number" name="streetNumber"/><br/>
                Street <input type="type" name="street"/><br/>
                City <input type="text" name="city"/><br/>
                State <input type="text" name="state"/>
                Zip <input type="number" name="state"/>
                <input class="btn" type="submit" name="" value="Add Your Date Night"/>
                </form>
</Default>
        )
    }
}

module.exports = New;