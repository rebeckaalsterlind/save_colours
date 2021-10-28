import React, { useState } from 'react';

interface Props  {
    innerText: string,
}

export default function SecondaryBtn ({innerText}: Props) {

    return (
        <button>{innerText}</button>
    )
}