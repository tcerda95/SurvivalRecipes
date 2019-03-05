import React from 'react';
import { graphql } from 'gatsby';
import { withIntl } from '../i18n';
import Layout from '../components/Layout';

const RecipePost = ({ data }) => {
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
  query($locale: String!, $id: String!) {
    markdownRemark(fields: { locale: { eq: $locale }, id: { eq: $id } }) {
      html
    }
  }
`;

export default withIntl(RecipePost);
