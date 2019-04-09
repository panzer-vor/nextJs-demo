import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { lang } from '@config/common'
import { useCtx } from '@lib/context-hook'
import Link from 'next/link'

interface IButtonProps {
  count: number
  color: string
}

const Button = styled.button`
  animation: ${(props: IButtonProps): number => props.count}s ${keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `} ease-out;
  width: 1000px;
  height: 200px;
  animation-iteration-count: infinite;
  background-color: ${(props: IButtonProps): string => props.color};
`

export default () => {
  const { state, dispatch } = useCtx()

  const [count, setCount] = useState(1)
  const color = 'blue'
  return (
    <>
      <p>
        {lang.header}
      </p>
      <Link href="list"><a>{state.count}</a></Link>
      <Button {...{
        count,
        color,
      }} onClick={() => setCount(count + 1)}>{count}</Button>
    </>
  )
}