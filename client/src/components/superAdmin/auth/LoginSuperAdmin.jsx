import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { authSA } from "../../../redux/actions/auth";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const LoginSuperAdmin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [secretTokenUser, setSecretTokenUser] = useState('');

  // const handleShowPassword = () => {

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const SuperAdminToken = {
      secretToken: secretTokenUser
    }
    dispatch(authSA(SuperAdminToken)).then((res) => {
      if (res.success) {
        toast.success(res.message)
        navigate('/superadmin')
      }else{
        toast.error(res.message)
      }
    })

    // const data = response.data;
    // console.log("This is data from SA Login page")
    // console.log(data);
    // return data.token; // This is the JWT

  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <ToastContainer />
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" /> */}
        <Heading color="#e4b49d"> Hotel Journals </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    onChange={(e) => setSecretTokenUser(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                variant="solid"
                type="submit"
                colorScheme='whatsapp'
                // color="#e4b49d"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginSuperAdmin
