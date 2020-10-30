import React, { Component } from 'react';
import { AgGridColumn, AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import PricingActions from './PricingActions.jsx';

import "../../../node_modules/@ag-grid-community/core/dist/styles/ag-grid.css";
import "../../../node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridApi: null,
      gridColumnApi: null,
      rowData: [
        { name: "MAY PRICING 2020 - NSCLC - FRANCE - PUBLIC", market: "PUBLIC", cycle: "MAY FC 2020", country: "FRANCE", scenario: "BASECASE", lastUpdated: "20 May 2020", description: "Lorem ispum dolor sit amet sed do eiusmod tempor incididun?" },
        { name: "MAY PRICING 2020 - NSCLC - FRANCE - PUBLIC", market: "PUBLIC", cycle: "MAY FC 2020", country: "FRANCE", scenario: "BASECASE", lastUpdated: "20 May 2020", description: "Lorem ispum dolor sit amet sed do eiusmod tempor incididun?" },
        { name: "MAY PRICING 2020 - NSCLC - FRANCE - PUBLIC", market: "PUBLIC", cycle: "MAY FC 2020", country: "FRANCE", scenario: "BASECASE", lastUpdated: "20 May 2020", description: "Lorem ispum dolor sit amet sed do eiusmod tempor incididun?" },
        { name: "MAY PRICING 2020 - NSCLC - FRANCE - PUBLIC", market: "PUBLIC", cycle: "MAY FC 2020", country: "FRANCE", scenario: "BASECASE", lastUpdated: "20 May 2020", description: "Lorem ispum dolor sit amet sed do eiusmod tempor incididun?" }
      ]
    }
  }

  methodFromParent = (cell) => {
    alert('Parent Component Method from ' + cell + '!');
  };

  render() {
    return (
      <div className="ag-theme-alpine" >

        <AgGridReact
          rowData={this.state.rowData}
          modules={AllModules}
          context={{ componentParent: this }}
          domLayout={'autoHeight'}
          frameworkComponents={{ PricingActions: PricingActions }}
        >
          <AgGridColumn headerName="Pricing Name" field="name"></AgGridColumn>
          <AgGridColumn headerName="Market" field="market"></AgGridColumn>
          <AgGridColumn headerName="Cycle" field="cycle"></AgGridColumn>
          <AgGridColumn headerName="Country" field="country"></AgGridColumn>
          <AgGridColumn headerName="Scenario" field="scenario"></AgGridColumn>
          <AgGridColumn headerName="Last Updated" field="lastUpdated"></AgGridColumn>
          <AgGridColumn headerName="Description" field="description"></AgGridColumn>
          <AgGridColumn headerName="ACTIONS" cellRenderer="PricingActions"></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}

export default Pricing;