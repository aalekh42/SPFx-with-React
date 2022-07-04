import * as React from "react";

type ListDataProps = {
  excelData: any;
};
const ListData = (props: ListDataProps) => {
  const columnNames = props.excelData && Object.keys(props.excelData?.[0]);

  return (
    <div className="fluid-container listData-container">
      <div className="row">
        <div className="col-12">
          {/* {console.log("Hey", props.excelData)}
          {props.excelData?.map((elem, index) => {
            console.log("OK",Object.keys(elem))
          })} */}
          {/* <p>{props.excelData && Object.keys(props.excelData?.[0])}</p> */}
          <table>
            <tr>
              {columnNames && columnNames.map((elem, index) => <th>{elem}</th>)}
            </tr>
              {props.excelData?.map((elem, index) => (
                <tr>
                  {/* Static id,name etc keys listed it should be dynamic */}
                  <td>{elem.Id}</td>
                  <td>{elem.Name}</td>
                  <td>{elem.value1}</td>
                  <td>{elem.value2}</td>
                  <td>{elem.sum}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListData;
