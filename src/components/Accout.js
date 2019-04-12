import React, { Component } from 'react';


class Account extends Component {
  
  render() {
    console.log(this.props);
    return (
      <tr key={this.props.item.id}>
        <td>{ this.props.item.date }</td>
        <td>{ this.props.item.title }</td>
        <td>{ this.props.item.accout }</td>
      </tr>
    );
  }
}

export default Account;
