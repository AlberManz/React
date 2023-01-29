import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {


  const format = (userName) => `@${userName}`

  return (

    <section className='App'>

      <TwitterFollowCard formatUserName={(format)} isFollowing userName="carlosazaustre">
        Carlos Azaustre
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={(format)} isFollowing={false} userName="alberManz">
        AMR
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={(format)} isFollowing userName="RoNConde">
        Dukur
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={(format)} isFollowing userName="astro">
        AstroBoy
      </TwitterFollowCard>
    </section>
  )
}