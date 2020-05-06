const React = require("react");

class Default extends React.Component {
render() {
    return (
    <html>
        <head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        ></link>
        </head>
        <body>
        <header>
            <nav class="nav-extended red darken-4">
            <div class="nav-wrapper">
                <a href="/dates" class="brand-logo left">
                <img src="/images/DATE-NIGHT.png" alt="Date Night Logo" />
                </a>
            </div>
            <div class="nav-content">
                <ul class="tabs tabs-transparent ">
                <li class="tab">
                    <a href="#test1"></a>
                </li>
                <li class="tab">
                    <a class="active" href="#test2"></a>
                </li>
                <li class="tab disabled">
                    <a href="#test3">DATE IDEAS</a>
                </li>
                <li class="tab">
                    <a href="#test4">WELCOME</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="header-image ">
            <img className="responsive-img"
                src="https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt=""
            />
            </div>
        </header>
        {this.props.children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
        ></script>
        </body>
    </html>
    );
}
}

module.exports = Default;
