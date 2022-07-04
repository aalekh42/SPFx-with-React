import * as React from "react";
import { JsonToTable } from "react-json-to-table";

type ListData2Props = {
  excelData: any,
};

const ListData2 = (props: ListData2Props) => {
  const { excelData } = props;
  return (
    <div className="fluid-container ListData2-container">
      <div className="row">
        <JsonToTable json={excelData} />
      </div>
    </div>
  );
};

export default ListData2;
