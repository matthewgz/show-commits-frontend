import { shallow, ShallowWrapper } from 'enzyme'

import { Chip, Avatar as MuiAvatar, Link } from '@mui/material'

import { Author } from 'utils/types'
import Avatar from '../index'

const author: Author = {
  name: 'matthewgz',
  email: 'matthewgz241@gmail.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/21980013?v=4',
  htmlUrl: 'https://github.com/matthewgz',
}

describe('Header', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<Avatar author={author} />)
  })

  it('should render', () => {
    const element = wrapper.find(Chip)
    expect(element.length).toBe(1)
  })

  it('should show the name of the author', () => {
    const element = wrapper.find(Chip)
    expect(element.props().label).toBe(author.name)
  })

  it('should render the avatar', () => {
    const element = wrapper.find(Chip)
    expect(element.props().avatar).toStrictEqual(
      <MuiAvatar alt={author.name} src={author.avatarUrl} />,
    )
  })

  it('should render the link', () => {
    const element = wrapper.find(Link)
    expect(element.props().href).toBe(author.htmlUrl)
  })
})
