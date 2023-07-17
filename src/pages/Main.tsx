/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { Txt } from "../components/Txt";
import { Card } from "../components/card/Card";
import { CardTitle } from "../components/card/CardTitle";
import { CardImg } from "../components/card/CardImg";
import { PageLayout } from "../components/PageLayout";
import { CardFooter } from "../components/card/CardFooter";
import { Button } from "../components/Button";
import brainLogo from "../assets/brain-logo.jpg";

export function Main() {
  return (
    <PageLayout>
      <Card>
        <CardImg>
          <img
            css={css`
              max-width: 100%;
            `}
            src={brainLogo}
            alt="Simple brain Training Logo"
          />
        </CardImg>
        <CardTitle>
          <Txt typography="h1">Simple Brain Training</Txt>
        </CardTitle>
        <CardFooter>
          <Link to="/findName">
            <Button>Start</Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  );
}
