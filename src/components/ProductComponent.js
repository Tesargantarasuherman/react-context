import React from 'react'
import RowProduct from './RowProduct'

export default function ProductComponent() {
    return (
        <div>
            <hr/>
            <h2>Produk</h2>
            <div className="row">
                <RowProduct />
                <RowProduct />
                <RowProduct />
            </div>
        </div>
    )
}
