/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Txt } from "../components/Txt";
import brainLogo from "../assets/brain_main_image.jpeg";
import { Card } from "../components/card/Card";
import { CardTitle } from "../components/card/CardTitle";
import { CardImg } from "../components/card/CardImg";
import { PageLayout } from "../components/PageLayout";

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
      </Card>
    </PageLayout>
  );
}
