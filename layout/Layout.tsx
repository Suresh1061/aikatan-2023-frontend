import NextProgress from 'nextjs-progressbar'
import React from 'react'

import { useVH } from '@/hooks'
import { HTMLDivProps } from '@/types/html'
import { tx } from '@twind/core'

import Footer from './Footer'
import Navbar from './Navbar'

export type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
  hideFooter?: boolean
  hideNavbar?: boolean
  pageClassName?: string
  /**
   * If height of this page should be equal to screen height
   */
  screenHeight?: boolean
} & HTMLDivProps

const Layout = ({
  children,
  hideFooter,
  hideNavbar,
  className,
  pageClassName,
  screenHeight,
  ...props
}: LayoutProps) => {
  const vh = useVH()
  return (
    <div
      className={tx('font-roboto bg-gray-900 text-white', className)}
      {...props}>
      <div
        className={tx(
          `flex flex-col min-h-[${100 * vh}px]`,
          screenHeight && `h-[${100 * vh}px]`
        )}>
        {!hideNavbar && <Navbar />}

        <NextProgress
          color="#8080FF"
          startPosition={0.3}
          stopDelayMs={0}
          height={3}
          showOnShallow={true}
        />

        <div
          className={tx(
            'flex-1 flex flex-col max-w-7xl w-full mx-auto overflow-hidden',
            pageClassName
          )}>
          {children}
        </div>
      </div>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default Layout
