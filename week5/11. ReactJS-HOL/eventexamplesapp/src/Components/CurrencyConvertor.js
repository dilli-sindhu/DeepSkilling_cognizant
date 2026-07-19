import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };

    // Approximate conversion rate (as of this writing) - adjust as needed
    this.conversionRate = 0.011;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Convert button click event
  handleSubmit(event) {
    event.preventDefault();
    const rupeeValue = parseFloat(this.state.rupees);

    if (isNaN(rupeeValue)) {
      alert('Please enter a valid amount in Rupees');
      return;
    }

    const euroValue = (rupeeValue * this.conversionRate).toFixed(2);
    this.setState({ euros: euroValue });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <label>
          Amount in Rupees (₹):
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleSubmit}>Convert</button>

        {this.state.euros !== null && (
          <p>
            ₹{this.state.rupees} = €{this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;