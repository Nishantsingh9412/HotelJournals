import React from 'react';
import { Box, Container, SimpleGrid, Image, Stack, Heading, Text } from "@chakra-ui/react";
import book1 from '../../assets/img/front_office.jpg';
import book2 from '../../assets/img/front_office2.jpg';
import book3 from '../../assets/img/front_office3.jpg';
import book5 from "../../assets/img/book5.jpg";

const bookStyleTopBooks = {
  boxShadow: 'rgb(22, 27, 27) 2px 4px 10px',
  borderRadius: '2%',
  maxWidth: '100%',
};

const TopBooks = () => {
  const books = [
    {
      title: "Front Office Agenda",
      image: book1,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book2,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book3,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
    {
      title: "Front Office Agenda",
      image: book5,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt?",
    },
  ];

  return (
    <Container maxW="container.lg" py={4}>
      <Box mb={4} ml={5}>
        <Heading as="h3" size="lg">
          Top Books
        </Heading>
        <hr style={{ border: '2px solid black', width: '10vw' }} />
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
        {books.map((book, index) => (
          <Box key={index}>
            <Stack spacing={4}>
              <Image src={book.image} alt={book.title} style={bookStyleTopBooks} />
              <div>
                <Heading size="md">{book.title}</Heading>
                <Stack direction="row" align="center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-regular fa-star"></i>
                  ))}
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

export default TopBooks;
