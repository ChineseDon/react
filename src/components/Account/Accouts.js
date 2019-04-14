import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Account from './Accout';
import APP from './../App/App'
import AccountAddForm from './AccountAddForm';
import AmountBox from './AmountBox'
import * as RecordsAPI from '../../api/records';

class Accounts extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      records: []
    }
  }

  componentDidMount () {
    RecordsAPI.getAll().then((res) => {
      this.setState({
        records: res.data
      })
    })
  }

  // 添加数据
  handleAddRecords(record) {
    console.log(record);
    this.setState({
      records: [
        ...this.state.records,
        record
      ]
    });
    
  }

  // 更新
  handleUpdateRecord(record) {
    console.log(record)
    let records = this.state.records.map(item => {
      console.log(item.id)
      if(item.id === record.id) {
        console.log(record)
        return record;
      }else {
        return item;
      }
    })
    this.setState({
      records
    }, function() {
      console.log(this.state.records)
    })
  }

  // 删除数据
  handleDelRecord(id) {
    let records = this.state.records.filter(item => {
      console.log(item.id, id)
      return item.id !== id;
    })
    this.setState({
      records
    })
  }

  // 计算收支
  Credits () {
    let record = this.state.records.filter(item => {
      return item.accounts >= 0
    })

    return record.reduce((cur, pre) => {
      return cur + parseInt(pre.accounts)
    }, 0)
  }

  Debits() {
    let record = this.state.records.filter(item => {
      return item.accounts < 0
    })

    return record.reduce((cur, pre) => {
      return cur + parseInt(pre.accounts)
    }, 0)
  }

  Balance(){
    return this.Credits() + this.Debits()
  }

  render() {
    return (
      <div>
        <h1>
          <Router>
            <Link to="/app">APP</Link>
            <Route path="/app"  component={APP} />
          </Router>
        </h1>
        <h2>Border</h2>
        <div className="row col-3">
          <AmountBox text="Credits" type="success" results={this.Credits()}/>
          <AmountBox text="Debits" type="danger" results={this.Debits()}/>
          <AmountBox text="Balance" type="info" results={this.Balance()}/>
        </div>
        <AccountAddForm handleNewAccount={this.handleAddRecords.bind(this)} />
        <hr />
        <table className="table table-bordered">
          <thead>
						<tr>
							<th>Date</th>
							<th>Title</th>
              <th>Accounts</th>
              <th>Actions</th>
						</tr>
          </thead>
					<tbody>
              { this.state.records.map((item, index) => <Account handleDelete={this.handleDelRecord.bind(this)} updateRecord={this.handleUpdateRecord.bind(this)} item={item} key={index} />) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Accounts;
