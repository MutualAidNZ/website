import React from "react"
import { Link } from "gatsby"
import { Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TomImage from "../components/tomImage"
import LaurenImage from "../components/laurenImage"
import KeesImage from "../components/keesImage"

const AboutPage = () => (
  <Layout>
    <SEO title="About us" />
    <h1>About us</h1>
    <p className="lead">
      Kia Ora! Mutual Aid New Zealand (MANZ) is a volunteer organisation working
      hard to assist local Mutual Aid groups during the Covid-19 outbreak.
    </p>
    <p className="lead">
      We want local groups to deliver impact in their communities as soon as
      possible, so we’re creating resources to help people organise themselves
      and keep each other safe. It’s important to us that vulnerable and hard to
      reach citizens are included, which is why we’re prioritising community
      guidelines and innovative outreach technology to introduce important
      safeguards.
    </p>
    <p className="lead">
      Armed with crowdsourced knowledge and new tools, volunteers can coordinate
      more effectively and focus on supporting those in need.
    </p>
    <hr />
    <h2 className="mb-4">Who are we?</h2>
    <Row>
      <Col xs={12} md={2} lg={3}>
        <KeesImage />
      </Col>
      <Col>
        <h3>Kees Bakker</h3>
        <p className="text-muted">Founder & Head of Outreach</p>
        <p>
          "I believe in challenging the way we learn, the way we play and the
          way we communicate. I am all about stepping over lines, breaking
          boundaries and exploring outside the box. I am a passionate, creative
          and self-driven individual who create solutions that install the
          future and fuel our curiosity."
        </p>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xs={12} md={2} lg={3}>
        <TomImage />
      </Col>
      <Col>
        <h3>Tom Hallam</h3>
        <p className="text-muted">Co-Founder & Head of Technology</p>
        <p>
          Tom is an experienced cloud software architect and full stack
          engineer. He designs, builds and runs concise software systems with an
          emphasis on maintainability and usability. He evangelises continuous
          integration and delivery, lean architecture and the use of open source
          software. He has worked with the likes of Dyson, ASOS, Mitie, MTR and
          more to produce scalable, performant and secure software.
        </p>
        <p>
          Find out more about him at{" "}
          <a href="https://tomhallam.co.uk">tomhallam.co.uk</a>.
        </p>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xs={12} md={2} lg={3}>
        <LaurenImage />
      </Col>
      <Col>
        <h3>Lauren Dowding</h3>
        <p className="text-muted">Co-Founder & Head of Strategy</p>
        <p>
          Lauren is an award winning Strategist with over 10 years of experience
          in human-centre design practices. With her background in Consultancy,
          Lauren has expertise spanning top-tier clients from the Public Sector
          and NGOs through to Financial Services and Utilities.
        </p>
        <p>
          Find out more about Lauren at{" "}
          <a href="http://laurendowding.com">laurendowding.com</a>.
        </p>
      </Col>
    </Row>
    <hr />
    <h2>Got a question?</h2>
    <p>No problem, just head to the <Link to="/contact">Contact Us page!</Link></p>
  </Layout>
)

export default AboutPage
