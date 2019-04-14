import React from 'react'

function AmountBox ({ text, type, results }) {
    return (
        <div className="col-xs-4">
        <div className={`panel panel-${type}`}>
        <div className="panel-heading">{text}</div>
        <div className="panel-body">
          {results}
        </div>
      </div>
        </div>
    );
}

export default AmountBox