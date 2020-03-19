import React from "react"
import { Link } from "gatsby"
import {
  Alert,
  Button,
  Col,
  Row,
  CardGroup,
  Card,
  CardDeck,
  Jumbotron,
} from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Welcome to MANZ!</h1>
      <p>
        MANZ is a group of volunteers supporting local community groups
        organising mutual aid throughout the Covid-19 outbreak in Aotearoa New
        Zealand. We focus on providing resources and connecting people to their
        nearest local groups, willing volunteers and those in need.
      </p>
    </Jumbotron>
    <CardDeck>
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
            href="https://docs.google.com/spreadsheets/d/1PlLEMOEVyjicJNaefJ0aMHN2R2kce3XPJW9k2rPS-5E/edit#gid=0"
            target="_blank"
          >
            Find a support group near you
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Register your support group</Card.Title>
          <Card.Text>
            <p>
              If you’re the admin of a local group, please share it via the form
              below.
            </p>
          </Card.Text>
          <Button
            variant={"primary"}
            size={"sm"}
            href="https://docs.google.com/spreadsheets/d/1PlLEMOEVyjicJNaefJ0aMHN2R2kce3XPJW9k2rPS-5E/edit#gid=0"
            target="_blank"
          >
            Register a support group
          </Button>
        </Card.Body>
      </Card>
    </CardDeck>
    <hr className="my-4" style={{ borderTopColor: '#f7f7f7'}} />
    <Alert variant={"warning"} style={{ fontSize: 16 }}>
      <strong>Disclaimer:</strong> MANZ is a support network for people
      organising in their communities. Local support groups are not directly
      affiliated with MANZ and we are not accountable for their activities. MANZ
      is run entirely by volunteers and not medical professionals. For up to
      date medical advice you should continue to check the{` `}
      <a href="https://covid19.govt.nz/">official COVID-19 website</a> for
      further announcements.
    </Alert>
  </Layout>
)

export default IndexPage
