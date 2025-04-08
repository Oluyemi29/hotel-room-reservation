// components/emails/SubscribeConfirmation.tsx

import { Html, Head, Body, Container, Section, Text, Heading, Button } from "@react-email/components";
import * as React from "react";

export const SubscribeConfirmation = ({ siteLink }: { siteLink: string }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>Thank You for Subscribing!</Heading>
        </Section>

        <Section style={body}>
          <Text style={paragraph}>Hello 👋</Text>
          <Text style={paragraph}>
            You`ve successfully subscribed to our <span style={highlight}>HOTEL ROOM UPDATES</span>
          </Text>
          <Text style={paragraph}>
            We`ll keep you posted on our latest room offers, deals, and special discounts.
          </Text>
          <Button href={siteLink} style={button}>Visit Our Website</Button>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>&copy; 2025 Dev Oluyemi - All rights reserved.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SubscribeConfirmation;

// Inline styles
const main = {
  backgroundColor: "#f5f7fa",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#2a9d8f",
  padding: "30px 20px",
  textAlign: "center" as const,
  color: "#fff",
};

const heading = {
  margin: 0,
  fontSize: "24px",
};

const body = {
  padding: "30px 20px",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: 1.6,
  marginBottom: "10px",
};

const highlight = {
  color: "#2a9d8f",
  fontWeight: "bold" as const,
};

const button = {
  marginTop: "20px",
  padding: "12px 25px",
  backgroundColor: "#2a9d8f",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "16px",
};

const footer = {
  backgroundColor: "#f0f0f0",
  padding: "20px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "14px",
  color: "#777",
};
