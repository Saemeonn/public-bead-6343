import { Box, Center, Icon, TabIndicator, theme, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,

} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import App from "../../App";
import "../Navabar/nav.css"
import { BellIcon, MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import InternalStateEx from "../Popover";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../Provider/ThemeProvider";
import { useState } from "react";
import { is } from "@babel/types";
import Dashboard from "../Feeds";
import { CiBrightnessDown, CiBrightnessUp, CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";






export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [username, setName] = useState("")
  const [pass, setPass] = useState("")
  const { isAuth, loading, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [message, setMessage] = useState(false);

  const checkLogin = async () => {
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`)
      let data = await res.json();
      const user = data.find(
        (user) => user.username === username && user.password === pass
      )
      console.log("user", user);
      if (user) {
        authenticate()
        setUserN(user.username)
        setMessage("login")
        return true
      }
      else {
        setMessage(true)
      }
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {

  }, [message])
  // console.log("auth", isAuth,message);
  return (
    <div className="navbar" style={{backgroundColor: theme==="light"? "white":"black", color:theme==="light"? "black":"white"}}>
      <div>
        {/* <img src={require("../../ArtChatwhite.png")} alt="" /> */}
        <Tabs mt={25} size={"lg"} variant="unstyled" >
          <TabList >
            <Tab pt={25} > 
            <Link to="/">Home</Link>
            </Tab>
            <Tab pt={25} onClick={(() => {  })}>Solutions</Tab>
            <Tab pt={25} onClick={(() => {  })}>Services</Tab>
            {isAuth && <Tab pt={25} isDisabled={isAuth === false} onClick={(() => { })}>
              
              <Link to="connect">Connectivity</Link>
              </Tab>}
              {!isAuth &&
                <Popover>
                <PopoverTrigger>
                <Tab pt={25} color={'grey'}>Connectivity</Tab>
                </PopoverTrigger>
                <PopoverContent w='520px' p='10px' fontSize={20}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>You Need to Login First!</PopoverHeader>
                  <PopoverBody>To Have Access Over Connectivity!</PopoverBody>
                </PopoverContent>
              </Popover>

              }
           {isAuth &&  <Tab pt={25} isDisabled={isAuth === false} onClick={(() => { setElem("dis") })}> 
           <Link to="casestudies"> Case Studies</Link>
          
           </Tab>}
            {!isAuth &&
                <Popover>
                <PopoverTrigger>
                <Tab pt={25} color={'grey'}>Case Studies</Tab>
                </PopoverTrigger>
                <PopoverContent  w='520px' p='10px' fontSize={20}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>You Need to Login First!</PopoverHeader>
                  <PopoverBody>To Have Access Over Our Case Study!</PopoverBody>
                </PopoverContent>
              </Popover>

              }
            <Tab pt={25} onClick={(() => { setElem("dis") })}>Company</Tab>
          </TabList>
          <TabIndicator mt="-1.5px"
            height="2px"
            bg="orange.500"
            borderRadius="1px" />
          <TabPanels>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <div className="inp"> 
      {elem!=="dis" && <input type="text" placeholder="Search" name="" id="search" />}
       </div>
      <div className="modale">
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}

        >
          <ModalOverlay />
          <ModalContent className="Logform">
            <ModalHeader>Login into your account</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody pb={6} pt={18} >
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input ref={initialRef} placeholder='Username' onChange={((e) => { setName(e.target.value) })} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' onChange={((e) => { setPass(e.target.value) })} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Box display="flex" justifyContent="space-between" w="100%" pl={30} pr={30} >
                <Box color='red' > {message ? (<p data-testid="invalidAlert">Invalid credentials</p>) : null}</Box>
                <Box>
                  <Button colorScheme='blue' mr={3} onClick={(() => {
                    checkLogin();
                    if (message === false) {
                      onClose()
                    }
                  })} >
                    Login
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </Box>
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <div>
        <div className="themer"  style={{backgroundColor: theme==="light"? "black" : "orange"}}  onClick={(()=>{setTheme(theme==="light"? "dark" : "light")})}>
            {theme=="light"? <MoonIcon mt={"2px"} color={"yellow"} boxSize={6}/> : 
            <MoonIcon mt={"2px"} color={"white"} boxSize={6}/>
            // <Icon mt={"2px"} color={"yellow"}  boxSize={6} as={CiStar}/>
            }
        </div>
         

        <Popover>
          <PopoverTrigger>
            <BellIcon boxSize={6} />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Notification On!</PopoverHeader>
            <PopoverBody>You'l now receive all notifications!</PopoverBody>
          </PopoverContent>
        </Popover>


        {message === "login" ? (<Button colorScheme='black' variant='outline'>
          Your Work
        </Button>) :
          (<ul className="auth">
            <li className="loginBtn" onClick={onOpen} style={{backgroundColor: theme=="light"?  "white" : "black",color: theme=="light"?  "black" : "orange",border: theme=="light"?  "0.5px solid #cecece" : "0.5px solid orange" }}>
              Log In
            </li>
            <li className="signupBtn" 
             style={{backgroundColor: "orange" ,color: "white" }}
             >
              Sign Up
            </li>
          </ul>)}
      </div>

    </div>
  );
}