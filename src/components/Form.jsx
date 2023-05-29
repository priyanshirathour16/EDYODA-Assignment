import React from 'react'
import './Form.css'
import pay from './image/pay.png'

export default function Form() {

    const fun1 = ()=>{
        document.getElementById('plan').innerHTML="&#8377;"+'179';
        document.getElementById('totalamount').innerHTML= "&#8377;"+ eval(179 +149);
    }
    const fun2 = ()=>{
        document.getElementById('plan').innerHTML="&#8377;"+'149';
        document.getElementById('totalamount').innerHTML="&#8377;"+ eval(149 + 149);
    }
    const fun3 = ()=>{
        document.getElementById('plan').innerHTML="&#8377;"+'99';
        document.getElementById('totalamount').innerHTML="&#8377;"+ eval(99 +149);
    }
    
 return (
    <>
    
      <div className='form'>
         <div className='component1'>
           <div className='div1'><p className='sign'>1</p> Sign up</div>
           <div className='div2'><p className='sign'>2</p> subscribe</div>
         </div>
         <div className='component2'>
            Select your subscription plan
         </div>
         <div className='component3'>
           <span className='offer'>offer expired</span>
            <div className='text-feild'>
                <input type = "radio" className='radio-box' value="yellow" id='yellow' name="radio" disabled/>
        
                <div className='text-container'>
                    <div className='left-text'>
                        12 Months subscription
                    </div>
                    <div className=' right-text'>
                        <p className='rupee' id="less">Total &#8377; 99</p>
                        <p className='month'>&#8377; 8 /mo</p>
                    </div>
                </div>
            </div>
         </div>


         <div className='component4'>
           <span className='offer1'>Recommended</span>
            <div className='text-feild'>
                <input type = "radio" name="radio" className='radio-box' value="yellow" id='hlo' onClick={window.onload = function(){
                    fun1(this);
                }}/>
        
                <div className='text-container1'>
                    <div className='left-text'>
                        12 Months subscription
                    </div>
                    <div className=' right-text'>
                    <p className='rupee'>Total &#8377; 179</p>
                        <p className='month'>&#8377; 15 /mo</p>
                    </div>
                </div>
            </div>
         </div>


         <div className='component3'>
            <div className='text-feild'>
                <input type = "radio" name="radio" className='radio-box' value="yellow" id='yellow' onClick={window.onload = function(){
                    fun2();
                }}/>
        
                <div className='text-container1'>
                    <div className='left-text'>
                        6 Months subscription
                    </div>
                    <div className=' right-text'>
                        <p className='rupee'>Total &#8377; 149</p>
                        <p className='month'>&#8377; 25 /mo</p>
                    </div>
                </div>
            </div>
         </div>


         <div className='component3'>
            <div className='text-feild'>
                <input type = "radio" name= "radio" className='radio-box' value="yellow" id='yellow'onClick={window.onload = function(){
                    fun3();
                }}/>
        
                <div className='text-container1'>
                    <div className='left-text'>
                        3 Months subscription
                    </div>
                    <div className=' right-text'>
                        <p className='rupee'>Total &#8377; 99</p>
                        <p className='month'>&#8377; 33 /mo</p>
                    </div>
                </div>
            </div>
         </div>

         <div className='sub-container'>
             <div className='sub-fee'>
                <div className='sub'>Subscription Fee</div>
                <div className='fee'>&#8377; 18,500</div>
             </div>
             <div className='limited-offer'>
                <div className='offering-wall'>
                   <div className='lim-off'>Limited time offer</div>
                   <div className='less-amount'>-18,401</div>
                </div>
                <div className='validity'>
                    Offer valid till 25th March 2023
                </div>
             </div>
             <div className='total'>
                <div className=' total-text'>
                    Total (Incl. of 18% GST)
                </div>
                <div className='payment'>
                    &#8377; 149
                </div>
             </div>
             <div className='total'>
                <div className=' total-text'>
                    Selected Plan
                </div>
                <div className='payment' id="plan">
                    &#8377; 0
                </div>
             </div>

             <div className='total'>
                <div className=' total-text'>
                    TotalPay Amount
                </div>
                <div className='payment' id="totalamount">
                    &#8377; 0
                </div>
             </div>
         </div>

         <div  className='paynow'>
            <div className='cancel'>
                Cancel
            </div>
            <div className='proceed'>
                proceed to pay
            </div>
         </div>

    <div className='logo'>
        <img src={pay} alt="" className='logo-img'
        />
    </div>



      </div>

    </>
  )
}
