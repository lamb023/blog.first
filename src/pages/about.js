import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import imgA from '../images/logo.png';
import imgB from '../images/logo.png';

const AboutPage = ({ location, data }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="About" />
      <h1>About Me</h1>
      <div className="aboutstyle">
      <p><img alt="iPhone_01" src={imgB} width='600' height='400'/></p>
      <p>
          안녕하세요 반갑습니다 저는 최진양입니다 <br/>
          다양한 정보를 공유하는 블로그입니다.
      </p>
      <p>저는 최진양입니다 .</p>
      <p>앞으로 많이 발전하고 싶습니다.</p>
      <p><img src={imgA} alt="iPhone_11" /></p>
      </div>
    </Layout>
  )
  
  export default AboutPage
  
  export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `