import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes = {1200} replies={481} postImg={"./post1.png"} postTitle="Let's talk about threads."/>
      <UserPost likes = {231} replies={23} postImg={"./post2.png"} postTitle="Reactjs tutorial"/>
      <UserPost likes = {32} replies={55} postImg={"./post3.png"} postTitle="I like Justin Bieber."/>
      <UserPost likes = {322} replies={545} postImg={"./post4.png"} postTitle="This is my first thread."/>
     
    </>
  )
}

export default UserPage