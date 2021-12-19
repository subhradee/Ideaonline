import React from "react";
import axios from "axios";
import $ from "jquery";
import { useEffect, useState } from "react";
const Post = () => {
	const [state, setstate] = useState([1]);
	// const url = "http://127.0.0.1:8000/blogs/";
	// const res = fetch(`http://127.0.0.1:8000/blogs/`)
	// 	.then((response) => response.json())
	// 	.then((res) => console.log(res))
	// 	.catch((error) => console.log(error));
	useEffect(() => {
		async function getData() {
			const res = await axios.get(`http://127.0.0.1:8000/blogs/`);
			console.log(res);
		}
		getData();
	});

	// });var options = {
	// function getData() {
	// 	$.ajax({
	// 		url: "http://localhost:8000/blogs/",
	// 		type: "GET", // http method
	// 		// data: data_uri, // data to submit
	// 		// headers: { "Access-Control-Allow-Origin": "*" },
	// 		crossDomain: true,
	// 		// dataType: "jsonp",
	// 		// contentType: "application/json; charset=utf-8",
	// 		success: function (data, status, xhr) {
	// 			//alert(data);
	// 			// alert(status);
	// 			console.log(data);
	// 			//$('p').append('status: ' + status + ', data: ' + data);
	// 		},
	// 		error: function (jqXhr, textStatus, errorMessage) {
	// 			// alert(errorMessage);
	// 			//$('p').append('Error' + errorMessage);
	// 		},
	// 	});
	// }
	// getData();
	return (
		<>
			<div className="postbox">
				<div className="postsec1">
					<div className="imgtitle">
						<img className="avtar" src="./img/avtar.png" alt="" />

						<div className="namesec">
							<div className="name">Someone XYZ</div>
						</div>
					</div>

					<div className="buttonsec">
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>

				<div className="postsec2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					ullam quisquam sed quaerat praesentium ducimus provident, earum illo!
					Corrupti deleniti eaque labore reiciendis consequatur sed dolore nisi
					qui. Temporibus quae commodi iste molestias perspiciatis et,
					cupiditate esse! Ex fugiat fuga accusamus ab repudiandae facere
					maiores quasi tempora quae dignissimos! Eligendi recusandae, vitae
					velit error, dolores doloribus quas alias iste dolorem suscipit,
					officia amet ducimus voluptatem. Excepturi commodi eum odio ipsam quos
					nulla ratione sapiente quo iste soluta optio dolores maiores
					voluptatum ut, consequatur ab. Magni recusandae dolorem repellat illo
					totam sequi expedita! Est ratione consectetur, molestiae temporibus
					rerum amet sed!
				</div>

				<div className="postsec3">
					<div className="postfooter">
						<div className="like">
							<label for="like">
								<img id="likeimg" src="./img/like.png" alt="" />
								<div className="" id="liketxt">
									Appreciate
								</div>
							</label>
							<input type="checkbox" name="like" id="like" />
						</div>

						<div className="comment">
							<img src="./img/comment.png" alt="" />
							<div>Enhance</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;
