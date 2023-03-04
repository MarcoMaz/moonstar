import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
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

interface PostsContainerProps {}

const URL =
  "https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=10";

const IMAGE_URL = "https://ionicframework.com/docs/img/demos/card-media.png";

const PostsContainer: React.FC<PostsContainerProps> = () => {
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
        <>
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
            <IonCardContent>
              <IonList inset={true}>
                {comments.map(({ body }, idx) => (
                  <IonItem
                    key={idx}
                    class="ion-padding-bottom"
                    lines={idx === comments.length - 1 ? "none" : "full"}
                  >
                    {body}
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </>
      ))}
    </>
  );
};

export default PostsContainer;
