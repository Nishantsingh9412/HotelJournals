import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

import book4 from "../../assets/img/book4.jpg";
import book5 from "../../assets/img/book5.jpg";
import book6 from "../../assets/img/book6.jpg";
import book7 from "../../assets/img/book7.jpg";
import bookLarge from "../../assets/img/book_large.png";

const FeaturedBooks = () => {
  const bookStyleTopBooks = {
    boxShadow: "rgb(22, 27, 27) 2px 4px 10px",
    borderRadius: "2%",
  };

  const books = [
    {
      title: "Creador",
      image: book4,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book5,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book7,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
  ];

  return (
    <Container maxW="container.lg" py={4}>
      <Box mb={4}>
        <Heading as="h3" size="lg">
          Featured Books
        </Heading>
        <hr style={{ border: "2px solid black", width: "10vw" }} />
        <Text pt={2} fontSize="md">
          Handpicks just for you
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={4}>
        {books.map((book, index) => (
          <Box key={index}>
            <Stack spacing={4}>
              <Image src={book.image} alt={book.title} style={{ ...bookStyleTopBooks, maxWidth: "100%" }} />
              <div>
                <Heading size="md">{book.title}</Heading>
                <Stack direction="row" align="center">
                  <Box as="span" color="gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className="fa-regular fa-star"></i>
                    ))}
                  </Box>
                </Stack>
                <Text>{book.description}</Text>
              </div>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturedBooks;
