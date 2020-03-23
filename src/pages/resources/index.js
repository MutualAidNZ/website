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
  {
    title: "Setting up a local Mutual Aid Group",
    description:
      "Steps explaining how to set up a local group and organise volunteers effectively",
    externalLink:
      "https://docs.google.com/document/d/1WrQKloQQ-tAZ6fN-NRTLyd5Lo5eQOkgOiyRCgwsID0s/edit#heading=h.rfxiyjo99unp",
  },
  {
    title: "Rules for responsible volunteering",
    description:
      "A policy explaining how to volunteer responsibly to safeguard vulnerable people and minimise spreading the virus.",
    externalLink:
      "https://docs.google.com/document/d/1-gJLNXKWgFbi76RymJ_WC4ntk1gCIhqIojAxHtTuil8/edit",
  },
]

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Resources</h1>
    <p className="lead">
      This is our library of tools, processes, ideas and policies:
    </p>
    <Alert variant={"primary"}>
      <strong>Tip: </strong><a
        href="https://drive.google.com/drive/folders/1IvXnGAdkCuZ0kixyJXLFTrhlzTN4RNeu"
        target="_blank"
      >
        You can also access our resources from Google Drive.
      </a>
    </Alert>
    {resources
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .map(resource => (
        <div>
          {resource.link ? (
            <Link to={resource.link}>
              <h2>{resource.title}</h2>
            </Link>
          ) : (
            <a href={resource.externalLink} target="_blank">
              <h2>{resource.title}</h2>
            </a>
          )}
          <p>{resource.description}</p>
        </div>
      ))}
  </Layout>
)

export default ResourcesPage
