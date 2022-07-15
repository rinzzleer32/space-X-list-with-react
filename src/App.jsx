import { useState,useEffect } from 'react'
import { Heading,Box, Image,Flex,Text,Tag, Spacer } from '@chakra-ui/react'
import {format,parseISO} from 'date-fns'
import { HiCalendar} from "react-icons/hi"

import * as Api from './services/launches'
import share from './assets/share.jpg'
import './App.css'

function App() {
  const [launches, setLaunches] = useState([])

  useEffect(()=>{
    Api.getAllLaunches().then(setLaunches);
  },[]);
  return (
    <>
      <Image m={3} src={share} width ="200"  />
      <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
      
      <section>
          {launches.map(launch =>(
            <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
              <Flex display="flex">
                <Text fontSize="2xl">
                  Mission {launch.flight_number} <strong>{launch.name}</strong>
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.success ? "green": "red"}>
                  {launch.success ? "Success": "Failure"}
                </Tag>
              </Flex>
              <Flex>
                  <HiCalendar />
                  <Text fontSize="sm">
                  {
                      format(parseISO(launch.date_local), "MM/dd/yyyy")
                  }
                  </Text>
              </Flex>
            </Box>
          ))}
      </section>
    </>
  )
}

export default App
