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
    const { isAuth, loading, changeLoad, setLoad, changeErr, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)
    const [cases, setCases] = useState([]);
    const [search, setSearch] = useState(null);
    const [cate, setCate] = useState(null);
    const [order, setOrder] = useState(null);
    const [sort, setSort] = useState("users");




    const navi = useNavigate()

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetcher = async () => {
        setLoad(true)
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`, {
            params: {
                q: search,
                category: cate,
                sort: order? "sort" : null,
                order: order
            }
        }).then((res) => {
            setCases(res.data)
            // console.log(res.data);
            setLoad(false)
        }).catch(() => {
            changeErr()
        })
    }
    const handleFilter = (i) => {
        if (i === 0) {
            setCate(null)
            setOrder(null)
        }
        else if (i === 1) {
            setCate("FinTech Firm")
        }
        else if (i === 2) {
            setCate("Exchange")
        }
        else if (i === 3) {
            setCate("Trading Power")
        }
        else if (i === 4) {
            setCate("Institutional Broker")
        }

    }
    const handleroute = (id) => {
        navi(`/singlecasestudies/${id}`)
    }
    useEffect(()=>{
		let timer = setTimeout(() => {
			fetcher()	
		}, 10);
		return () => clearTimeout(timer)
	},[search])
    useEffect(() => {
    }, [loading])

    useEffect(() => {
        fetcher()
    }, [search, cate, order,sort])
    return (
        <div className='discover' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>
            <div className='disSearch'>
                <label>
                    <InputGroup size='lg' >
                        <InputLeftElement
                            pointerEvents='none'
                            fontSize='1.2em'
                            color={theme === "light" ? 'black' : "black"}
                            pt='5'
                        />
                        {elem === "dis" && <Input onChange={((e)=>{setSearch(e.target.value)})} type="text" color='tomato' variant='outline' borderRadius={30} placeholder="Search the creative world art" htmlSize={59} width='auto' height='16' />}

                        <Tabs variant='soft-rounded' colorScheme='black' onChange={(index) => handleFilter(index)} ml={'30px'}>
                            <TabList>
                                <Tab value={'Futures'} _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><Icon as={MdOutlinePeopleAlt} mr={'10px'}/> {`      `}All</Tab>

                                <Tab value={'Futures'} _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><Icon as={MdOutlinePeopleAlt} /> {`      `}Futures</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon mr={'10px'}/> {`      `}Options</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon mr={'10px'}/> {`      `}Equities</Tab>
                                <Tab _selected={{ color: theme == "light" ? 'white' : 'black', bg: theme === "light" ? 'black' : 'white', }}><ArrowUpIcon mr={'10px'}/> {`      `}Cryptocurrencies</Tab>

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
                        <Select variant='outline' _placeholder={'By Market'} style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }} onChange={((e) => {
                            if ((e.target.value) === "hel") {
                                setCate(null)
                                setOrder(null)
                            }
                            else {
                                setCate(e.target.value)
                            }
                        })}>
                            <option value="hel" style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>By Market</option>
                            <option value='FinTech Firm' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>FinTech Firm</option>
                            <option value='Retail Broker' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Retail Broker</option>
                            <option value='institutional Broker' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>institutional Broker</option>
                            <option value='Trading Power' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Trading Power</option>
                            <option value='Exchange' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Exchange</option>
                        </Select>
                    </div>
                    <div>
                        <Select variant='outline' placeholder='' onChange={((e) => { setOrder(e.target.value) })}  >
                            <option value='asc' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Most Used</option>
                            <option value='desc' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Least Used</option>
                            <option value='asc' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme !== "light" ? "white" : "black" }}>Latest</option>
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
                <p style={{ color: theme === "light" ? "black" : "white" }}>Explore the projects Devexperts has completed worldwide.
                    <br />
                    Each case study is distinct: we develop solutions that suit clients’ unique goals.</p>
            </div>
            <div className='cases'>
                {loading && <Skeleton />}
                {cases.map((i) => {
                    return <div key={i.id} onClick={(() => { handleroute(i.id) })}>
                        <div>
                            <img src={i.image} alt="" />
                        </div>
                        <h1>{i.title}</h1>
                    </div>
                })}
            </div>

        </div>
    )
}