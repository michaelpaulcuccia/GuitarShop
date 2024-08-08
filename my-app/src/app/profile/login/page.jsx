import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function page() {
  return (
    <div>
      <div>
        If not a memember, please<Link href="/profile/signup">sign up</Link>
      </div>
    </div>
  );
}
