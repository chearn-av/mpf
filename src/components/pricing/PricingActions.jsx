import React, { Component } from 'react';
import CopyIcon from 'Icons/ic-copy.svg';
import TrashIcon from 'Icons/ic-trash.svg';

export default class PricingActions extends Component {
  constructor(props) {
    super(props);

    this.invokeParentMethod = this.invokeParentMethod.bind(this);
  }

  invokeParentMethod() {
    console.log(this.props.node.rowIndex);
    console.log(this.props.context);
    this.props.context.componentParent.methodFromParent(
      `Row: ${this.props.node.rowIndex}, Col: ${this.props.colDef.headerName}`
    );
  }

  render() {
    return (
      <div>
        <img src={CopyIcon} onClick={this.invokeParentMethod} alt="copy" style={{ height: 24, width: 24 }} />
        <img src={TrashIcon} alt="trash" style={{ height: 24, width: 24 }} />
        {/* <button
          style={{ height: 20, lineHeight: 0.5 }}
          onClick={this.invokeParentMethod}
          className="btn btn-info"
        >
          Invoke Parent
        </button> */}
      </div>
    );
  }
}