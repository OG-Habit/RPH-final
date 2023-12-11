"use client";
import React, { CSSProperties, useState } from 'react'
import FlipCard from './FlipCard'
import ReactCardFlip from 'react-card-flip'

interface Props {
    details: {
        title: string
        description: any
        src?: string
    }
}

export default function CommonFlipCard({details}: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const style: CSSProperties = {
        position: 'relative',
        display: 'flex',
        
        justifyContent: 'center',
        height: '400px',
        width: '340px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        padding: '16px',
        overflow: 'hidden',
        borderRadius: '10px',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.320, 1)'
    }

    const styleBack: CSSProperties= {
        ...style,
        alignSelf: 'center',
        backgroundColor: 'rgb(33,33,33)',
        padding: '32px',
        color: '#e8e8e8',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }

    const handleFlip = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setIsFlipped(!isFlipped)
    }

  return (
    <ReactCardFlip isFlipped={isFlipped}
        flipDirection="horizontal">
        <FlipCard style={style} action={handleFlip}
            content={(
                <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h1 style={{
                        fontWeight: 700,
                        fontSize: "22px"
                    }}>
                        {details.title}
                    </h1>
                    {/* <img
                        src="/img/kalayaan.png"
                        height={200}
                        width={225}
                        alt="Kalayaan newspaper"
                    />   */}
                </div>
            )}>
        </FlipCard>

        <FlipCard style={styleBack} action={handleFlip}
            content={(
                <div>
                    <p style={{
                        textAlign: 'left'
                    }}>
                        {details.description}
                    </p>
                </div>
            )}>
        </FlipCard>
    </ReactCardFlip>
  )
}
