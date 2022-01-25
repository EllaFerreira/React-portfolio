import React from 'react';

type ButtonProps = {
    title: string;
    event?: any;
}

function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const button = e.currentTarget
    
}