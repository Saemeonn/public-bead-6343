import { Button, Input, InputGroup, InputLeftElement, Select, Stack } from '@chakra-ui/react'
import "../Pages/discover.css"
import { useContext, useEffect } from 'react';
import { AuthContext } from "../Provider/ThemeProvider";
import { ArrowUpIcon, Search2Icon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MdOutlinePeopleAlt } from 'react-icons/md'


export default function Casestudies() {
  const { isAuth, loading, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)

    return (
        <div className='discover' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>
            {/* <h1>Discover</h1> */}
            <div className='disSearch'>
                <label>
                    <InputGroup size='lg' >
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color={theme==="light"? 'black' : "black"}
                            pt='5'
                        />
                        {elem === "dis" && <Input type="text" color='tomato' variant='outline' borderRadius={30} placeholder="Search the creative world art" htmlSize={59} width='auto' height='16' />}

                        <Tabs variant='soft-rounded' colorScheme='black' >
                            <TabList >
                                <Tab  _selected={{ color:theme=="light"? 'white': 'black', bg: theme==="light"? 'black' : 'white',  }}><Icon as={MdOutlinePeopleAlt} /> {`      `}Futures</Tab>
                                <Tab _selected={{ color:theme=="light"? 'white': 'black', bg: theme==="light"? 'black' : 'white',  }}><ArrowUpIcon /> {`      `}Options</Tab>
                                <Tab _selected={{ color:theme=="light"? 'white': 'black', bg: theme==="light"? 'black' : 'white',  }}><ArrowUpIcon /> {`      `}Equities</Tab>
                                <Tab _selected={{ color:theme=="light"? 'white': 'black', bg: theme==="light"? 'black' : 'white',  }}><ArrowUpIcon /> {`      `}Cryptocurrencies</Tab>

                            </TabList>
                            <TabPanels>
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
                    </InputGroup>
                </label>

            </div>
            <div className='filterBar'>
                <div className='leftFl'>
                    <div >
                        <Select variant='outline' placeholder='By Market' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }} >
                            <option value='option1'  style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>FinTech Firm</option>
                            <option value='option2' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Retail Broker</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>institutional Broker</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Trading Power</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Exchange</option>
                        </Select>
                    </div>
                    <div>
                        <Select variant='outline' placeholder=''  >
                            <option value='Asc' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Most Used</option>
                            <option value='option2' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Least Used</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Latest</option>
                        </Select>
                    </div>
                </div>
                <div className='rightFl'>
                    <div>
                        {/* <Select variant='outline' placeholder='' >
                            <option value='option1' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Most Viewed</option>
                            <option value='option2' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Most Appriciated</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Most Recent</option>
                            <option value='option3' style={{backgroundColor:theme==="light"? "white" : "black",color:theme!=="light"? "white" : "black" }}>Most Currated</option>
                        </Select> */}
                    </div>
                    <div>

                    </div>
                </div>

            </div>


        </div>
    )
}