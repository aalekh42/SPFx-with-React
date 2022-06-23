import * as React from 'react';
interface Props{
    btnName:string;
}
const Button:React.FC<Props>=({btnName})=>{
    return(
        <>
            <button className='btn btn-success'>{btnName}</button>
        </>
    )
}

export default Button;