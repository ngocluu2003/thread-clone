import { Avatar, Box, Flex, VStack, Text, WrapItem, Menu, MenuButton, Portal, MenuList, MenuItem, useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
const UserHeader = () => {
    const toast = useToast()

    const copyUrl = () => {
        const currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl).then(() => {
            toast ({
                title: "Account created",
                status: "success",
                description: "Profile link copied",
                duration: 3000,
                isClosable: true,
            })
        })
    }
  return (
    <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
                <Text fontSize={"2x1"} fontWeight={"bold"}>Mark</Text>
                <Flex gap={2} alignItems={"center"}>
                    <Text fontSize={"sm"}>markzuckerberg</Text>
                    <Text fontSize={{base: "xs", md: "sm", 'lg':"md"}} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>thread.next</Text>
                </Flex>
            </Box>
            <Box>
                <WrapItem>
                <Avatar
      size={{base: "md" , md: "lg"}}
      name='Mark'
      src='/zuck-avatar.png'
    />
                </WrapItem>
            </Box>    
        </Flex>
        <Text>Co-founder</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>3.2k followers</Text>
                <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
                <Link><Text color={"gray.light"}>instagram.com</Text></Link>
            </Flex>
            <Flex>
                <Box className='icon-container'><BsInstagram size={24} cursor={"pointer"} /></Box>
                <Box className='icon-container'>
                    <Menu>
                        <MenuButton>
                            <CgMoreO size={24} cursor={"pointer"} />

                        </MenuButton>
                        <Portal>
                            <MenuList bg={"gray.dark"}>
                                <MenuItem bg={"gray.dark"} onClick={copyUrl}>Copy link</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
        <Flex w={"full"}>
            <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
                <Text fontWeight={"bold"}>Threads</Text>
            </Flex>
            <Flex flex={1} borderBottom={"1px solid gray"} color={"gray.light"} justifyContent={"center"} pb={"3"} cursor={"pointer"}>
                <Text fontWeight={"bold"}>Replies</Text>
            </Flex>
        </Flex>
    </VStack>
  )
}

export default UserHeader