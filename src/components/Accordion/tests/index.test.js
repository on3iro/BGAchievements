import React from 'react'
import { shallow } from 'enzyme'

import Accordion from '../index'
import Wrapper from '../Wrapper'
import Entry from '../Entry'

const entries = [
  {
    question: 'How are you?',
    answer: () => 'fine'
  }
]

const renderComponent = () => shallow(
  <Accordion
    entries={entries}
  />
)

describe('<Accordion />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = renderComponent()
    expect(wrapper.find(Wrapper).length).toBe(1)
  })

  it('should render <Entry />', () => {
    const wrapper = renderComponent()
    expect(wrapper.find(Entry).length).toBe(1)
  })

  it('should initiate entries in state', () => {
    const wrapper = renderComponent()
    const expectedEntries = [Object.assign(entries[0], {
      id: 0,
      active: false
    })]
    expect(wrapper.state('entries')).toEqual(expectedEntries)
  })

  it('should handle toggleEntry() and return active.true for right id', () => {
    const wrapper = renderComponent()

    // entry.active should be false:
    expect(wrapper.state('entries')[0].active).toBe(false)

    // toggleEntry
    wrapper.instance().toggleEntry(0)

    // entry.active should be true:
    expect(wrapper.state('entries')[0].active).toBe(true)
  })

  it('should handle toggleEntry() and return active.false for false id', () => {
    const wrapper = renderComponent()

    // entry.active should be false:
    expect(wrapper.state('entries')[0].active).toBe(false)

    // toggleEntry
    wrapper.instance().toggleEntry(1)

    // entry.active should be true:
    expect(wrapper.state('entries')[0].active).toBe(false)
  })
})
