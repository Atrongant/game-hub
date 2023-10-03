import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
  onSearch: (value: string) => void
}

export default function SearchInput({onSearch}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={e=>{
      e.preventDefault()
      if(ref.current?.value) {
        onSearch(ref.current.value)
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Seach games..." variant={"filled"}></Input>
      </InputGroup>
    </form>
  );
}
