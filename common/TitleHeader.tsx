import React from 'react'

interface Props {
    reactWindow?: () => Window;
    children: React.ReactNode;
  }

export default function TitleHeader(props: Props) {
    const { children, reactWindow } = props;

  return (
    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero self-center">
        {children}
    </h1>
  )
}
