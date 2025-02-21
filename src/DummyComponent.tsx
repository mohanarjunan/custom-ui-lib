import React from 'react'

interface DummyComponentProps {
  children: React.ReactNode;
}




export default function DummyComponent({children}: DummyComponentProps) {
  return (
    <>
      {children}
    </>
  )
}
