import { Button } from '@heroui/react';


type categoryProps = {
  name: string;
}
export default function Category(props: categoryProps) {
  const name = props.name;
  return <Button color="default">{name}</Button>
}