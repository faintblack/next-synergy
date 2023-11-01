import Image from 'next/image'
import styles from './page.module.css'

import { Box, Container, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import MainPages from './components/MainPages'

export default function Home() {
  return (
    <MainPages>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
    </MainPages>
  )
}
