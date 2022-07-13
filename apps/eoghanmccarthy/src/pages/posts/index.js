import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import { useGetPosts } from "../../utils/api";

import { Footer, Header, Main, Sidebar } from "components/layout";
import { Post } from "components/post";
import ScrollToTop from "components/scrollToTop";

const Posts = () => {
  const { data } = useGetPosts();

  return (
    <div className={"me posts"}>
      <Header />
      <Sidebar>
        <nav className={"side-nav"}>
          {data?.map((post) => {
            const { id, status, title } = post;

            if (status !== "draft") {
              return (
                <NavLink key={id} to={`/posts/${id}`}>
                  {title}
                </NavLink>
              );
            } else {
              return null;
            }
          })}
        </nav>
      </Sidebar>
      <Main>
        <ScrollToTop>
          <Routes>
            <Route exact path={`:postId`} element={<Post />} />
          </Routes>
        </ScrollToTop>
      </Main>
      <Footer />
    </div>
  );
};

export default Posts;
