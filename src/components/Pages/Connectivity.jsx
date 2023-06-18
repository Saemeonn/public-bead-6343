import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input"
import "../Pages/discover.css"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { useContext, useEffect, useState } from "react"
import { async } from "q"
import { AuthContext } from "../Provider/ThemeProvider"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Connectivity() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [date, setDate] = useState(null)
    const [eq, setEq] = useState(null)
    const [meets, setMeets] = useState([])

    const { ID } = useContext(AuthContext)

    const fetchMeet = async () => {
        try {
            let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/meets?userid=${ID}`)
            let data = await res.json();
            console.log(data);
            setMeets(data)
        } catch (e) {
            console.log(e);
        }
    }

    const appointMeet = async () => {
        try {
            let meet = {
                name:name,
                email:email,
                date:date,
                equity:eq,
                userid:ID
            };
            //  console.log(data); we are getting;
            let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/meets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(meet),
            })
            let d = await response.json();
            fetchMeet()
        } catch (e) {
            console.log(e);
        }
    }

    const handelForm = (e) => {
        e.preventDefault()
        appointMeet()
    }
    useEffect(() => {
        fetchMeet()
    }, [])
    return (
        <div className="connect">
            <h1>Bookings</h1>
            <div>
                <div className="bookmeet">
                    <div>
                        <div>

                            <h2>Book New Meetings</h2>
                            <div>
                                <FormControl >
                                    <FormLabel>First name</FormLabel>
                                    <Input placeholder='First name' size="lg" onChange={((e) => { setName(e.target.value) })} />
                                    <InputGroup mb={'15px'} size="lg" >
                                        <InputLeftAddon children='@' mt={'25px'} />
                                        <Input mt={'25px'} type='email' placeholder='Email' onChange={((e) => { setEmail(e.target.value) })} />
                                    </InputGroup>
                                    <FormLabel>Select date</FormLabel>
                                    <Input placeholder="Select Date and Time" size="lg" type="datetime-local" onChange={((e) => { setDate(e.target.value) })} />
                                    <FormLabel>Equity</FormLabel>
                                    <Select size="lg" placeholder='Select Equity' onChange={((e) => { setEq(e.target.value) })}>
                                        <option value={'Futures'}>Futures</option>
                                        <option value='Crypto'>Crypto</option>
                                        <option value='Exchange'>Exchange</option>
                                        <option value="Trading">Trading </option>
                                    </Select>
                                    <Button colorScheme="black" variant={'outline'} mt={'40px'} size="lg" className="booknow" onClick={handelForm}> Book now</Button>
                                </FormControl>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="yourmeets">
                    <div>
                        <div>
                            <div className="meethead">
                                <h2>Next Meetings</h2>
                            </div>

                            <div>
                                <p className="noti">All your new meets will appear here:</p>
                             {meets.length!==0 &&   <div className="meetlist" >
                                    {meets?.map((i) => (
                                        <div key={i.id}>
                                            <h3>{i.equity}</h3>
                                            <h5>Date: {` `}{i.date}</h5>
                                            <p>{i.email}</p>
                                            <h4>Join <ArrowForwardIcon /></h4>
                                        </div>
                                    ))}
                                </div>}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}