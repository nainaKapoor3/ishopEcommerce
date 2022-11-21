import React from 'react'


const Backgrnd = () => {
  return (
    <div style={{paddingTop:'70px'}}>
        <div className="backgrnd" style={{margin:'0px 53px 120px -3px',padding:'none'}}>
            <p style={{color:'white',fontSize:'70px',marginLeft:'180px',paddingTop:'100px'}}>iPhone 6 Plus</p>
            <p style={{color:'white',fontSize:'23px',marginLeft:'180px',marginTop:'-10px'}}> Performance and Design. Taken right to <br/> the edge</p>
        </div>
        <span>
            <img class="phimg" src='https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/River_Page/i11/iPhone_11_Product_Page_Flex_Module_Amazon_Avail_Desktop__en-IN_01._CB640265849_.jpg' />
        </span>


        <div className="feature">
            <div className="con">
                <div><img class="feat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGWCgaoSchxVMdCm4tpJz-BSqgeMaoFs0uA&usqp=CAU"/></div>
                <div className="con1" style={{fontSize:'20px',fontWeight:'500',marginLeft:'-20px'}}>FREE SHIPPING</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </div>
            </div>
            <div className="con">
                <div className="con2"><img class="feat" src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-money-transfer-icon-symbol-currency-exchangefinancial-investment-servicecash-back-refundsend-png-image_448513.jpg"/></div>
                <div className="con1" style={{fontSize:'20px',fontWeight:'500'}}>100% REFUND</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  
                </div>
            </div>
            <div className="con">
                <div className="con3"><img class="feat" src="https://cdn-icons-png.flaticon.com/512/110/110685.png"/></div>
                <div className="con1" style={{fontSize:'20px',fontWeight:'500'}}>SUPPORT 24/7</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  
                </div>
            </div>

        </div>


        <h3 style={{textAlign:'center',fontSize:'30px',marginTop:'110px'}}>FEATURED PRODUCTS</h3>
       
        
    </div>
  )
}

export default Backgrnd