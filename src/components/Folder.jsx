import React from 'react'
import useFolder from '../hooks/useFolder'

function Folder({data}) {
const {initialData, expand, setExpand} = useFolder(data);

if(initialData?.isFolder){
  return (
    <div>
        <div onClick={()=>setExpand(prev => !prev)}>📁 {initialData.name}</div>
        <div style={{display: expand ? 'block' : 'none', marginLeft:'10px'}}>
            {initialData?.items?.map((item)=>{
                return <Folder data={item}/>
            })}
        </div>
    </div>
  )} else {
    return <div>📄 {initialData?.name}</div>
  }
}

export default Folder