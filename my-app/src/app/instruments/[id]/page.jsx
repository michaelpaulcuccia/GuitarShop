'use client';
import React from 'react';
import { usePathname } from 'next/navigation'

export default function page() {

  const pathname = usePathname();
  let trimmedPathname;

  if (pathname) {
    trimmedPathname = pathname.replace(/^\/instruments\//, '');
  }
  
  return (
    <div>welcome to instruments {trimmedPathname}</div>
  )
}
