import React from "react";
import Head from "next/head";
import { Anchor, Box, Heading } from "grommet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Us - Expatriant</title>
      </Head>
      <main>
        <Box align="center" margin="large">
          <Heading size="small">How can we help?</Heading>
          <Box direction="row">
            <Box margin="0.5rem 0.5rem 0.5rem 0">
              <Anchor href="/residency">Residency Abroad</Anchor>
            </Box>
            <Box margin="0.5rem 0 0.5rem 0.5rem">
              <Anchor
                target="_blank"
                href="https://calendly.com/expatriant-consultation/career"
              >
                Career Consultation
              </Anchor>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
}
