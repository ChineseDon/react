import React, { Component } from 'react';
import Account from './Accout'

class Accounts extends Component {

  constructor() {
    super();
    this.state = {
      records: [
        {"id": 1,"date": "2019-04-12", "title": "收入", "accout": 20},
        {"id": 2, "date": "2019-04-12", "title": "收入", "accout": 20}
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Border</h2>
        <table className="table table-bordered">
          <thead>
						<tr>
							<th>Date</th>
							<th>Title</th>
							<th>Accounts</th>
						</tr>
          </thead>
					<tbody>
              { this.state.records.map((item, index) => <Account item={item} index={index}/>) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Accounts;
