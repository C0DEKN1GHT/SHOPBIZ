import React from 'react'
import useAxios from '../Hooks/useAxios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList() {


    const Response = useAxios("/product/product-list?page_no=1")

    console.log(Response);

    const render = Response.products?.map((element) => {

        const { product_image, product_name, product_price, product_id, product_description } = element

        if (product_name !=="Colavita") {
            return (
                
                <div className="card" style={{ width: "38vh", height: "45vh", padding: "10px", backgroundColor: "#F0F0F0", border: '5px solid white' }} key={product_id}>
                    <img className="card-img-top" style={{ width: "23vh", display: "block", marginLeft: "auto", marginRight: "auto" }} src={product_image} alt="Card image cap" />
                    <div className="card-body">
                    </div>
                    <h5 className="card-title" style={{ color: "black", textTransform: "uppercase" }}>{product_name}<spa></spa></h5>
                    <span className="card-text" style={{ color: "black" }} >ABOUT:{product_description}</span>
                    <p className="card-text" style={{ color: "black", textTransform: "uppercase" }}> Product price:{product_price}<button className='btn btn-info' style={{position:"relative",left:"30px",color:"white"}}>Add to Cart</button></p>
                    
                </div>
                
            )
        }
    });
    return (
        <>
            <div style={{ backgroundColor: "#00ff00", height: "50px", border: '5px solid white' }} >
                <p style={{ color: "white", position: "relative", top: "-1px", fontSize: "30px", left: "1%" }}>RECOMMENDED PRODUCT LIST</p>
            </div>
            <div className='d-flex flex-wrap'>{render}</div>
        </>
    )
}
