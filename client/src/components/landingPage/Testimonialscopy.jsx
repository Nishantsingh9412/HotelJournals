import React from "react";
import {
  Flex,
  Card,
  CardBody,
  Container,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
const Testimonialscopy = () => {
  return (
    <div>
      <Container centerContent>
        <Flex spacing="4" direction={{ base: "column", md: "row" }}>
          <div className="Anna Deynah card m-4 ">
            <Card minW="sm" maxW="lg">
              <CardBody>
                <Flex justifyContent="center">
                <Image
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="Green double couch with wooden legs"
                  borderRadius="full"
                  boxSize="150px"
                /></Flex>
                <center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Anna Deynah</Heading>
                    <Text pt="2" as="cite" fontSize="sm">
                      UX Designer
                    </Text>
                    <Text>
                      <sup>
                        <i className="fas fa-quote-left pe-2"></i>
                      </sup>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                      <sup>
                        <i className="fas fa-quote-right ps-2"></i>
                      </sup>
                    </Text>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </Stack>
                </center>
              </CardBody>
            </Card>
          </div>
          <div className="John Doe card m-4"> 
            <Card minW="sm" maxW="lg">
              <CardBody>
              <Flex justifyContent="center">
                <Image
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  borderRadius="full"
                  boxSize="150px"
                />
                </Flex>
                <center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">John Doe</Heading>
                    <Text pt="2" as="cite" fontSize="sm">
                      Web Developer
                    </Text>
                    <Text>
                      <sup>
                        <i className="fas fa-quote-left pe-2"></i>
                      </sup>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                      <sup>
                        <i className="fas fa-quote-right ps-2"></i>
                      </sup>
                    </Text>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </Stack>
                </center>
              </CardBody>
            </Card>
          </div>
          <div className="Maria Kate card m-1">
            <Card minW="sm" maxW="lg">
              <CardBody>
              <Flex justifyContent="center">
                <Image
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  alt="Green double couch with wooden legs"
                  borderRadius="full"
                  boxSize="150px"
                />
                </Flex>
                <center>
                  <Stack mt="1" spacing="1">
                    <Heading size="md">Maria Kate</Heading>
                    <Text pt="1" as="cite" fontSize="sm">
                      Photographer
                    </Text>
                    <Text>
                      <sup>
                        <i className="fas fa-quote-left pe-1"></i>
                      </sup>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                      <sup>
                        <i className="fas fa-quote-right ps-1"></i>
                      </sup>
                    </Text>
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i className="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </Stack>
                </center>
              </CardBody>
            </Card>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Testimonialscopy;
