import { IonList, IonItem, IonLabel } from "@ionic/react";
import { useState, useEffect } from "react";

import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

// const URL_ORIGINAL = "https://jsonplaceholder.typicode.com/posts"
const URL =
  "https://jsonplaceholder.typicode.com/posts?_embed=comments&_limit=10";

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log("posts", posts);

  return (
    <div className="container">
      <IonList>
        <IonItem>
          <IonLabel>First</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mega Man X</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>The Legend of Zelda</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Pac-Man</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Mario World</IonLabel>
        </IonItem>
        <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>


        {/* <>
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
      </> */}
      </IonList>
    </div>
  );
};

export default ExploreContainer;
