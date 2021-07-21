import React, { useState } from "react";
import { ITEMS_LIST, TABLE_HEADERS } from "../../utils/constants";
import './demographicTable.css';
const DemographicTable = (props) => {
    const { userData, usersAge } = props;
    const [selectedValue, setSelectedValue] = useState("");
    const [rowData, setRowData] = useState([]);

    const onChangeOfVal = (event) => {
        setSelectedValue(event.target.value);
        const tempData = userData.filter((val)=>Object.keys(usersAge).filter((val) => usersAge[val].includes(event.target.value)).includes(val.username));
        const secondTempData = tempData.reduce((value, currentValue) => 
        {
            const age = `${currentValue.age}`;
            !value[age] ? value[age] = { ...currentValue, count: 1 } : value[age].count++;
            return value;
        }, {});
        setRowData(Object.values(secondTempData));
    }

    return (
        <>
            <div className="top-container">
                <h2>Age Demographic of Users with __</h2>
                <select
                    placeholder="users"
                    value={selectedValue}
                    onChange={onChangeOfVal}>
                    {ITEMS_LIST && ITEMS_LIST.map((item, index) =>
                        <option value={item.value} key={index}>{item.value}</option>
                    )}
                </select>
            </div>
            <div className="bottom-container">
                <table>
                    <tbody>
                        <tr>{TABLE_HEADERS.map((header,key)=><td key={header+key}>{header}</td>)}</tr>
                        {rowData && rowData.map((data, index) => {
                            return (<tr key={'tr_'+index}>
                                <td>{data.age}</td>
                                <td>{data.count}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default DemographicTable;