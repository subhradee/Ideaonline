import React from "react";
import "./log-in.css";

const Login = () => {
	return (
		<>
			<section class="section">
				<div class="container">
					<div class="row orange">
						<div class="flexcol-1">
							<img
								src="https://source.unsplash.com/720x930/?social"
								alt="Oops"
							/>
						</div>
						<div class="flexcol-2 headings">
							<h1>IDEA</h1>
							<h4>Sign into your account</h4>
							<form>
								<div>
									<div class="flexcol-2">
										<input type="text" class="form" placeholder="Username" />
									</div>
								</div>
								<div>
									<div class="flexcol-2">
										<input type="password" class="form" placeholder="******" />
									</div>
								</div>
								<div>
									<div class="flexcol-2">
										<button type="submit" class="btn1">
											Login
										</button>
									</div>
								</div>
								<a href="#">Forgot password</a>
								<p>
									Don't have an account?<a href="#">Register here</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
