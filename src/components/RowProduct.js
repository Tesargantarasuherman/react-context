import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../CartContex'

function RowProduct() {
    const {value,setValue} = useContext(CartContext)
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Acer</h5>
                <p className="card-text">Rp, 7.000.000</p>
                <button onClick={()=>setValue(value + 1)} className="btn btn-primary">Tambah ke keranjang</button>
            </div>
        </div>
    )
}
export default RowProduct