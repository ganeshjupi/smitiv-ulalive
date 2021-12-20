import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class OTPView extends Component {
    state = { otp: '' };

    handleChange = (otp) => {
        this.setState({ otp });
        this.props.onChange(otp);
    }

    render() {
        return (
            <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={4}
                separator={<span></span>}
                containerStyle={{ justifyContent: "spaceBetween" }}
            />
        );
    }
}