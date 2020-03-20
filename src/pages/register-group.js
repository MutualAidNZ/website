import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare } from "@fortawesome/free-solid-svg-icons"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Register a support group" />
    <h1>Register a support group</h1>
    <p className="lead">
      Thank you so much for helping your community. It's vital that people can
      find the right group at the right time, and that you feel supported as an
      administrator of a group.
    </p>
    <h2>Affiliated Group Rules</h2>
    <ul>
      <li>
        <strong>
          Please make sure your Facebook group name contains the MANZ acronym,
          and follows the following format:
        </strong>
        This helps those in need find you more quickly.{" "}
        <span className="text-muted">
          Example: North Shore MANZ - COVID-19 Mutual Aid
        </span>
      </li>
      <li>
        <strong>
          Please DO NOT allow the spread of misinformation or encourage medical
          advice!
        </strong>
        {` `}
        There is already so much bad information out there regarding this virus,
        which is hampering the efforts of the medical and scientific community.
        We should always encourage our members to refer to the official COVID
        response pages and call Healthline if there are any concerns. Any claims
        from unverified sources should be challenged.
      </li>
      <li>
        <strong>
          Please contact us before setting up any system used to collect
          Personal Data
        </strong>{" "}
        (google sheets, airtable, etc.), and we will be able to assist you. The
        reason we ask is because this data needs to be handled carefully in line
        with legislation, as well as making sure it doesn't end up in the wrong
        hands. We are building tools to allow groups to handle this properly.
      </li>
      <li>
        <strong>
          Please contact us if there are any requests or ideas for useful tools
        </strong>
        , as we will be collating feedback as well as a community of technical
        people who can build anything our communities require. A tool may
        already exist that we're using elsewhere.
      </li>
    </ul>

    <h2>Resources + Support</h2>
    <ul>
      <li>
        We are building a library of resources to help groups.{" "}
        <Link to="/resources">Check them out here.</Link>
      </li>
      <li>
        Our technical team are building out tools that will be able to help your
        members. We will announce these in due course.
      </li>
      <li>
        When you register a support group, we will add you to our{" "}
        <a href="https://www.facebook.com/groups/520569575550420/">
          MANZ Support Group Administrators
        </a>{" "}
        page which will contain all the latest information, resources and
        guidance that can be filtered down to your community. You will also be
        added to our communication tool, Slack, which will allow you to talk to
        fellow administrators and the technical teams directly
      </li>
    </ul>

    <hr />

    <Card>
      <Card.Body>
        <h3>Register your group</h3>
        <p>
          Thank you again for helping out. Please press the button below to open
          a form where you can register your group:
        </p>
        <Button
          size={"lg"}
          href="https://forms.gle/UrXa4CAN4f44c5hi6"
          target="_blank"
        >
          <FontAwesomeIcon icon={faShare} className="mr-1" />
          Register my group
        </Button>
      </Card.Body>
    </Card>
  </Layout>
)

export default ResourcesPage
