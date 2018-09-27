import React from 'react'
import AllWordsReducer from './allWordsReducer'
import MyWordsReducer from './myWordsReducer'

it("Adds 2 and 2 together and equals 4", () => {
  expect(2 + 2).toEqual(4)
})

describe("AllWordsReducer", () => {
  it('Fetches all the words', () => {
    let action = {type: "FETCH_WORDS", payload: ['hi', 'there']}
    expect(AllWordsReducer(undefined, action)).toEqual(['hi', 'there'])
  })
})

describe("MyWordsReducer", () => {
  it('Adds a word to mywords', () => {
    let action = {type: "ADD_WORD", payload: 'with'}
    expect(MyWordsReducer(undefined, action)).toEqual(['with'])
  })

  it('Removes a word from mywords', () => {
    let action = {type: "REMOVE_WORD", word: 'with'}
    expect(MyWordsReducer(['with', 'and'], action)).toEqual(['and'])
  })
})
