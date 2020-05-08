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
        <link rel="stylesheet" href="/styles.css"/>
        </head>
        <body className="site">
        <header>
            <nav class="nav-extended white">
            <div class="nav-wrapper">
                <a href="/dates" class="brand-logo left">
                <img src="/images/DATE-NIGHT.png" alt="Date Night Logo" />
                </a>
            </div>
            <div class="nav-content">
                <div className="row">
                    <div className="col s12">
                <ul class="tabs tabs-transparent ">
                <li class="tab col s3">
                    <a href="#test1"></a>
                </li>
                <li class="tab col s3">
                    <a class="active" href="#test2"></a>
                </li>
                <li class="tab col s3">
                    <a className="black-text text-darken-2" href="/dates/new">DATE IDEAS</a>
                </li>
                <li class="tab col s3">
                    <a className="black-text text-darken-2" href="/dates">WELCOME</a>
                </li>
                </ul>
                </div>
                </div>
            </div>
            </nav>
            <div className="header-image ">
            <img className="responsive-img"
                src="https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt=""
            />
            </div>
        </header>
        <main className="site-content">
        {this.props.children}
        <script src="/js/app.js"></script>
        <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
        
        ></script>
        <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC53g2ClMRLO6AufwQOrDCbhoMv2osaBks&callback=initMap">
    </script>
    </main>
        </body>
       
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about"></div>
                <div className="footer-section links"></div>
            </div>
            <div className="footer-bottom">
                &copy; datenightap.com | Designed by Khoury 'Yoda' Smith
            </div>
        </div>
        
    </html>
    );
}
}

module.exports = Default;
