import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from "@/components";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  const [rating, setRating] = useState<number>(4)

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

      <br />


      <Input placeholder="Enter"/>
      <TextArea placeholder="Message"/>
      <br />

     <Rating setRating={setRating} rating={rating} isEditabled={true}/>


     <Card color="white">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quos labore enim similique cum eligendi nesciunt incidunt ducimus illo excepturi, exercitationem aliquid?
     </Card>

     <Card color="primary">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quos labore enim similique cum eligendi nesciunt incidunt ducimus illo excepturi, exercitationem aliquid?
     </Card>
    </>
  );
}
