import React, { Component } from 'react';
import * as RecordAPI from './../api/records'

class Account extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false
    }
  }

  handleEdit (event) {
    event.preventDefault();
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  handleDelete (event) {
    RecordAPI.del(this.props.item.id).then(res => {
      this.props.handleDelete(this.props.item.id)      
    }).catch(err => {
      console.log(err);
    })
  }

  Update(event) {
    event.preventDefault();
    let record = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      accounts: Number.parseInt(this.refs.accounts.value)
    }

    console.log(record);
    RecordAPI.update(this.props.item.id, record).then(res => {
      console.log(res);
        this.props.updateRecord(res.data);
        this.setState({
          isEdit: false
        })
    }).catch(err => {
      console.log(err)
    })
  }

  recordRow () {
    return (
      <tr>
        <td>{ this.props.item.date }</td>
        <td>{ this.props.item.title }</td>
        <td>{ this.props.item.accounts }</td>
        <td>
          <button className="btn btn-info" style={ {marginRight: '10px'} } onClick={this.handleEdit.bind(this)}>Edit</button>
          <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
        </td>
      </tr>
    );
  }

  recordForm() {
    return (
      <tr>
        <td>
          <input type="text" className="form-control" defaultValue={this.props.item.date} required="required" ref="date" />
        </td>
        <td>
          <input type="text" className="form-control" defaultValue={this.props.item.title} required="required" ref="title" />
        </td>
        <td>
          <input type="Number" className="form-control" defaultValue={this.props.item.accounts} required="required" ref="accounts" />
        </td>
        <td>
          <button className="btn btn-info" style={ {marginRight: '10px'} } onClick={this.Update.bind(this)}>Update</button>
          <button className="btn btn-danger" onClick={this.handleEdit.bind(this)}>Cancel</button>
        </td>
      </tr>
    );
  }
  
  render() {
    // console.log(this.props);
    if( this.state.isEdit ) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  }
}

export default Account;
