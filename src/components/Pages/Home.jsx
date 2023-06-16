import { useContext } from "react"
import { AuthContext } from "../Provider/ThemeProvider"
import "../Pages/discover.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Box, Center, Icon, Grid, GridItem } from '@chakra-ui/react'
import { FiSettings } from "react-icons/ci";
import { GiAbstract103 } from "react-icons/gi"
import { BiMeteor, BiCheck, BiChat, BiBox } from "react-icons/bi"
import { BsLightning, BsTrophy, BsCheckCircle, BsChevronRight } from "react-icons/bs"





export default function Home() {

    const trading = [
        {
            id: 1,
            name: "Equities & Derivatives Trading Platforms",
            img: "https://devexperts.com/app/uploads/2023/04/brokerage-solutions-xt.png"
        },
        {
            id: 2,
            name: "Forex/CFD Trading Platforms",
            img: "https://devexperts.com/app/uploads/2023/04/brokerage-solutions-cfd.png"
        },
        {
            id: 3,
            name: "Cryptocurrency Trading Platforms",
            img: "https://devexperts.com/app/uploads/2023/04/brokerage-solutions-crypto.png"
        },
        {
            id: 4,
            name: "Solutions for Exchanges",
            img: "https://devexperts.com/app/uploads/2020/12/exchanges-scheme-front.png"
        },
        {
            id: 5,
            name: "Wealth Management Solutions",
            img: "https://devexperts.com/app/uploads/2020/12/wealth-management.png"
        }
    ]
    const quality = [
        {
            id: 1,
            name: "Unique Set of Components",
            desc: "All our solutions are modular and our clients can select just the components they need and integrate them into their existing infrastructure or they can assemble the entire set of components to build a complete standalone product.",
            icon: GiAbstract103
        },
        {
            id: 2,
            name: "Shorter Time to Market",
            desc: "Our customized solutions are based on ready-to-use components of our existing trading platform framework. This allows us to deliver complex financial solutions significantly faster when compared to other technology providers.",
            icon: BsLightning
        },
        {
            id: 3,
            name: "Global Compliance",
            desc: "All our financial solutions are compliant with regulatory requirements in major financial regions of the world (SEC, FCA, CySEC, CMB, JFSA, etc.) and conform with the standards of the most important global exchanges and market participants.",
            icon: BsCheckCircle
        },
        {
            id: 4,
            name: "FinTech Consulting",
            desc: "We provide consulting services in software architecture, engineering, UI design, hardware setup for trading platforms and data services.",
            icon: BiChat
        },
        {
            id: 5,
            name: "Flexible Contract Options",
            desc: "Our solutions can be white-labeled, licensed or fully owned by the client. We offer fixed price, time-and-materials and a variety of other commercial contract options.",
            icon: BiBox
        },
        {
            id: 6,
            name: "Award-Winning Solutions",
            desc: "The high performance and design of our solutions resulted in our clients being recognized by some of the world’s most prestigious financial industry magazines such as Barron’s, Trader Monthly, Shares and Technical Analysis of Stocks & Commodities.",
            icon: BsTrophy
        }
    ]

    const highlights = [
        {
            id: 1,
            name: "Devexperts Re-enforces Commitment to Security with Successful SOC 2® Completion",
            desc: "Devexperts, a leading developer and provider of financial software solutions for brokers and financial institutions, today announced having successfully completed an SOC 2 cybersecurity assessmen",
            img: "https://devexperts.com/app/uploads/2023/05/news_SOC2.png"
        },
        {
            id: 2,
            name: "DXcharts Integrates with ChatGPT to Provide Users with Essential Term Descriptions",
            desc: "DXcharts, the financial charting library developed by Devexperts, has integrated with ChatGPT to provide end users with insights into core charting elements.",
            img: "https://devexperts.com/app/uploads/2023/03/chatgpt-in-dxcharts-768x432.png"
        },
        {
            id: 3,
            name: "Stock Brokers Can Now Offer Fractional Trading with a New DXtrade XT Platform",
            desc: "Today were announcing a public release of DXtrade XT, an out-of-the-box trading platform for exchange-traded instruments: stocks (whole, in fractional or notional shares), options, mutual funds, and fixed income",
            img: "https://devexperts.com/app/uploads/2022/06/DXtrade_xt_news.png"
        }
    ]
    const { isAuth, loading, setUserN, authenticate, setElem, elem, theme, setTheme } = useContext(AuthContext)

    return (
        <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
            <h1 style={{ fontSize: '38px', fontWeight: '900', marginTop: '60px', marginBottom: '110px' }}>Trading Platforms & Exchanges | Brokerage Solutions</h1>

            <div className="tradingoptions">
                <Tabs variant='unstyled'>
                    <TabList>
                        {trading.map((i) => (
                            <div className="trade" key={i.id}>
                                <Tab _selected={{ color: 'white', bg: 'orange.500', padding: '50px 10px 50px 10px' }} fontSize={'20px'} fontWeight={'600'} padding={'50px 10px 50px 10px'} color={theme === 'light' ? "black" : "black"} bg={'white'} > <h5>{i.name}</h5></Tab>

                            </div>
                        ))}
                    </TabList>

                    <TabPanels>

                        {trading.map((i) => (
                            <TabPanel>
                                <Center>
                                    <Box boxSize='67%' bg={i.id === 4 ? "black" : 'none'} padding={i.id === 4 ? "40px" : 'none'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} >
                                        <Image src={i.img} alt='Dan Abramov' />
                                    </Box>
                                </Center>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </div>
            <div className="qo">


                <div className="qualities" style={{ color: theme === 'light' ? 'black' : 'white' }}>
                    {quality.map((i) => (
                        <div key={i.id} style={{ color: theme === 'light' ? 'black' : 'white' }}>
                            <Icon as={i.icon} color={"rgb(255, 111, 0)"} boxSize={'65px'} />
                            <h3>{i.name}</h3>
                            <p>{i.desc}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="Highlights" style={{ backgroundColor: theme === "light" ? "rgb(243, 241, 241)" : "rgb(16, 8, 6)" }}>
                <h2>Highlights</h2>
                <div>
                    {highlights.map((i) => (
                        <div key={i.id} style={{ backgroundColor: theme === 'light' ? 'black' : 'white', color: theme !== 'light' ? 'black' : 'white' }}>
                            <div>
                                <img src={i.img} alt="" />
                            </div>
                            <div>
                                <h2>{i.name}</h2>
                                <p>{i.desc}</p>

                            </div>
                            <div className="Learnmore">
                                <a href="">Learn More</a> <Icon as={BsChevronRight} color={"rgb(255, 111, 0)"} boxSize={'15px'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="webinar">
                <img src={require("../../webinar.PNG")} alt="" />

            </div>
            <div className="conclusion">
                <h2>Let us help you with your business challenges</h2>
                <p>Contact us to schedule a call or set up a meeting</p>
                <button>Contact us</button>
            </div>
            <div className="library"> 
                        <h1>
                            Explore Our Library
                        </h1>
                        <div>
                            <div>
                                <div>
                                    <img src="https://devexperts.com/app/uploads/2023/01/fractional-trading-336%D1%85460-1-168x230.png" alt="" />
                                </div>
                                <div className="info">
                                    <h2>Fractional Trading: Broker's Side Support and Risk Limitation</h2>
                                    <p>In this white paper, we’ll break down technology requirements for fractional trading and explain how it provides brokers with a dramatic competitive differentiator.</p>
                                    <a href="">Read the e-book</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://devexperts.com/app/uploads/2023/02/order-sweeping-algorithms_336%D1%85460-168x230.png" alt="" />
                                </div>
                                <div className="info">
                                    <h2>Order Sweeping Algorithms in Forex Trading</h2>
                                    <p>A behind the scenes look at broker operations related to liquidity management and liquidity flows in the Forex market.</p>
                                    <a href="">Read the e-book</a>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="footer">
            <img src={require("../../footer.PNG")} alt="" />
                
            </div>
        </div>
    )
}