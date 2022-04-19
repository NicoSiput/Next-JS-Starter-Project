import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <div
        className="pt-16 pb-8 text-white"
        style={{ backgroundColor: '#000' }}
      >
        <div className="container px-5 block md:flex items-center">
          <Link href={'https://www.popbox.asia'}>
            <a className="text-2xl font-['Impact']">PopBox</a>
          </Link>
          <div className="flex justify-between md:ml-5 w-full">
            <p className="font-normal text-xs">
              © {new Date().getFullYear()} PopBox | All Rights Reserved
            </p>

            <Link href={'https://www.popbox.asia'}>
              <a className="font-normal text-xs">PopBox Website</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
