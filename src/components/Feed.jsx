import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import PostHead from './PostHead'

const Feed = ({setMode, mode}) => {
  return (
    <Box flex={4} p={2}>
      <PostHead setMode={setMode} mode={mode}/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed