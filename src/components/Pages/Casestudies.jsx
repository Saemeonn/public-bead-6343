import { Button, Input, InputGroup, InputLeftElement, Select, Skeleton, Spinner, Stack } from '@chakra-ui/react'
import "../Pages/discover.css"
import { useContext, useEffect, useReducer, useState } from 'react';
import { AuthContext } from "../Provider/ThemeProvider";
import { ArrowUpIcon, Search2Icon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { initialState } from '../initialState';
import axios from 'axios';
import { reducer } from '../reducer';
import { useNavigate } from 'react-router';


export default function Casestudies() {
    const { isAuth, loading, changeLoad, changeErr, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)
    const [cases,setCases] = useState([]);
    const [search,setSearch] = useState(null);
    const [cate,setCate] = useState(null);
    const [order,setOrder] = useState(null);



    const navi = useNavigate()

    const [state,dispatch]=useReducer(reducer,initialState) 

    const fetcher = async() =>{
        changeLoad()
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`, {
            params:{
                q:search,
                category:cate,
                order: order
            }
        }).then((res)=>{
            setCases(res.data)
            console.log(res.data);
            changeLoad()
        }).catch(()=>{
            changeErr()
        })
    }
    const handleroute =  (id) =>{
        console.log('ID',id);
        navi(`/singlecasestudies/${id}`)
    }
   
   useEffect(()=>{
   },[loading])
    useEffect(()=>{
        fetcher()
    },[])
    return (
        <div className='discover' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>
            {/* <h1>Discover</h1> */}
            <div className='disSearch'>
                <label>
                    <InputGroup size='lg' >
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color={theme === "light" ? 'black' : "black"}
                            pt='5'
                        />
                        {elem === "dis" && <Input type="text" color='tomato' variant='outline' borderRadius={30} placeholder="Search the creative world art" htmlSize={59} width='auto' height='16' />}

                        <Tabs variant='soft-rounded' colorScheme='black' >
                            <TabList >
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><Icon as={MdOutlinePeopleAlt} /> {`      `}Futures</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon /> {`      `}Options</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon /> {`      `}Equities</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon /> {`      `}Cryptocurrencies</Tab>

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
                        <Select variant='outline' placeholder='By Market' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }} >
                            <option value='option1' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>FinTech Firm</option>
                            <option value='option2' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Retail Broker</option>
                            <option value='option3' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>institutional Broker</option>
                            <option value='option3' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Trading Power</option>
                            <option value='option3' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Exchange</option>
                        </Select>
                    </div>
                    <div>
                        <Select variant='outline' placeholder=''  >
                            <option value='Asc' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Most Used</option>
                            <option value='option2' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Least Used</option>
                            <option value='option3' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Latest</option>
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
            <div className='casehead'>
                <h1>Case Studies</h1>
                <p>Explore the projects Devexperts has completed worldwide.
                    <br />
                    Each case study is distinct: we develop solutions that suit clients’ unique goals.</p>
            </div>
            <div className='cases'>
                        {loading && <Skeleton />}
                        {cases.map((i)=>{
                            return <div key={i.id} onClick={(()=>{handleroute(i.id)})}>
                                    <img src={i.image} alt="" />
                                    <h1>{i.title}</h1>
                            </div>
                        })}
            </div>

        </div>
    )
}