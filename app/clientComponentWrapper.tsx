'use client'

import React from "react"

export default function ClientComponentWrapper ({children}:{children: React.ReactNode}) {
    return <>{children}</>
}