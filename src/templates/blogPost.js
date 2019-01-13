import React from 'react';
import { graphql } from 'gatsby';
import { withIntl } from '../i18n';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($locale: String!, $title: String!) {
    markdownRemark(frontmatter: { locale: { eq: $locale }, title: { eq: $title } }) {
      html
    }
  }
`;

export default withIntl(BlogPost);
