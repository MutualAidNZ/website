import React from "react"
import {
  Accordion,
  Button,
  Col,
  Row,
  Card,
  CardDeck,
  Jumbotron,
} from "react-bootstrap"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Tip from "../../../components/tip"
import SidebarLayout from "../../../components/sidebar-layout"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources for Volunteers" />
    <h1>Volunteer Guidance</h1>

    <Tip color={"--danger"} title={"Your safety is your top priority"}>
      <p className="mb-0">
        Wash your hands regularly, for at least 20 seconds. Avoid touching your
        face. If you are worried about symptoms, please consult the NHS
        guidance. If symptoms are severe call Healthline on 0800 358 5453. Do
        not go directly to your GP or other healthcare environment. Immediately
        stop carrying out deliveries or in person support work.
      </p>
    </Tip>

    <hr />

    <h2>Guidance for all deliveries</h2>
    <ol>
      <li>
        <span>
          <strong>DON'T go into any houses.</strong> Leave food/goods outside
          the doorstep. Communicate to the person in isolation that you have
          delivered via message or phone call. Get confirmation that the person
          has received it before you leave.&nbsp;
        </span>
      </li>
      <li>
        <span>
          Remember to wash hands before and after deliveries. Where possible
          wash for 20 seconds with soap and water. When out and about keep a
          bottle of alcohol hand sanitiser to hand.&nbsp;
        </span>
      </li>
      <li>
        <span>
          Volunteers should ensure they have a low chance of becoming infected.
          Where possible follow social distancing protocol and don’t take
          unnecessary risks.
        </span>
      </li>
      <li>
        <span>
          Public transport should be avoided where possible. In cases where
          taking public transport is unavoidable, disinfection of the items
          delivered should be carried out.&nbsp;
        </span>
      </li>
      <li>
        <span>
          Take care to wear gloves when handling any items which may be given to
          people who may have compromised immune systems. The virus can live on
          inanimate surfaces for up to 24 hours.&nbsp;
        </span>
      </li>
      <li>
        <span>
          If you cannot wear gloves, disinfect any surface that will be handled
          by the person you are delivering to.
        </span>
      </li>
    </ol>

    <hr />

    <h2>Food and Essential Supplies</h2>
    <ol>
      <li>
        <span>
          Ask for a list of the items that they need you to collect for them.
        </span>
      </li>
      <li>
        <span>Ask where they want you to purchase their items from.</span>
      </li>
      <li>
        <span>
          Chat with them about arranging payment between you. The principles of
          mutual aid we are using are based on an agreement between you as
          individuals based on trust. If you’re worried about being able to
          afford their items or that they may be unable to pay, contact us for
          advice
        </span>
      </li>
      <li>
        <span>
          Arrange a time to drop their shopping requests to their house. Make
          sure you leave enough time to go to the shop to buy everything!
        </span>
      </li>
      <li>
        <span>
          Follow all the safety guidance outlined above to deliver their items.
        </span>
      </li>
    </ol>

    <hr />

    <h2>Post</h2>
    <ol>
      <li>
        <span>
          If they need you to collect post, ask them where the collection
          location is, if there are any special codes or information needed to
          collect the item, and if there is any cost involved in sending their
          item.
        </span>
      </li>
      <li>
        <span>
          If they need to send an item, ask them what it is, where it needs to
          be sent from, and if there is any cost involved in sending their item.
        </span>
      </li>
      <li>
        <span>
          If they need to pay for anything, chat with them about arranging
          payment between you. The principles of mutual aid we are using are
          based on an agreement between you as individuals based on trust. If
          you’re worried about being able to afford sending their item or that
          they may be unable to pay, contact an ACORN organiser before you
          complete the request.
        </span>
      </li>
      <li>
        <span>Arrange a time to collect/deliver their post.</span>
      </li>
      <li>
        <span>Follow all the safety guidance outlined above.</span>
      </li>
    </ol>
  </Layout>
)

export default ResourcesPage
