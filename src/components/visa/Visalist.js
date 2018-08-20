import React, { Component } from "react";
import ReactDataGrid from 'react-data-grid';
import { Toolbar, Data } from 'react-data-grid-addons';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./Login.css";

export default class Visalist extends Component {
    constructor(props) {
        super(props);

        // this.state = {};

        this._columns = [
            {
                key: 'id',
                name: 'Applicant ID',
                width: 100
            },
            {
                key: 'country',
                name: 'Country',
                filterable: true,
                sortable: true
            },
            {
                key: 'visaType',
                name: 'Visa Type',
                filterable: true,
                sortable: true
            },
            {
                key: 'issueType',
                name: 'Apply Finalized',
                filterable: true,
                sortable: true
            },
            {
                key: 'apply',
                name: 'Apply Granted',
                filterable: true,
                sortable: true
            },
            {
                key: 'startDate',
                name: 'Granted Date',
                filterable: true,
                sortable: true
            }
        ];

        this.state = { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null };
    }

    getRandomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
    };

    createRows = (numberOfRows) => {
        let rows = [];
        for (let i = 1; i < numberOfRows; i++) {
            rows.push({
                id: i,
                task: 'Task ' + i,
                country: ['Australia', 'United States', 'India', 'United Kingdom'][Math.floor((Math.random() * 3) + 1)],
                visaType: ['Work visa', 'Temporary entry visas', 'Visitor visa', 'Business visa', 'Student visa', 'Permanent entry visa'][Math.floor((Math.random() * 5) + 1)],
                priority: Math.min(100, Math.round(Math.random() * 110)),
                issueType: ['None', 'NA'][Math.floor((Math.random()) + 1)],
                apply: ['Approved', 'Pending', 'Rejected'][Math.floor((Math.random() * 2) + 1)],
                startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
                completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
            });
        }
        return rows;
    };

    getRows = () => {
        var rows = Data.Selectors.getRows(this.state);
        return rows;
    };

    getSize = () => {
        return this.getRows().length;
    };

    rowGetter = (rowIdx) => {
        const rows = this.getRows();
        return rows[rowIdx];
    };

    handleGridSort = (sortColumn, sortDirection) => {
        this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
    };

    handleFilterChange = (filter) => {
        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }

        this.setState({ filters: newFilters });
    };

    onClearFilters = () => {
        this.setState({ filters: {} });
    };

    render() {
        return (
            <div>
                <Link to="/create">
                    <Button bsStyle="primary">Create New</Button>
                </Link>
                <Link to="/">
                    <Button bsStyle="primary">Logout</Button>
                </Link>
                <ReactDataGrid
                    onGridSort={this.handleGridSort}
                    enableCellSelect={true}
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.getSize()}
                    minHeight={500}
                    toolbar={<Toolbar enableFilter={true} />}
                    onAddFilter={this.handleFilterChange}
                    onClearFilters={this.onClearFilters} />
            </div>
        );
    }
}