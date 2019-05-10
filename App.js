import React  from 'react';
import './App.css';

function NavLink({ children, link }) {
    return (
        <a href={ link }>{ children }</a>
    )
}

function Navbar({ children }) {
    const mappedChildren = React.Children.map(children, (child) => {
        if (child.props.skip) {
            return;
        }

        return child;
    });
    return (
        <nav>
            { mappedChildren }
        </nav>
    )
}

class Welcome extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isSkipped: true,
            message: <center> Shiva Concept</center>
        }
    }
    
    toggleSkipped = () => {
        this.setState({ isSkipped: !this.state.isSkipped });
    }

    render() {
        const designatedUrl = '#';
        const { message } = this.state;

        return (
            <div className="welcome-container">
                <h1 className="title is-1">
                    { message }
                </h1>
                <div className="nav-container">
                  <center>  <Navbar>
                        <NavLink
                            link={designatedUrl}
                        
                          ><a href="https://www.shivaconceptsolution.com">  Home</a>
                        </NavLink>
                        <NavLink
                            link={designatedUrl}
                        ><ul/>
                         <a href="https://www.shivaconceptsolution.com/about-us"> About</a>
                        </NavLink>
                        
                        <NavLink
                            link={designatedUrl}
                        ><ul/>
                            <a href="https://www.shivaconceptsolution.com/gallery"> Gellary</a>
                        </NavLink>
                        <NavLink
                            link={designatedUrl}
                        ><ul/>
                        <a href="https://www.shivaconceptsolution.com/contact-us"> Contact</a>
                        </NavLink>
                    </Navbar></center>
                    <ul/>
                    
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            message: <center>Shiva Concept</center>
        };
    }

    render() {
        const { message } = this.state;

        return (
            <section className="section app-container">
                <Welcome message={ message } />
            </section>
        );
    }
}
export default App;