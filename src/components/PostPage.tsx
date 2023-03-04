import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useState, useEffect } from "react";

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

interface PostPageProps {

}

const URL =
  "https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=10";

const IMAGE_URL = "https://ionicframework.com/docs/img/demos/card-media.png";

const PostPage: React.FC<PostPageProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log("posts", posts);

  return (
    <>
      {posts.map(({ id, title, comments }, index) => (
        <IonCard key={id}>
          <IonCardHeader>
            <IonCardTitle class="ion-padding-bottom">{title}</IonCardTitle>
            <img alt="Silhouette of mountains" src={IMAGE_URL} />
            <IonCardContent class="ion-text-end">
              {comments.length === 1
                ? `${comments.length} comment`
                : `${comments.length} comments`}
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      ))}
    </>
  );
};

export default PostPage;

/*
 <>
        <ul>
          {posts.map((post) => (
            <li>
              <strong>{post.title}</strong>
              <ul>
                {post.comments.map((comment: any) => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>{" "}
      </> */
