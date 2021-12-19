import React from 'react'
import  './styles.css'
import { BiSearch,BiMenu,BiHome,BiChevronDown,BiUser,BiMessageRounded,BiCompass,BiBell,BiBookmark,BiLogOut } from "react-icons/bi";

const Mainindex = () => {

    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('tagsec').scrollLeft += 150;
    };
    buttonLeft.onclick = function () {
      document.getElementById('tagsec').scrollLeft -= 150;
    };

    var icon = document.getElementById("toggleimg");
    const pre = document.getElementById("pre");
    const nxt = document.getElementById("nxt");
    const likeimg = document.getElementById("likeimg");
    icon.onclick = function () {
        document.body.classList.toggle("darktheme");

        if (document.body.classList.contains("darktheme")) {
            icon.src = "./img/sun.png";
            pre.src = "./img/prelight.png";
            nxt.src = "./img/nxtlight.png";
            likeimg.src = "./img/likelight.png";
        }
        else {
            icon.src = "./img/moon.png";
            pre.src = "./img/pre.png";
            nxt.src = "./img/nxt.png";
            likeimg.src = "./img/like.png";
        }

    }


    const showMenu = (headerToggle, navbarId) =>{
        const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)
        
        // Validate that variables exist
        if(headerToggle && navbarId){
            toggleBtn.addEventListener('click', ()=>{
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu')
                // change icon
                toggleBtn.classList.toggle('bx-x')
            })
        }
    }
    showMenu('header-toggle','navbar')
    
    
    const linkColor = document.querySelectorAll('.nav__link')
    
    function colorLink(){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
    
    linkColor.forEach(l => l.addEventListener('click', colorLink))
    
    



    return (
        <>
        <header class="header">
            <div class="header__container">

            <div class="logosec">

                <img src="img/icons8_info_squared_100px_2.png" alt="" class="header__logoimg"/>
                <a href="#" class="header__logo">IDEAONLINE</a>

            </div>

            <div class="rightsec">

                <div class="header__search">
                    <input type="search" placeholder="Search" class="header__input"/>
                    <i class='bx bx-search header__icon'><BiSearch className='header__icon'/></i>
                </div>

                <img id="toggleimg" src="./img/moon.png" alt=""/>

                <img src="img/perfil.jpg" alt="" class="header__img"/>

                <div class="header__toggle">
                    <i class='bx bx-menu' id="header-toggle"><BiMenu id='header-toggle' className='bx bx-menu'/></i>
                </div>
            </div>
        </div>
    </header>

    
    <div class="nav" id="navbar">
        <nav class="nav__container">
            <div>
                <a href="#" class="nav__link nav__logo">
                    <img id="nav__logoico" src="./img/icons8_info_squared_100px_2.png" alt=""/>
                    <span class="nav__logo-name">IDEAONLINE</span>
                </a>

                <div class="nav__list">
                    <div class="nav__items">
                        <h3 class="nav__subtitle">Profile</h3>

                        <a href="#" class="nav__link active">
                            <i class='bx bx-home nav__icon'><BiHome className="nav__icon"/></i>
                            <span class="nav__name">Home</span>
                        </a>

                        <div class="nav__dropdown">
                            <a href="#" class="nav__link">
                                <i class='bx bx-user nav__icon'><BiUser className="nav__icon"/></i>
                                <span class="nav__name">Profile</span>
                                <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'><BiChevronDown className="nav__icon nav__dropdown-icon"/></i>
                            </a>

                            <div class="nav__dropdown-collapse">
                                <div class="nav__dropdown-content">
                                    <a href="#" class="nav__dropdown-item">Passwords</a>
                                    <a href="#" class="nav__dropdown-item">Mail</a>
                                    <a href="#" class="nav__dropdown-item">Accounts</a>
                                </div>
                            </div>
                        </div>

                        <a href="#" class="nav__link">
                            <i class='bx bx-message-rounded nav__icon'><BiMessageRounded className="nav__icon"/></i>
                            <span class="nav__name">Messages</span>
                        </a>
                    </div>

                    <div class="nav__items">
                        <h3 class="nav__subtitle">Menu</h3>

                        <div class="nav__dropdown">
                            <a href="#" class="nav__link">
                                <i class='bx bx-bell nav__icon'><BiBell/></i>
                                <span class="nav__name">Notifications</span>
                                <i class='bx bx-chevron-down nav__icon nav__dropdown-icon'><BiChevronDown className="nav__icon nav__dropdown-icon"/></i>
                            </a>

                            <div class="nav__dropdown-collapse">
                                <div class="nav__dropdown-content">
                                    <a href="#" class="nav__dropdown-item">Blocked</a>
                                    <a href="#" class="nav__dropdown-item">Silenced</a>
                                    <a href="#" class="nav__dropdown-item">Publish</a>
                                    <a href="#" class="nav__dropdown-item">Program</a>
                                </div>
                            </div>

                        </div>

                        <a href="#" class="nav__link">
                            <i class='bx bx-compass nav__icon'><BiCompass className="nav__icon"/></i>
                            <span class="nav__name">Explore</span>
                        </a>
                        <a href="#" class="nav__link">
                            <i class='bx bx-bookmark nav__icon'><BiBookmark className="nav__icon"/></i>
                            <span class="nav__name">Saved</span>
                        </a>
                    </div>
                </div>
            </div>

            <a href="#" class="nav__link nav__logout">
                <i class='bx bx-log-out nav__icon'><BiLogOut className="nav__icon"/></i>
                <span class="nav__name">Log Out</span>
            </a>
        </nav>
    </div>

    
    <main>
        <div class="postsec">

            <div class="wholetag">
                <div id="slideLeft" type="button"><img id="pre" src="./img/pre.png" alt=""/></div>


                <div id="tagsec">
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                    <div class="outerbox"><a href="#">
                            <div class="tagele">Science</div>
                        </a></div>
                </div>

                <div id="slideRight" type="button"><img id="nxt" src="./img/nxt.png" alt=""/></div>

            </div>


          
            <div class="postcontainer">


               
                <div class="postbox">
                    <div class="postsec1">

                        <img class="avtar" src="./img/avtar.png" alt=""/>

                        <div class="namesec">
                            <div class="name">Someone XYZ</div>

                        </div>
                    </div>

                    <div class="postsec2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam quisquam sed quaerat
                        praesentium ducimus provident, earum illo! Corrupti deleniti eaque labore reiciendis consequatur
                        sed dolore nisi qui. Temporibus quae commodi iste molestias perspiciatis et, cupiditate esse! Ex
                        fugiat fuga accusamus ab repudiandae facere maiores quasi tempora quae dignissimos! Eligendi
                        recusandae, vitae velit error, dolores doloribus quas alias iste dolorem suscipit, officia amet
                        ducimus voluptatem. Excepturi commodi eum odio ipsam quos nulla ratione sapiente quo iste soluta
                        optio dolores maiores voluptatum ut, consequatur ab. Magni recusandae dolorem repellat illo
                        totam sequi expedita! Est ratione consectetur, molestiae temporibus rerum amet sed!

                    </div>

                    <div class="postsec3">

                        <div class="postfooter">

                            <div class="like">
                                
                             <label for="like"><img id="likeimg" src="./img/like.png" alt=""/><div class="" id="liketxt">Appreciate</div></label>                               
                                <input type="checkbox" name="like" id="like"/>

                                
                            </div>

                            <div class="comment">
                                <img src="./img/comment.png" alt=""/>
                                <div>Enhance</div>
                            </div>

                        </div>

                    </div>


                </div>                

                <div class="postbox">
                    <div class="postsec1">

                        <img class="avtar" src="./img/avtar.png" alt=""/>

                        <div class="namesec">
                            <div class="name">Someone XYZ</div>

                        </div>
                    </div>

                    <div class="postsec2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ullam quisquam sed quaerat
                        praesentium ducimus provident, earum illo! Corrupti deleniti eaque labore reiciendis consequatur
                        sed dolore nisi qui. Temporibus quae commodi iste molestias perspiciatis et, cupiditate esse! Ex
                        fugiat fuga accusamus ab repudiandae facere maiores quasi tempora quae dignissimos! Eligendi
                        recusandae, vitae velit error, dolores doloribus quas alias iste dolorem suscipit, officia amet
                        ducimus voluptatem. Excepturi commodi eum odio ipsam quos nulla ratione sapiente quo iste soluta
                        optio dolores maiores voluptatum ut, consequatur ab. Magni recusandae dolorem repellat illo
                        totam sequi expedita! Est ratione consectetur, molestiae temporibus rerum amet sed!

                    </div>

                    <div class="postsec3">

                        <div class="postfooter">

                            <div class="like">
                                
                             <label for="like"><img id="likeimg" src="./img/like.png" alt=""/><div class="" id="liketxt">Appreciate</div></label>                               
                                <input type="checkbox" name="like" id="like"/>

                                
                            </div>

                            <div class="comment">
                                <img src="./img/comment.png" alt=""/>
                                <div>Enhance</div>
                            </div>

                        </div>

                    </div>


                </div>




            </div>



        </div>
    </main>

            
        </>
    )
}

export default Mainindex
