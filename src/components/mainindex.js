import React from "react";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
	BiSearch,
	BiMenu,
	BiHome,
	BiChevronDown,
	BiUser,
	BiMessageRounded,
	BiCompass,
	BiBell,
	BiBookmark,
	BiLogOut,
} from "react-icons/bi";
import Post from "./post";
import { Link } from "react-router-dom";

const Mainindex = () => {
	// const bh((l) => l.addEventListener("click", colorLink));
	const [state, setstate] = useState([]);
	useEffect(() => {
		async function getData() {
			const res = await axios.get(`http://127.0.0.1:8000/blogs/`);
			setstate(res.data);
			console.log(res.data);
			return "";
		}
		getData();
	}, []);
	return (
		<>
			<header className="header">
				<div className="header__container">
					<div className="logosec">
						<img
							src="img/icons8_info_squared_100px_2.png"
							alt=""
							className="header__logoimg"
						/>
						<a href="#" className="header__logo">
							IDEAONLINE
						</a>
					</div>

					<div className="rightsec">
						<div className="header__search">
							<input
								type="search"
								placeholder="Type to search..."
								className="header__input form-control"
								list="datalistOptions"
							/>
							{/* <datalist id="datalistOptions">
                                <option value="San Francisco">
                                <option value="New York">
                                <option value="Seattle">
                             <option value="Los Angeles">
                                     <option value="Chicago">
                                            </datalist> */}
							<datalist id="datalistOptions">
								<option value="San Francisco" />
								<option value="New York" />
								<option value="Seattle" />
								<option value="Los Angeles" />
								<option value="Chicago" />
							</datalist>
							<i className="bx bx-search header__icon">
								<BiSearch className="header__icon" />
							</i>
						</div>

						<img
							id="toggleimg"
							src="./img/moon.png"
							alt=""
							onClick={(e) => {
								const pre = document.getElementById("pre");
								const nxt = document.getElementById("nxt");
								const likeimg = document.getElementById("likeimg");

								document.body.classList.toggle("darktheme");

								if (document.body.classList.contains("darktheme")) {
									e.target.src = "./img/sun.png";
									pre.src = "./img/prelight.png";
									nxt.src = "./img/nxtlight.png";
									likeimg.src = "./img/likelight.png";
								} else {
									e.target.src = "./img/moon.png";
									pre.src = "./img/pre.png";
									nxt.src = "./img/nxt.png";
									likeimg.src = "./img/like.png";
								}
							}}
						/>
						<div className="buttonsec1">
							<button>
								{" "}
								<Link to="/login">Login</Link>
							</button>

							<button>
								{" "}
								<Link to="/signup">Sign Up</Link>
							</button>
						</div>
						<img src="img/perfil.jpg" alt="" className="header__img" />

						<div className="header__toggle">
							<i className="bx bx-menu" id="header-toggle">
								<BiMenu id="header-toggle" className="bx bx-menu" />
							</i>
						</div>
					</div>
				</div>
			</header>

			<div className="nav" id="navbar">
				<nav className="nav__container">
					<div>
						<a href="#" className="nav__link nav__logo">
							<img
								id="nav__logoico"
								src="./img/icons8_info_squared_100px_2.png"
								alt=""
							/>
							<span className="nav__logo-name">IDEAONLINE</span>
						</a>

						<div className="nav__list">
							<div className="nav__items">
								<h3 className="nav__subtitle">Profile</h3>

								<a href="#" className="nav__link active">
									<i className="bx bx-home nav__icon">
										<BiHome className="nav__icon" />
									</i>
									<span className="nav__name">Home</span>
								</a>

								<div className="nav__dropdown">
									<a href="#" className="nav__link">
										<i className="bx bx-user nav__icon">
											<BiUser className="nav__icon" />
										</i>				

										<span class="nav__name">Profile</span>
										<i class="bx bx-chevron-down nav__icon nav__dropdown-icon">
											<BiChevronDown className="bx bx-chevron-down nav__icon nav__dropdown-icon" />

										</i>
									</a>

									<div className="nav__dropdown-collapse">
										<div className="nav__dropdown-content">
											<a href="#" className="nav__dropdown-item">
												Passwords
											</a>
											<a href="#" className="nav__dropdown-item">
												Mail
											</a>
											<a href="#" className="nav__dropdown-item">
												Accounts
											</a>
										</div>
									</div>
								</div>

								<a href="#" className="nav__link">
									<i className="bx bx-message-rounded nav__icon">
										<BiMessageRounded className="nav__icon" />
									</i>
									<span className="nav__name">Messages</span>
								</a>
							</div>

							<div className="nav__items">
								<h3 className="nav__subtitle">Menu</h3>

								<div className="nav__dropdown">
									<a href="#" className="nav__link">
										<i className="bx bx-bell nav__icon">
											<BiBell />
										</i>
										<span className="nav__name">Notifications</span>
										<i className="bx bx-chevron-down nav__icon nav__dropdown-icon">
											<BiChevronDown className="nav__icon nav__dropdown-icon" />
										</i>
									</a>

									<div className="nav__dropdown-collapse">
										<div className="nav__dropdown-content">
											<a href="#" className="nav__dropdown-item">
												Blocked
											</a>
											<a href="#" className="nav__dropdown-item">
												Silenced
											</a>
											<a href="#" className="nav__dropdown-item">
												Publish
											</a>
											<a href="#" className="nav__dropdown-item">
												Program
											</a>
										</div>
									</div>
								</div>

								<a href="#" className="nav__link">
									<i className="bx bx-compass nav__icon">
										<BiCompass className="nav__icon" />
									</i>
									<span className="nav__name">Explore</span>
								</a>
								<a href="#" className="nav__link">
									<i className="bx bx-bookmark nav__icon">
										<BiBookmark className="nav__icon" />
									</i>
									<span className="nav__name">Saved</span>
								</a>
							</div>
						</div>
					</div>

					<a href="#" className="nav__link nav__logout">
						<i className="bx bx-log-out nav__icon">
							<BiLogOut className="nav__icon" />
						</i>
						<span className="nav__name">Log Out</span>
					</a>
				</nav>
			</div>

			<main>
				<div className="postsec">
					<div className="wholetag">
						<div
							id="slideLeft"
							type="button"
							onClick={() => {
								document.getElementById("tagsec").scrollLeft -= 150;
							}}
						>
							<img id="pre" src="./img/pre.png" alt="" />
						</div>

						<div id="tagsec">
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
							<div className="outerbox">
								<a href="#">
									<div className="tagele">Science</div>
								</a>
							</div>
						</div>

						<div
							id="slideRight"
							type="button"
							onClick={() => {
								document.getElementById("tagsec").scrollLeft += 150;
							}}
						>
							<img id="nxt" src="./img/nxt.png" alt="" />
						</div>
					</div>

					<div className="postcontainer">
						{state.map((value, index, arr) => (
							<Post value={value} />
						))}
						;
					</div>
				</div>
			</main>
		</>
	);
};

export default Mainindex;
