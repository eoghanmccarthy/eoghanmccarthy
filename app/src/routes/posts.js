import React, { lazy } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import { Footer, Header, Main, Sidebar } from "components/layout";
import { Post } from "components/post";
import ScrollToTop from "components/scrollToTop";

import { posts as postsData } from "src/data";

const contentImports = {};

postsData.forEach((post) => {
  if (post.content) {
    contentImports[post.content] = lazy(() =>
      import(`../content/${post.content}`)
    );
  }
});

const Posts = () => (
  <div className={"me content"}>
    <Header />
    <Sidebar>
      <nav className={"side-nav"}>
        {postsData.map((post) => {
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
        <Switch>
          <Route exact path={`/posts`} render={() => null} />
          <Route exact path={`/posts/:postId`} render={() => <Post />} />
        </Switch>
      </ScrollToTop>
    </Main>
    <Footer />
  </div>
);

export default Posts;
