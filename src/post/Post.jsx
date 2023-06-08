import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://fishtalkmag.com/sites/default/files/inline-images/largemouth-bass-on-fly.jpg"
      alt=""
    />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Bass</span>
            <span className="postCat">Fly Fishing</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor, sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipdolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipdolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
  )
}