import { useState } from 'react'
import type { NextPage } from 'next'

import Header from 'components/Header'
import ChooseRepository from 'components/ChooseRepository'
import { Repository } from 'utils/types'

interface Props {
  repositories: Repository[]
}

const Home: NextPage<Props> = ({ repositories }) => {
  const [repository, setRepository] = useState(repositories[0].name)

  return (
    <div>
      <Header />
      <main>
        <ChooseRepository
          repositories={repositories}
          value={repository}
          setValue={setRepository}
        />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_ENV_BACKEND_API
  const repositoriesFetched = await fetch(`${baseUrl}repositories`)
  const repositoriesData: Repository[] = await repositoriesFetched.json()

  if (!repositoriesData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { repositories: repositoriesData },
  }
}

export default Home
