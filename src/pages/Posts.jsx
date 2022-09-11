import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postData, setPostData] = React.useState([]);
  useEffect(() => {
    console.log("posts component loaded");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log("data", data);
        return data.json();
      })
      .then((result) => {
        console.log("result", result);
        // setPostData((state) => {
        //   return result
        // })
        setPostData(result);
      });
  }, []);

  useEffect(() => {
    return () => {
      console.log("post component destroyed");
    };
  }, []);

  return (
    <>
      <h2>Posts</h2>

      {postData.map((data) => {
        return (
          <div
            class="card"
            style={{
              width: "18rem"
            }}
          >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/post/4">Go to Individual Post</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { Posts };
