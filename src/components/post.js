import React from "react";

const Post = (props) => {
	return (
		<>
			<div>
				<div className="postbox">
					<div className="postsec1">
						<div className="imgtitle">
							<img className="avtar" src="./img/avtar.png" alt="" />

							<div className="namesec">
								<div className="name">{props.value.owner_name}</div>
							</div>
						</div>

						<div className="buttonsec">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>

					<div className="postsec2"> {props.value.desc}</div>

					<div className="postsec3">
						<div className="postfooter">
							<div className="like">
								<label htmlFor="like">
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
			</div>
		</>
	);
};

export default Post;
