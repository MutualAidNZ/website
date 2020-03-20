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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faCheck,
  faQuestionCircle,
  faBook,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import networkSVG from "../images/network.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron
      className="mt-4"
      style={{ backgroundColor: "var(--primary)", color: "#fff" }}
    >
      <Row className="d-flex align-items-center">
        <Col md={4}>
          <img
            src={networkSVG}
            className="img-fluid"
            alt="Graphic showing people talking as part of a network"
          />
        </Col>
        <Col>
          <h1>Welcome to MANZ!</h1>
          <p className="lead">
            MANZ is a group of volunteers supporting local community groups
            organising mutual aid throughout the Covid-19 outbreak in Aotearoa
            New Zealand. We focus on providing resources and connecting people
            to their nearest local groups, willing volunteers and those in need.
          </p>
        </Col>
      </Row>
    </Jumbotron>
    <CardDeck>
      <Card bg={"primary"} text={"white"}>
        <Card.Body>
          <Card.Title>Start a support group</Card.Title>
          <Card.Text>
            Want to create a support group in your community? Need a little help
            getting started? We've got you covered.
          </Card.Text>
          <Button
            variant={"light"}
            size={"sm"}
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1WrQKloQQ-tAZ6fN-NRTLyd5Lo5eQOkgOiyRCgwsID0s/edit"
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" /> How to
            start a support group
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Find a support group</Card.Title>
          <Card.Text>
            Our database contains information for local support groups. Search
            and find one near you.
          </Card.Text>
          <Button
            variant={"primary"}
            size={"sm"}
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1PlLEMOEVyjicJNaefJ0aMHN2R2kce3XPJW9k2rPS-5E/edit#gid=0"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-1" /> Find a support
            group near you
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Register your support group</Card.Title>
          <Card.Text>
            If you’re the admin of a local support group, please share it via
            the form below.
          </Card.Text>
          <Link
            to="/register-group"
            className="btn btn-primary btn-sm"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSegfJZiFxcz-F6lDdqHG-1Xo6YhJi479F-0qt2Dqi0JkgqpMw/viewform"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCheck} className="mr-1" /> Register a
            support group
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>

    <hr />

    <Alert variant={"primary"}>
      <strong>Community Resources</strong>
      <p>
        {" "}
        We are building up a library of resources, tools and processes to help
        you run your community group.
      </p>
      <Link to="/resources" className="btn btn-primary btn-sm">
        <FontAwesomeIcon icon={faBook} className="mr-1" /> Resource Library
      </Link>
    </Alert>
  </Layout>
)

export default IndexPage
