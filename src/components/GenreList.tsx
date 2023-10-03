import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImagedUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export default function GeneraList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image objectFit={'cover'} src={getCroppedImagedUrl(genre.image_background)} boxSize={"30px"} borderRadius={8}></Image>
              <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize={"lg"} variant={"link"} onClick={() => onSelectGenre(genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
