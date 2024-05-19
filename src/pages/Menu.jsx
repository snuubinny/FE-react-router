import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate=useNavigate();

  const [brandname,setbrandname]=useState('');

  const handlebrandName=e=>{
    console.log(e.target.value)
    setbrandname(e.target.value)
  }
  
  return (
    <>
        <h1>Menu Page</h1>
        <div>
          <input onChange={handlebrandName}></input>
          <button
           onClick={()=>navigate(`/product/${brandname}`)}>브랜드 페이지로 이동</button>
        </div>
    </>
  );
}

export default Menu;