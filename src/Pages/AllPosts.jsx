import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard as PostCardComponent, Container} from '../components'

function AllPosts() {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='py-2 w-1/4'>
                        <PostCardComponent post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts
