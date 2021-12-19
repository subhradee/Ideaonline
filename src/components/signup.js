import axios from "axios";
import React from "react";
import "./log-in.css";
import $ from "jquery";
const Signup = () => {
	function clickmethod() {
		// var firstName = $("#firstName").val();
		// var lastName = $("#lastName").val();
		// var email = $("#email").val();
		// var location = $("#location").val();
		// var department = $("#department").val();
		// var designation = $("#designation").val();
		// var role = $("#role").val();
		var userName = $("#username").val();
		var password = $("#password").val();
		var email = $("#email").val();
		var data_uri =
			"{" +
			'"email":"' +
			email +
			'",' +
			'"username":"' +
			userName +
			'",' +
			'"password":"' +
			password +
			'"' +
			"}";
		console.log(data_uri);
		$.ajax({
			url: "http://127.0.0.1:8000/user/",
			type: "POST", // http method
			data: data_uri, // data to submit
			//headers: {  'Access-Control-Allow-Origin': '*'},
			crossDomain: true,
			//dataType: 'jsonp',
			contentType: "application/json; charset=utf-8",
			success: function (data, status, xhr) {
				//alert(data);
				alert(status);
				//$('p').append('status: ' + status + ', data: ' + data);
			},
			error: function (jqXhr, textStatus, errorMessage) {
				alert(errorMessage);
				//$('p').append('Error' + errorMessage);
			},
		});
	}

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
							<h1>IDEA</h1>
							<h4>Create your account</h4>
							<form action="http://127.0.0.1:8000/user/" method="post">
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
							</form>
							<a class="small" href="#">
								Forgot password
							</a>
							<p class="small">
								Don't have an account?
								<a class="small" href="#">
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
