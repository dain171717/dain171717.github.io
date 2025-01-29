// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
// import { Image } from "@heroui/image"
// import { Button } from "@heroui/button"
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";

export default function QuoteCard() {
  return (
    // <div className="max-w-[40vw] gap-2 grid grid-cols-1 grid-rows-1">
    <div className="flex items-center justify-center ">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h3 className="text-white font-medium text-large">기분이 저기압일땐 고기앞으로 가라</h3>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://heroui.com/images/card-example-4.jpeg"
        />
      </Card>
    </div>
  );
}
