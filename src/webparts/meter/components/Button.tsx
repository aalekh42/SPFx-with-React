import * as React from 'react';

interface Props{
    btnName:string;
}
const UploadButton:React.FC<Props>=({btnName})=>{
    return(
        <>
            <button className='btn btn-primary'>{btnName}</button>
        </>
    )
}

export default UploadButton;