import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'

import Header from 'components/Header'
import ChooseRepository from 'components/ChooseRepository'
import Table from 'components/Table'
import { Commit, Repository } from 'utils/types'

interface Props {
  repositories: Repository[]
  commits: Commit[]
}

const Home: NextPage<Props> = ({ repositories, commits: commitsProps }) => {
  const firstRender = useRef(true)
  const [commits, setCommits] = useState<Commit[]>(commitsProps)
  const [repository, setRepository] = useState<string>(
    repositories?.[0]?.name || '',
  )

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const getCommits = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_ENV_BACKEND_API
        const commitsFetched = await fetch(
          `${baseUrl}repositories/${repository}/commits`,
        )
        const commitsData: Commit[] = await commitsFetched.json()
        setCommits(commitsData)
      } catch (error) {
        console.error(error)
      }
    }

    if (repository) {
      getCommits()
    }
  }, [repository])

  return (
    <div>
      <Header />
      <main>
        <ChooseRepository
          repositories={repositories}
          value={repository}
          setValue={setRepository}
        />
        <Table commits={commits} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    let commitsFetched
    let commitsData: Commit[] = []
    const baseUrl = process.env.NEXT_PUBLIC_ENV_BACKEND_API
    const repositoriesFetched = await fetch(`${baseUrl}repositories`)
    const repositoriesData: Repository[] = await repositoriesFetched.json()

    if (repositoriesData?.[0]?.name) {
      commitsFetched = await fetch(
        `${baseUrl}repositories/${repositoriesData[0].name}/commits`,
      )
      commitsData = await commitsFetched.json()
    }

    if (!repositoriesData) {
      return {
        repositories: [],
        commits: [],
      }
    }

    return {
      props: { repositories: repositoriesData, commits: commitsData },
    }
  } catch (error) {
    console.error(error)
  }
}

export default Home
