import React from "react";

class TransactionList extends React.Component{
    
    getAmount = products => {
        let total = 0
        products.map(it => {
            total += Number(it.hargaProduk) * Number(it.qty)
        })
        return total
    }
 
    convertTime = tanggalTransaksi => {
        let date = new Date(tanggalTransaksi)
        return `${date.getDate()}/${Number(date.getMonth()) + 1}/${date.getFullYear()}`
    }
    render(){
        return (
            <div>
                {/* list */}
                <div className="card col-sm-12 my-1">
                    <div className="card-body row">
                        <div className="col-lg-4 col-sm-12">
                            <small className="text-info">Customer</small>
                            <h6>{this.props.namaUser}</h6>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <small className="text-info">Address</small>
                            <h6>{this.props.alamatUser}</h6>
                        </div>
                        <div className="col-lg-2 col-sm-12">
                            <small className="text-info">Total Amount</small>
                            <h6 className="text-danger">Rp { this.getAmount(this.props.products) }</h6>
                        </div>
                        <div className="col-lg-2 col-sm-12">
                            <small className="text-bold text-info">
                                tanggalTransaksi: { this.convertTime(this.props.tanggalTransaksi) }
                            </small>
                            <button className="btn btn-sm btn-block btn-success" data-toggle="modal" data-target={`#modalDetail${this.props.idTransaksi}`}>
                                Details
                            </button>
                        </div>
                    </div>
                </div>
 
                {/* modal component */}
                <div className="modal" id={`modalDetail${this.props.idTransaksi}`}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Detail of Transaction</h5>
                            </div>
                            <div className="modal-body">
                                <h5>Customer:{this.props.namaUser}</h5>
                                <h6>Time:{this.convertTime(this.props.tanggalTransaksi) }</h6>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
 
                                    <tbody>
                                        { this.props.products.map((item, index) => (
                                            <tr key={item.idProduk}>
                                                <td>{`${index + 1}`}</td>
                                                <td>{item.product.namaProduk}</td>
                                                <td>Rp {item.hargaProduk}</td>
                                                <td>{item.qty}</td>
                                                <td className="text-right">Rp {item.price * item.qty}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan="4" className="text-danger text-bold">
                                                <h4>Total</h4>
                                            </td>
                                            <td className="text-right text-danger text-bold">
                                                <h4>
                                                Rp { this.getAmount(this.props.products) }
                                                </h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TransactionList;
