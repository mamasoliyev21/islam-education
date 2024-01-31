import { Button, Heading, Tag, Text } from "@/components";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Heading tag="h1">childen</Heading>
      <Text size="l">Text</Text>
      <Tag size="m" color="red">
        Size s == red
      </Tag>
      <Tag size="s" color="green">
        Size s == red
      </Tag>
      <br />
      <Button
        arrow={click ? "down" : 'right'}
        oppearance="ghost"
        onClick={() => setClick(prev => !prev)}
      >
        Primary
      </Button>
    </>
  );
}
