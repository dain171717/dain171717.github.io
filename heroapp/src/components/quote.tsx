// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
// import { Image } from "@heroui/image"
// import { Button } from "@heroui/button"
import {Card, CardHeader, Image} from "@heroui/react";

type quoteProps = {
  content: string;
  tags: string;
}

export default function Quote(props: quoteProps) {
  return (
    // <div className="max-w-[40vw] gap-2 grid grid-cols-1 grid-rows-1">
    <div className="flex items-center justify-center ">
      <Card className="col-span-12 sm:col-span-4 w-[80vw] h-[20vw]">
        <CardHeader className="absolute flex-col items-center">
          <h3 className="text-white font-medium text-center">{props.content}</h3>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-4.jpeg"/>
        <h3 className="text-white font-medium text-center">{props.content}</h3>
      </Card>
    </div>
  );
}
