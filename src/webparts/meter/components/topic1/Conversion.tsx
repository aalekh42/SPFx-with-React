import * as React from "react";
import * as XLSX from 'xlsx';
import ListData from "./ListData";
import ListData2 from "./ListData2";

const Conversion: React.FC = () => {
  const [excelData,setExcelData]= React.useState(null);
  const [excelFile,setExcelFile]= React.useState(null);
  const [excelFileError,setExcelFileError]= React.useState('');

  console.log("Excel data",excelData);
  //handleFile
  const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
        //console.log(selectedFile.type); //to get fileType 
        if(fileType.includes(selectedFile.type)){
            let reader=new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload=(e)=>{
                setExcelFileError(null);
                setExcelFile(e.target.result)
            }
        }else{
           setExcelFileError("Please select Excel file only");
           setExcelFile(null);
        }
    }else{
        console.log("Please select one file")
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
        //converting excel files to json
        const workbook=XLSX.read(excelFile,{type:'buffer'});
        const worksheetName=workbook.SheetNames[0];//saving excel fileName
        const worksheet=workbook.Sheets[worksheetName];
        const data= XLSX.utils.sheet_to_json(worksheet);//converting to json
        setExcelData(data);
    }else{
        setExcelData(null);
    }
  }
  return (
    <div className="fluid-container conversion-container">
      <div className="row">
        <div className="col-12">
          <h4 style={{ fontWeight: "400", justifyContent: "center" }}>
            WELCOME TO EXCEL/CSV CONVERSION
          </h4>
        </div>

        <div
          className="col-12 form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h6>Upload Excel Files</h6>

          <form onSubmit={(e)=>handleSubmit(e)}>
            <input
              type="file"
              required
              style={{ border: "2px solid green" }}
              onChange={(e)=>handleFile(e)}
            ></input>
            {excelFileError}
            <button type="submit" className="btn btn-danger">
              UPLOAD
            </button>
          </form>
        </div>
      </div> {/* End of upload btn */}

      {/* Start of displaying excel data in list/table */}
      {/* <ListData excelData={excelData}/> */}
      <ListData2 excelData={excelData}/>
    </div>
  );
};

export default Conversion;
