import React from 'react'
import useAxios from '../Hooks/useAxios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function VegList() {

    const Response = useAxios("/product/category-list?page_no=1")
    console.log(Response);

    const render = Response.categories?.map((element) => {

        const { category_id, category_name, category_image } = element

        if (category_id !==33) {
            return (
                <div className="card" style={{ width: "38vh", padding: "15px", height: "18vh", backgroundColor: "#f8f8ff", border: '3px solid lightblue' }} key={category_id}>
                    <img className="card-img-top" style={{ width: "5vh", display: "block", marginLeft: "auto", marginRight: "auto" }} src={category_image} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text" style={{ color: "white" }} ></p>
                    </div>
                    <h5 className="card-title" style={{ color: "black", textAlign: "center", textTransform: "uppercase" }}>{category_name}</h5>
                </div>
            )
        }
    });

    return (
        <>
            <div style={{ backgroundColor: "#00ff00", height: "50px", border: '5px solid white' }} >
                <p style={{ color: "white", position: "relative", top: "-1px", fontSize: "30px", left: "1%" }}> PRODUCT CATEGORY</p>
            </div>
            <div className='d-flex flex-wrap'>{render}</div>
        </>

    )
}
