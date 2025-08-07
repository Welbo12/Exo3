import React from 'react'

type buttonProps= {
     className?:string
    label?:string
    onClick?:()=>void
    type?:'button'|'submit'|'reset'
}
const Botton:React.FC<buttonProps>=({label,className="",onClick,type="button"})=> {
    return (
        <div>
            <button className={className} type={type} onClick={onClick}>{label}</button>
        </div>

  )
}

export default Botton 