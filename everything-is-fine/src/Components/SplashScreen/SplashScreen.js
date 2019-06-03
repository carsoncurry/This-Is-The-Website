import React, { Component } from 'react';
import GlitchEffect from 'react-glitch-effect';
import Typist from 'react-typist';
import '../../../node_modules/react-typist/dist/Typist.css';
import './SplashScreen.css';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            <GlitchEffect>
                <Typist>
                    <h1 className="splash-text">
                        this website is always upgrading.
                        <Typist.Backspace count={10} delay={250} />
                        growing.
                        <Typist.Backspace count={8} delay={250} />
                        evolving.
                    </h1>
                </Typist>
            </GlitchEffect>
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
                }, 7500)
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
