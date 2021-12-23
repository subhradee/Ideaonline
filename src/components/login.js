import axios from "axios";
import React, { useState } from "react";
import "./log-in.css";

const Login = () => {
	const [state, setState] = useState({ username: "", password: "" });
	const [loginreq, setLoginreq] = useState(`Sign into your account`);
	var arr = { access: null, error: false, refresh: null };
	async function loginSubmit() {
		const res = await axios
			.post("http://127.0.0.1:8000/gettoken/", { ...state })

			.then((response) => {
				console.log(response.data);
				arr.access = response.data.access;
				arr.refresh = response.data.refresh;
			})
			.catch((error) => {
				console.log({ error: true });
				// setInfo({ error: true });
				arr.error = true;
				setLoginreq("Invalid Username or Password");
			});
		console.log("done");
		check();
	}
	async function check() {
		if (arr.error == false && arr.access) {
			var res = await axios
				.post("http://127.0.0.1:8000/verifytoken/", { token: arr.access })
				.then((res) => {
					localStorage.setItem("username", state.username);
					window.location.href = "http://localhost:3000/";
				});
		}
	}
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
							<h4>{loginreq}</h4>

							<div>
								<div class="flexcol-2">
									<input
										type="text"
										value={state.username}
										class="form"
										placeholder="Username"
										onChange={(e) => {
											setState((prev) => {
												return { ...prev, username: e.target.value };
											});
										}}
									/>
								</div>
							</div>
							<div>
								<div class="flexcol-2">
									<input
										type="password"
										value={state.password}
										class="form"
										placeholder="******"
										onChange={(e) => {
											setState((prev) => {
												return { ...prev, password: e.target.value };
											});
										}}
									/>
								</div>
							</div>
							<div>
								<div class="flexcol-2">
									<button type="submit" class="btn1" onClick={loginSubmit}>
										Login
									</button>
								</div>
							</div>
							<a href="#">Forgot password</a>
							<p>
								Don't have an account?<a href="#">Register here</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
