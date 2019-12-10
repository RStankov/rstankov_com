import * as React from 'react';
import Layout from '~/components/Layout';

export default function Page() {
  return (
    <Layout>
      <h1>Projects</h1>
      <section>
        <h2>Ongoing projects</h2>
        <ul>
          <li>Organizing React.NotAConf</li>
          <li>Organizing React Sofia Meetup</li>
          <li>Participating in How to GraphQL</li>
        </ul>
      </section>
      <section>
        <h2>Actively maintaining</h2>
        <ul>
          <li>Search Object</li>
          <li>Search Object GraphQL</li>
          <li>Kitty Policy</li>
          <li>Mini Form</li>
        </ul>
      </section>
      <section>
        <h2>Previous projects</h2>
        <ul>
          <li>VarnaConf</li>
          <li>4Beats</li>
          <li>Backbone.Model</li>
        </ul>
      </section>
    </Layout>
  );
}
