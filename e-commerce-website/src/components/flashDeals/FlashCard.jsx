import React from 'react'
import Slider from "react-slick";
const NextArrow = (props) =>{
  const {onClick}=props
  return <div className='control-btn' onClick={onClick}>
         <button className='next'>
          <i className='fa fa-long-arow-alt-right'></i>

         </button>
  </div>
}
const PrevArrow = (props) =>{
  const {onClick}=props
  return <div className='control-btn' onClick={onClick}>
         <button className='prev'>
          <i className='fa fa-long-arow-alt-left'></i>

         </button>
  </div>
}
const FlashCard = ({productItems}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  }
  return (
    <>
   <Slider {...settings}>
    {productItems.map((productItems)=> {
      return(
      <div className="box">
        <div className="product mtop">
         <div className='img'>
            <span className='discount'>{productItems.discount}% Off</span>
            <img src={productItems.cover} alt=''/>
            <div className="product-like">
                <label>0</label> <br />
                <i className='fa fa-heart'></i>
            </div>
            </div> 
            <div className="product-details">
                <h3>{productItems.name}</h3>
                <div className="rate">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
                <div className="price"></div>
                <h4>{productItems.price}.00</h4>
                <button>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>
      </div>
      ) 
    })}
    </Slider>
    </>
  )
}

export default FlashCard
