import axios from "axios";
import React, { useState } from "react";
import "./log-in.css";
import $, { getJSON } from "jquery";
import { useEffect } from "react";
const Signup = () => {
	const [state, setstate] = useState({ username: "", email: "", password: "" });
	async function submitHandler() {
		try {
			const res = await axios.post("http://127.0.0.1:8000/user/", { ...state });
			console.log(res.data);
			setstate({ username: "", email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<section className=" section">
				<div className=" container">
					<div className="row orange">
						<div className="flexcol-1">
							<img
								src="	https://source.unsplash.com/720x1050/?social"
								alt="Oops"
							/>
						</div>
						<div className=" flexcol-2 headings2 ">
							<h1>IDEA</h1>
							<h4>Create your account</h4>
							<div>
								<input
									id="email"
									name="email"
									type="email"
									value={state.email}
									onChange={(e) => {
										const { value } = e.target;
										setstate((prev) => ({ ...prev, email: value }));
									}}
									className=" form "
									placeholder="Email address"
								/>
							</div>
							<div>
								<input
									name="username"
									id="username"
									type="text"
									value={state.username}
									onChange={(e) => {
										const { value } = e.target;
										setstate((prev) => ({ ...prev, username: value }));
									}}
									className="form "
									placeholder="Username"
								/>
							</div>
							<div>
								<input
									name="password"
									id="password"
									type="password"
									value={state.password}
									onChange={(e) => {
										const { value } = e.target;
										setstate((prev) => ({ ...prev, password: value }));
									}}
									className=" form "
									placeholder="Password"
								/>
							</div>
							<div>
								<input
									type="password"
									className=" form "
									placeholder="Confirm password"
								/>
							</div>
							<div>
								<button
									type="submit"
									className="btn2 h4"
									onClick={submitHandler}
								>
									Create account
								</button>
							</div>

							<a className="small" href="#">
								Forgot password
							</a>
							<p className="small">
								Don't have an account?
								<a className="small" href="/signup">
									Register here
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
