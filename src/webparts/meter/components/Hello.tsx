import * as React from "react";

interface Props{
    name:string;
}
const Hello :React.FC<Props>=({name}) => {
  return (
    <>
        <div className='home-container fluid-container'>
            <div className="col-12">
                    Hello <strong>{name},</strong>Click below btn for upload
                </div>
        </div>
    </>
  )
}

export default Hello;
