import { IonGrid, IonCard, IonCol, IonRow } from "@ionic/react";
import { useState, useEffect } from "react";

import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";

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
    <IonGrid>
      {posts.map(({ id, title, comments }) => (
        <IonRow key={id} className="ion-justify-content-center">
          <IonCol size="12" size-md="6" >
            <IonCard key={id}>
              <Posts title={title} comments={comments} />
              <Comments comments={comments} />
            </IonCard>
          </IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default PostsContainer;
