import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import PostHead from './PostHead'
import { postData } from '../constants'

const Feed = ({setMode, mode}) => {
  return (
    <Box flex={4} p={2}>
      <PostHead setMode={setMode} mode={mode}/>
      {postData.map((post)=> (
        <Post
          key={post.id}
          abbreviation={post.abbreviation}
          name={post.name}
          tcolor={post.color}
          subheader={post.subheader}
          imageUrl={post.imageUrl}
          desc={post.desc}
        />
      ))}
    </Box>
  )
}

export default Feed