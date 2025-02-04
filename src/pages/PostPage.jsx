import { Avatar, Flex, Image, Text, Box, Divider, Button } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "../components/Actions"
import Comment from "../components/Comment"
import { useState } from "react"

const PostPage = () => {
  const [liked, setLiked] = useState(false)
  return (
    <div>
      <Flex w={"full"} alignItems={"center"} gap={3}>
        <Avatar src="/zuck-avatar.png" size={"md"} name="Mark"/>
        <Flex>
          <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
          <Image src="/verified.png" w={4} h={4} ml={4} />
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>id</Text>
          <BsThreeDots/>
        </Flex>
      </Flex>
      <Text my={3}>Let&#39;s talk about threads</Text>
      <Box borderRadius={6}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"gray.light"}>
          <Image src={"/post1.png"} w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>23 replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>{200 + (liked ? 1: 0)} likes</Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2x1"}>👍</Text>
          <Text color={"gray.light"}>Get the app to like, reply and repost.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4}/>
      <Comment comment="look really good" createAt="1d" likes={100} username="john" userAvatar="https://bit.ly/tioluwani-kolawole"/>
      <Comment comment="Can you teach me ?" createAt="2d" likes={20} username="sarah" userAvatar="https://bit.ly/kent-c-dodds"/>
      <Comment comment="I like this" createAt="3d" likes={100} username="dave" userAvatar="https://bit.ly/dan-abramov"/>
    </div>
  )
}

export default PostPage