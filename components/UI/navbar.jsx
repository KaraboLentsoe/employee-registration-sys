import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

function Nav() {
  const variants = ["static", "floating", "sticky"];

  return (
    <Navbar
      isCompact
      isBordered
      variant="sticky"
      css={{ background: "#155263" }}
    >
      Navbar
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Name</Navbar.Link>
        <Navbar.Link href="#">Last Name</Navbar.Link>
        <Navbar.Link href="#">ID Num</Navbar.Link>
        <Navbar.Link href="#">Email</Navbar.Link>
        <Navbar.Link isActive href="#">
          Today's Date
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default Nav;
