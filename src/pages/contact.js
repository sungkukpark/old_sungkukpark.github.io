import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => (
  <Layout>
    <Helmet htmlAttributes={{ lang : 'en' }}>
      <meta charSet="utf-8" />
      <meta name="Description" content="Contact page of Sungkuk Park's blog."></meta>
      <title>Contact</title>
      <link rel="canonical" href="http://sungkukpark.github.io/contact" />
    </Helmet>
    <Header headerText="Contact"></Header>
    <p>
      <a href="mailto:sungkukshawnpark@gmail.com">
        Gmail
      </a>
      <br />
      <a href="https://www.linkedin.com/in/sungkukpark/">LinkedIn</a>
    </p>
  </Layout>
);
