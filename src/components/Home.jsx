import React from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useState, useEffect } from 'react'
import { CircularIndeterminate } from "../loadanimation";
import DisplayPost from './DisplayPost';


const Home = () => {
  const [allposts, setAllPost] = useState([])
  const [loading, setLoading] = useState(true);
  const [search, setsearch] = useState(null);
  const [searchResult,setsearchResult] = useState([])
  
  const postRef = collection(db, "post")

  useEffect(()=>{
    if(allposts && search){
     setsearchResult (allposts.filter((item)=>item.user.toLowerCase().includes(search) || item.prompt.toLowerCase().includes(search)))
    }
  },[search])
  useEffect(() => {
    setLoading(true)
    const getPosts = async () => {
      await getDocs(postRef)
        .then(data=>{
          setAllPost(data.docs.map(docs => ({ ...docs.data(), id: docs.id })));
          setLoading(false)
    })
  }
    getPosts()
  }, [])
  return(
    
      <section className='max-w-7xl max-30px-auto'>
      <h1 className='nidhi2'>The Community Showcase </h1>
    <p className='nidhi3'> Please take a moment to search for the image that captures your interest and aligns with your visual preferences.</p>
    <div className='generate-form mt-16'>
      <input 
      type="text" 
      name="search" 
      placeholder="search your prompt....."
      onChange={e=>setsearch(e.target.value)}
      value={search}
      />
    </div>
    <div className="m-10">
      {loading? (
        <div className="flex justify-center item-center">
          <CircularIndeterminate/>
        </div>
      ):(
  <div className='grid grid-cols-4 gap-4'>
        {search && searchResult ? searchResult.map(post=><DisplayPost post={post}/>)
        :
        
          allposts && allposts.map(post=>(
          <DisplayPost post={post}/>
        ))}
        </div>
      )}
    </div>
    </section>
   
  )
}
export default Home