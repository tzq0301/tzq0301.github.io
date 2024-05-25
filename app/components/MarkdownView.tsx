'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownView({path}: {path: string}) {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(path)
            .then(response => response.text())
            .then(text => {
                setMarkdownContent(text);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="prose">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    )
}