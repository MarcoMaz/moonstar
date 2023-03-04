import { IonCard } from "@ionic/react";
import { useState, useEffect } from "react";

import Posts from "./Posts";
import Comments from "./Comments";

const API_URL: string =
  "https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=20";

export interface Comment {
  body: string;
  email?: string;
  id?: number;
  name?: string;
  postId?: number;
}

interface Post {
  body?: string;
  comments: Comment[];
  id?: number;
  title: string;
  userId?: number;
}

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts.map(({ id, title, comments }) => (
        <IonCard key={id}>
          <Posts title={title} comments={comments} />
          <Comments comments={comments} />
        </IonCard>
      ))}
    </>
  );
};

export default PostsContainer;
