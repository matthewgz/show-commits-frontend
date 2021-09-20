import { shallow, ShallowWrapper } from 'enzyme'

import { Typography } from '@mui/material'

import Header from '../index'

describe('Header', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<Header />)
  })

  it('should render', () => {
    const text = wrapper.find(Typography)
    expect(text.length).toBe(1)
  })

  it('should show the title', () => {
    const wrapper = shallow(<Header />)
    const text = wrapper.find(Typography)
    expect(text.text()).toBe('Show Commits')
  })
})
