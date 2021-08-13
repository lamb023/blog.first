import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import imgA from '../images/sunset.jpg';
import imgB from '../images/brg.jpg';

const AboutPage = ({ location, data }) => (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo title="About" />
      <h1>About Me</h1>
      <div className="aboutstyle">
      <p><img alt="iPhone_01" src={imgB} width='600' height='400'/></p>
      <p>
          ㅎㅇ<br/>
          다양한 정보를 공유하는 블로그입니다.
      </p>
      <p>급변하는 시대에서 필요한 기술을 접목하여 새로운 가치를 창출할 수 있도록 노력합니다.</p>
      <p>지식을 공유하고 더 나은 방향으로 나아가는 것을 추구합니다.</p>
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