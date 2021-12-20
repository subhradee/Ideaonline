import axios from "axios";
import React from "react";
import "./log-in.css";
import $ from "jquery";
import { useEffect } from "react";
const Signup = () => {
	useEffect(() => {
		const res = axios.post("http://127.0.0.1:8000/user/", {});
	}, []);
	return (
		<>
			<section class=" section">
				<div class=" container">
					<div class="row orange">
						<div class="flexcol-1">
							<img
								src="	https://source.unsplash.com/720x1050/?social"
								alt="Oops"
							/>
						</div>
						<div class=" flexcol-2 headings2 ">
							<form action="http://127.0.0.1:8000/user/" method="post">
								<h1>IDEA</h1>
								<h4>Create your account</h4>
								<div>
									<input
										id="email"
										name="email"
										type="email"
										class=" form "
										placeholder="Email address"
									/>
								</div>
								<div>
									<input
										name="username"
										id="username"
										type="text"
										class="form "
										placeholder="Username"
									/>
								</div>
								<div>
									<input
										name="password"
										id="password"
										type="password"
										class=" form "
										placeholder="Password"
									/>
								</div>
								<div>
									<input
										type="password"
										class=" form "
										placeholder="Confirm password"
									/>
								</div>
								<div>
									<button type="submit" class="btn2 h4">
										Create account
									</button>
								</div>

								<a class="small" href="#">
									Forgot password
								</a>
								<p class="small">
									Don't have an account?
									<a class="small" href="#">
										Register here
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
