import React from 'react'

const Post = () => {
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis ullam quisquam sed quaerat praesentium ducimus
                                provident, earum illo! Corrupti deleniti eaque labore reiciendis
                                consequatur sed dolore nisi qui. Temporibus quae commodi iste
                                molestias perspiciatis et, cupiditate esse! Ex fugiat fuga
                                accusamus ab repudiandae facere maiores quasi tempora quae
                                dignissimos! Eligendi recusandae, vitae velit error, dolores
                                doloribus quas alias iste dolorem suscipit, officia amet ducimus
                                voluptatem. Excepturi commodi eum odio ipsam quos nulla ratione
                                sapiente quo iste soluta optio dolores maiores voluptatum ut,
                                consequatur ab. Magni recusandae dolorem repellat illo totam
                                sequi expedita! Est ratione consectetur, molestiae temporibus
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
    )
}

export default Post
