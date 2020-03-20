import React from "react"
import {
  Alert,
  Button,
  Col,
  Row,
  Card,
  CardDeck,
  Jumbotron,
} from "react-bootstrap"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Tip from "../../components/tip"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Links" />
    <h1>Links</h1>
    <p className="lead">
      We've got a Google document with loads of useful links for creating your
      community.
    </p>
    <Button variant={"primary"} size={"lg"}>
      Open useful links document
    </Button>
  </Layout>
)

export default ResourcesPage
