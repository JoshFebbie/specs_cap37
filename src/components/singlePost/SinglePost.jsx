import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i0.wp.com/www.unicornbrookies.com/wp-content/uploads/2020/07/brookie12.jpg?resize=740%2C370"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Febbie</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur elit. Lorem amet consectetur
          adipisicing elit. Lorem ipsum dolor elit. Lorem ipsum dolor sit
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum dolor sit amet consectetur Lorem ipsum sit
          consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit consectetur Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          adipisicing elit.
        </p>
      </div>
    </div>
  );
}
