import { render, screen } from "@testing-library/react";
import Comments from "./Comments";

describe("Comments component", () => {
  const comments = [
    { id: 1, body: "Comment 1" },
    { id: 2, body: "Comment 2" },
    { id: 3, body: "Comment 3" },
  ];

  it("renders all comments passed as props", () => {
    render(<Comments comments={comments} />);
    comments.forEach(({ body }) => {
      expect(screen.getByText(body)).toBeInTheDocument();
    });
  });
});
