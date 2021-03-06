/* @flow */

import Headroom from 'react-headroom';
import React from 'react';

import {
  ContentContainer,
  Main,
  PageFooter,
  PageHelmet,
  PostArticle,
  Separator,
  TopNavigation,
} from '../../components';
import {blogPostsFromPages} from '../../utils';
import type {BlogPost} from '../../types';

const BlogPage = (
  {
    route,
  }: {
    route: {pages: Array<Object>},
  },
): React$Element<any> => {
  const blogPosts = blogPostsFromPages(route.pages).filter(
    ({draft}: {draft?: boolean}) => !draft,
  );

  return (
    <Main>
      <PageHelmet
        title="Блог | Anvilabs"
        description="Блог компании Anvilabs"
        mixpanelTitle="Blog"
      />
      <Headroom><TopNavigation /></Headroom>
      <ContentContainer className="mw7-l center">
        {blogPosts.map((post: BlogPost, idx: number) => (
          <div key={post.date}>
            <PostArticle post={post} full={false} />
            {idx < blogPosts.length - 1 && <Separator className="pv5" />}
          </div>
        ))}
      </ContentContainer>
      <Separator />
      <PageFooter />
    </Main>
  );
};

export default BlogPage;
