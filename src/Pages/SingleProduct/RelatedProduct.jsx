import React from 'react';
import PlainConsole from '../../assets/Plain-console-small.png';
import Trenton from '../../assets/Trenton-modular-small.png';
import Granite from '../../assets/Granite-table-small.png'
import OutdoorTable from '../../assets/Outdoor-table-small.png';




const RelatedProduct = () => {
    return (

        <div className='product-container'>
            <p>Related Products</p>
            <div className='img-container'>

                <div className='image-wrapper'>
                    <div>
                        <img src={Trenton} alt='sofa' className='responsive-image' />
                    </div>

                    <div className='image-desc'>
                        <p className='title'>Trenton modular sofa_3</p>
                        <p className='price'>RS.25,000.00</p>
                    </div>
                </div>

                <div className='image-wrapper'>
                    <div>
                        <img src={Granite} alt='sofa' className='responsive-image' />
                    </div>

                    <div className='image-desc'>
                        <p className='title'>Granite dining table with dining chair</p>
                        <p className='price'>RS.25,000.00</p>
                    </div>

                </div>

                <div className='image-wrapper'>
                    <div>
                        <img src={OutdoorTable} alt='sofa' className='responsive-image' />
                    </div>

                    <div className='image-desc'>
                        <p className='title'>Outdoor bar table and stool</p>
                        <p className='price'>RS.25,000.00</p>
                    </div>

                </div>

                <div className='image-wrapper'>
                    <div>
                        <img src={PlainConsole} alt='sofa' className='responsive-image' />
                    </div>

                    <div className='image-desc'>
                        <p className='title'>Plain console with teak mirror</p>
                        <p className='price'>RS.25,000.00</p>
                    </div>

                </div>

            </div>

            <div className='product-btn'>
                <button className='btn'><a href='#'>View More</a></button>
            </div>


        </div>

    );
}

export default RelatedProduct;
