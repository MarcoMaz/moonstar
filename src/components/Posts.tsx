import { IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import { Comment } from "./PostsContainer";

const IMAGE_URL = "https://ionicframework.com/docs/img/demos/card-media.png";

interface PostsProps {
  title: string;
  comments: Comment[];
}

const Posts: React.FC<PostsProps> = ({ title, comments }) => {
  // handle plural case of the word "comment"
  const numberOfComments =
    comments.length === 1
      ? `${comments.length} comment`
      : `${comments.length} comments`;

  return (
    <IonCardHeader>
      <IonCardTitle class="ion-padding-bottom">{title}</IonCardTitle>
      <img alt="Silhouette of mountains" src={IMAGE_URL} />
      <IonCardContent class="ion-text-end">{numberOfComments}</IonCardContent>
    </IonCardHeader>
  );
};

export default Posts;
