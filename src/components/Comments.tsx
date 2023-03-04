import { IonCardContent, IonList, IonItem } from "@ionic/react";

import { Comment } from "./PostsContainer";

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
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
  );
};

export default Comments;
