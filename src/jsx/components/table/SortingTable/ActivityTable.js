import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import PageTitle from "../../../layouts/PageTitle";
import MOCK_DATA from './MOCK_DATA_4.json';
import { COLUMNS } from './Activity_Columns.js';
import ActivityTableRow from './ActivityTableRow';
//import './table.css';

export const ActivityTable = (props) => {

  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])
  const data = props.data;

  const tableInstance = useTable({ columns, data },
    useSortBy
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <>
      {/* <PageTitle activeMenu="Sorting" motherMenu="Table" /> */}
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <div className="dataTables_wrapper">
              <table {...getTableProps()} className="table dataTable display">
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          <span className="ml-1">
                            {column.isSorted ? (column.isSortedDesc ? <i className="fa fa-arrow-down" /> : <i className="fa fa-arrow-up" />) : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>

                  {rows.map((row, index) => {
                    prepareRow(row)
                    return (
                      <ActivityTableRow key={index} index={index} row={row}></ActivityTableRow>
                    )
                  })}
                </tbody>
                {/* This is only for footer if u require */}
                {/* <tfoot>
									{footerGroups.map(footerGroup => (
										<tr {...footerGroup.getFooterGroupProps()}>
											{footerGroup.headers.map(column => (
												<td {...column.getFooterProps()}>{column.render('Footer')}</td>
											))}
										</tr>
									))}
								</tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default ActivityTable;