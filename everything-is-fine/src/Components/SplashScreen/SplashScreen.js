import React, { Component } from 'react';
import Typist from 'react-typist';
import '../../../node_modules/react-typist/dist/Typist.css';
import './SplashScreen.css';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            <Typist>
                <h1 className="splash-text">
                    this website is perfect!
                    <Typist.Backspace count={8} delay={250} />
                    amazing?
                    <Typist.Backspace count={8} delay={250} />
                    fine.
                </h1>
            </Typist>
            {/* <div className="loading-dot">.</div> */}
        </div>
    );
}

function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 6000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            if (this.state.loading) return LoadingMessage();

            return <WrappedComponent {...this.props} />;
        }
    };
}

export default SplashScreen;
