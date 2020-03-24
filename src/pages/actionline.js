import React from "react"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ActionLinePage = () => (
  <Layout>
    <SEO title="MANZ Action Line" />
    <h1>MANZ Action Line (BETA)</h1>
    <p className="lead">
      We are building a telephone system for NZ Citizens to request assistance
      during the COVID-19 pandemic.
    </p>
    <hr />
    <h2>Help us test Action Line</h2>
    <p>
      We are looking for volunteers to give us feedback on the service and tell
      us how useful it is.
    </p>
    <p>If you fit the following criteria, please hit the button below:</p>
    <ul>
      <li>You are over the age of 65</li>
      <li>You are Māori</li>
      <li>You are disabled</li>
      <li>Caring for someone who matches the above criteria</li>
    </ul>
    <Button href="https://docs.google.com/document/d/1C3u-igEhBsmwgKDJr32ksKCZ_gjOL0vnRCIY8JoONsA/edit?usp=sharing">
      I would like to help test the Action Line
    </Button>
    <hr />
    <h2>Help us build Action Line</h2>
    <p>
      We need technical volunteers to help us design, build, test and deploy our
      Action Line system.
    </p>
    <p>
      UI designers, UX practitioners, back end and front end developers, DevOps,
      cyber security, QA, please get in contact with us!
    </p>
    <Button href="https://airtable.com/shrhwnSYWDGe4zDVN?fbclid=IwAR2D5INf32vRB0ysCTDYIBY5oWatLr7SpF8fSbhlsBBRQ-AJa9-a43ZBn0E">
      I can help build Action Line
    </Button>
  </Layout>
)

export default ActionLinePage
