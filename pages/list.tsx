import React from 'react';
import { useCtx } from '../lib/context-hook'
import Link from 'next/link'


export default function List () {
  const { state, dispatch } = useCtx()
  return (
    <div>
      <br/>
      Counter Count: {state.count}
      <br/>
      <Link href="/"><a>{state.count}</a></Link>
      <button onClick={() => dispatch({ type: 'count/ADD', id: 1})}>+++</button>
      <button onClick={() => dispatch({ type: 'count/MINUS'})}>---</button>
    </div>
  )
}