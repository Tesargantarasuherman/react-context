import React, { useReducer } from 'react'
const initialState = {
    jumlah :1,
    harga_satuan : 10000,
    harga_total :0
}
const reducer = (state, action) => {
    switch (action){
        case 'tambah' : return {
            ...state,
            jumlah:state.jumlah + 1

        }
        case 'kurang' : return {
            jumlah:state.jumlah - 1
        }
        default:
            return state
    }
}

    export default function HookReducer() {
        const [count,dispatch] = useReducer(reducer,initialState)
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Acer</h5>
                    <p className="card-text">Rp, 7.000.000</p>
                    <div className="row">
                        <div className="col-md-4">
                            <button className="btn btn-danger" onClick={()=>dispatch('tambah')}>+</button>
                        </div>
                        <div className="col-md-4">
                        <button className="btn btn-primary">{count.jumlah <0 ? 0 :count.jumlah}</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-white" onClick={()=>dispatch('kurang')}>-</button>

                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-success">
                                Total Rp. 10000000
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
