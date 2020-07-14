import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-9 mx-auto text-center text-title">
                <h1 className="text-capitalize font-weight-bold">{name} <strong>{title}</strong></h1>
            </div>            
        </div>
    )
}
