/** @jsxImportSource @emotion/react */
import { useState } from "react";

import { Txt } from "../components/Txt";
import { Input } from "../components/Input";

import { GoArrowRight } from "react-icons/go";

interface Props {
  consonant: string;
}

export function ConsonantInput(props: Props) {
  const { consonant } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 0.3fr 1fr",
        height: "80px",
        margin: "0 5px",
        alignItems: "center",
      }}
    >
      <Txt typography="h3">{consonant}</Txt>
      <GoArrowRight css={{ fontSize: "40px" }} />
      <Input
        value={inputValue}
        length={consonant.length}
        onChange={setInputValue}
      />
    </div>
  );
}
