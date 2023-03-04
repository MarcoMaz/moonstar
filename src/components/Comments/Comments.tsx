import { IonCardContent, IonList, IonItem } from "@ionic/react";
import { Comment } from "../PostsContainer";

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <IonCardContent>
      <IonList inset={true}>
        {comments.map(({ body }, idx) => {
          // remove the line if it is the last comment
          const isLastComment = idx === comments.length - 1 ? "none" : "full"

          return (
            <IonItem
              key={idx}
              class="ion-padding-bottom"
              lines={isLastComment}
            >
              {body}
            </IonItem>
          );
        })}
      </IonList>
    </IonCardContent>
  );
};

export default Comments;
