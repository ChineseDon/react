import React, { Component } from 'react';
import * as RecordsAPI from '../../api/records';

class AccountAddForm extends Component {
  constructor() {
    super();
    this.state = {
        date: "",
        title: "",
        accounts: ""
    }
  }

  isValid () {
      return this.state.date && this.state.title && this.state.accounts;
  }

  handleAddRecords(event) {
    event.preventDefault();
    RecordsAPI.add({...this.state, "accounts": Number.parseInt(this.state.accounts) }).then(res => {
        console.log(res);
        this.props.handleNewAccount(res.data);
        console.log("添加完成")
        // 清空数据
        this.setState({
            date: "",
            title: "",
            accounts: ""
        })
    }).catch(err => console.log(err))
  }

  handleFromData(event) {
      let name = event.target.name, obj;
      this.setState((
          obj = {},
          obj["" + name] = this.refs[name].value,
          obj
        ))
  }
  
  render() {
    return (
      <div className="row">
        <form className="form-inline" onSubmit={this.handleAddRecords.bind(this)}>
            <div className="form-group" style={{margin: '0 20px'}}>
                <label htmlFor="date">date</label>
                <input type="text" name="date" id="date" className="form-control" ref="date" value={this.state.date} placeholder="date"  onChange={this.handleFromData.bind(this)}/> 
            </div>
            <div className="form-group" style={{margin: '20px'}}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" className="form-control" ref="title" value={this.state.title} placeholder="title" onChange={this.handleFromData.bind(this)}/> 
            </div>
            <div className="form-group" style={{margin: '20px'}}>
                <label htmlFor="accounts">accounts</label>
                <input type="number" name="accounts" id="accounts" className="form-control" ref="accounts" value={this.state.accounts} placeholder="accounts" onChange={this.handleFromData.bind(this)}/> 
            </div>
            <button type="submit" className="btn btn-primary" disabled={!this.isValid()}>Add</button>
        </form>
      </div>
    );
  }
}

export default AccountAddForm;
