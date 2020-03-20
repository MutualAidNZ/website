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
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Tip from "../../components/tip"

const resources = [
  {
    title: "Volunteer Guidance",
    description:
      "Practical advice for in-person volunteering, covering safety and other aspects of this crucial role.",
    link: "/resources/volunteers",
  },
]

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p className="lead">
      This is our library of tools, processes, ideas and policies:
    </p>
    {resources
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .map(resource => (
        <div>
          <Link to={resource.link}>
            <h2>{resource.title}</h2>
          </Link>
          <p>{resource.description}</p>
        </div>
      ))}
  </Layout>
)

export default ResourcesPage
