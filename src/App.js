import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";

const Spinner = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

const Post = obj => (
  <div className="post">
    <LazyLoad
      once={true}
      placeholder={
        <img src={`https://picsum.photos/id/${obj.id}/5/5`} alt="..." />
      }
    >
      <div className="post-img">
        <img src={`https://picsum.photos/id/${obj.id}/200/200`} alt="..." />
      </div>
    </LazyLoad>
    <div className="post-body">
      <h4>{obj.title}</h4>
      <p>{obj.body}</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <h2>LazyLoad Demo</h2>
      <div className="post-container">
        {data.map(post => (
          <LazyLoad
            key={post.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <Post key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default App;
