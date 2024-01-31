import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Features from "../components/Features";
import Layout from "../components/Layout";
import SlideShow from "../components/SlideShow";
import Testimonials from "../components/Testimonials";
import enrollImg from "../img/enroll_now_jithu-scaled.jpg"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading,
  mainpitch,
  description,
  intro,
  testimonials,
  slides
}) => {

  return (
    <div>
      <SlideShow slides={slides}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <p>{mainpitch.description}</p>
                    </div>
                  </div>
                  <a href="https://www.manoramahorizon.com/course/mushroom-farming-for-beginners/" target="_blank">
                    <img src={enrollImg} alt="Leenas" style={{ width: "100%" }} />
                  </a>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <Testimonials  testimonials={testimonials}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  slides: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.content;

  return (
    <Layout>
      <IndexPageTemplate
        slides={frontmatter.slides}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
query IndexById($id: String!, $language: String!) {
  page: markdownRemark(id: {eq: $id}) {
    fields {
      slug
    }
    html
  }
  content: markdownRemark(
    frontmatter: {type: {eq: 1}, templateKey: {eq: "index-page"}, language: {eq: $language}}
  ) {
    id
    frontmatter {
      slides {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
      heading
      mainpitch {
        title
        description
      }
      description
      intro {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          title
          text
        }
        heading
        description
      }
      testimonials {
        author
        quote
      }
    }
  }
}

`;
