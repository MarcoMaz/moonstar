import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts", () => {
  const title = "Post title";
  const comments = [
    { id: 1, body: "This is comment 1" },
    { id: 2, body: "This is comment 2" },
  ];

  it("renders the title", () => {
    render(<Posts title={title} comments={comments} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders the correct number of comments", () => {
    render(<Posts title={title} comments={comments} />);
    expect(screen.getByText(`${comments.length} comments`)).toBeInTheDocument();
  });

  it('renders singular "comment" when there is only one comment', () => {
    render(<Posts title={title} comments={[comments[0]]} />);
    expect(screen.getByText("1 comment")).toBeInTheDocument();
  });
});
