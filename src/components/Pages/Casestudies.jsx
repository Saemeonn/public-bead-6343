import { Button, Input, InputGroup, InputLeftElement, Select, Stack } from '@chakra-ui/react'
import "../Pages/discover.css"
import { useContext, useEffect } from 'react';
import { AuthContext } from "../Provider/ThemeProvider";
import { ArrowUpIcon, Search2Icon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MdOutlinePeopleAlt } from 'react-icons/md'


export default function Casestudies() {
    const { elem } = useContext(AuthContext)
    return (
        <div className='discover'>
            {/* <h1>Discover</h1> */}
            <div className='disSearch'>
                <label>
                    <InputGroup size='lg' >
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color='gray.300'
                            pt='5'
                            children={<Search2Icon color={"gray.500"} />}
                        />
                        {elem === "dis" && <Input type="text" color='tomato' variant='outline' borderRadius={30} placeholder="Search the creative world art" htmlSize={59} width='auto' height='16' />}

                        <Tabs variant='soft-rounded'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: 'black',  }}><Icon as={MdOutlinePeopleAlt} /> {`      `}Artist</Tab>
                                <Tab _selected={{ color: 'white', bg: 'black' }}><ArrowUpIcon /> {`      `}Trending</Tab>
                                <Tab _selected={{ color: 'white', bg: 'black' }}><ArrowUpIcon /> {`      `}Trending</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    {/* <p>one!</p> */}
                                </TabPanel>
                                <TabPanel>
                                    {/* <p>two!</p> */}
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </InputGroup>
                </label>

            </div>
            <div className='filterBar'>
                <div className='leftFl'>
                    <div>
                        <Select variant='outline' placeholder='Creative Fields' >
                            <option value='option1'>Photography</option>
                            <option value='option2'>Digital Art</option>
                            <option value='option3'>Graphics Design</option>
                            <option value='option3'>Illustrations</option>
                            <option value='option3'>Product Design</option>
                        </Select>
                    </div>
                    <div>
                        <Select variant='outline' placeholder='Order'  >
                            <option value='Asc'>Ascending</option>
                            <option value='option2'>Descending</option>
                            <option value='option3'>Latest</option>
                        </Select>
                    </div>
                </div>
                <div className='rightFl'>
                    <div>
                        <Select variant='outline' placeholder='' >
                            <option value='option1'>Most Viewed</option>
                            <option value='option2'>Most Appriciated</option>
                            <option value='option3'>Most Recent</option>
                            <option value='option3'>Most Currated</option>
                        </Select>
                    </div>
                    <div>

                    </div>
                </div>

            </div>


        </div>
    )
}