
'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import {Toaster} from "react-hot-toast";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
            <Toaster
                position="bottom-center"
            ></Toaster>
        </NextUIProvider>
    )
}