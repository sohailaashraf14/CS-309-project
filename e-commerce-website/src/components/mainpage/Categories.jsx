import React from 'react'

const Categories = () => {
    const data=[
        {
        cateImg: "./images/category/hair care icon.png",
        cateName: "Hair-care"   
        },
        {
            cateImg: "./images/category/skincare.png",
            cateName: "Skin-care"   
         },
         {
             cateImg: "./images/category/icons8-oil-64.png",
             cateName: "Body-care"   
         },
         {
            cateImg: "./images/category/icons8-makeup-78.png",
            cateName: "Cosmetics"   
        },
    

    ]
  return (
    <>
   <div className="category">
    {data.map((value,index) =>{
        return(
         <div className="box f_flex" key={index}>
            <img src={value.cateImg} alt='' />
            <span>{value.cateName}</span>
         </div>   
        )
       })
    }
   </div>
    </>
  )
}

export default Categories
