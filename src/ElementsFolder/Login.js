import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
    <div class="bg-img">
		<div class="content" style={{marginTop:'60px'}}>
			<header style={{paddingTop:'-50px'}}>Login Form</header>
			<form action="#">
				<div class="field">
					<span class="fa fa-user"></span>
					<input type="text" required placeholder="Email or Phone"/>
				</div>

				<div class="field space">
					<span class="fa fa-lock"></span>
					<input type="password" class="pass-key"required placeholder="Password"/>
					<span class="show">SHOW</span>
				</div>

				<div class="pass">
					<a href="#">Forgot Password?</a>
				</div>

				<div class="field">
					<input type="submit" value="LOGIN" onclick="location.href='thankYou.html'"/ >
				</div>
			</form>

			<div class="login">Or login with</div>
			<div class="links">
				<div class="facebook">
					<i class="fab fa-facebook-f"><span>Facebook</span></i>
				</div>

				<div class="instagram">
					<i class="fab fa-instagram"><span>Instagram</span></i>
				</div>

			</div>

			<div class="signup">
				Don't have account?
				<a href="SignForm.html"><b>Signup Now</b></a>
			</div>
		</div>
	</div>
    </>
  )
}

export default Login