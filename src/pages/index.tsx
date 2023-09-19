import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/component/pages/homepage'
import { Box } from '@mui/material'
// import DrawerAppBar from '@/component/layout/appbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     
      <Box>
        <HomePage />
      </Box>
    </main>
  )
}
