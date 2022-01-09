import React, { lazy } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import { Footer, Header, Main, Sidebar } from "components/layout";
import { Post } from "components/post";

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
          const { id, slug, title } = post;
          return (
            <NavLink key={id} to={`/posts/${slug.toLowerCase()}`}>
              {title}
            </NavLink>
          );
        })}
      </nav>
    </Sidebar>
    <Main>
      <Switch>
        <Route exact path={`/posts`} render={() => null} />
        {postsData.map((post) => {
          const { id, slug } = post;
          const Component = contentImports[post.content];

          return (
            <Route
              key={id}
              path={`/posts/${slug}`}
              render={() => (
                <Post post={post}>{Component ? <Component /> : null}</Post>
              )}
            />
          );
        })}
      </Switch>
    </Main>
    <Footer />
  </div>
);

export default Posts;
