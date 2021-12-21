import React from 'react'
import "./log-in.css"
const Signup = () => {
    return (
        <>
          <section class=" section">
    <div class=" container">
        <div class="row orange">
            <div class="flexcol-1">
                <img src="	https://source.unsplash.com/720x1050/?social"  alt="Oops"/>
            </div>
            <div class=" flexcol-2 headings2 " >
                <h1>IDEA</h1>
                <h4>Create your account</h4>
                <form>
                    <div>
 
                            <input type="email" class=" form " placeholder="Email address"/>
                      
                    </div>
                    <div>
                        
                            <input type="text" class="form " placeholder="Username"/>
                     
                    </div>
                    <div>
                        
                            <input type="password" class=" form " placeholder="Password"/>
                     
                    </div>  
                    <div>
                     
                            <input type="password" class=" form " placeholder="Confirm password"/>
                      
                    </div>  
                    <div>
                        
                           <button type="submit" class="btn2 h4" >Create account</button>
                  
                    </div> 
                    <a class="small" href="#">Forgot password</a>
                    <p class="small">Don't have an account?<a class="small" href="#">Register here</a></p>
                </form>
            </div>
        </div>
    </div>
</section>  
        </>
    )
}

export default Signup
