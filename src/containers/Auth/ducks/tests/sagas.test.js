import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as sagas from '../sagas'
import * as types from '../actionTypes'

describe('handleAuthSaga', () => {
  const handleAuthSaga = sagas.handleAuth()

  it('should start task to watch LOGIN_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value
    const expectedYield = takeLatest(types.LOGIN_SUBMIT, sagas.requestLogin)
    expect(takeLatestDescriptor).toMatchSnapshot()
  })

  it('should start taks to watch REGISTER_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value
    const expectedYield = takeLatest(types.REGISTER_SUBMIT, sagas.requestRegister)
    expect(takeLatestDescriptor).toMatchSnapshot()
  })
})

describe('login', () => {
  describe('requestLogin generator', () => {
    const action = {
      payload: {
        test: 'test'
      }
    }
    let requestLoginGenerator

    beforeEach(() => {
      requestLoginGenerator = sagas.requestLogin(action)
    })

    it('should call axios.post', () => {
      const callDescriptor = requestLoginGenerator.next().value
      const expectedYield = call(axios.post, 'http://localhost:3030/api/auth/login', action.payload, { headers: {'Content-Type': 'application/json'}})
      expect(callDescriptor).toMatchSnapshot()
    })

    it('should put LOGIN_SUCCESS action with payload', () => {
      const response = {
        data: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123'
        }
      }
      requestLoginGenerator.next().value
      const putDescriptor = requestLoginGenerator.next(response).value
      const expectedYield = put({ type: types.LOGIN_SUCCESS,
        payload: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123'
        }})
      expect(putDescriptor).toMatchSnapshot()
    })

    it('should put LOGIN_ERROR action', () => {
      const response = new Error('Some error')
      requestLoginGenerator.next().value
      const putDescriptor = requestLoginGenerator.throw(response).value
      const expectedYield = put({ type: types.LOGIN_ERROR, payload: 'Some error' })
      expect(putDescriptor).toMatchSnapshot()
    })
  })
})

describe('register', () => {
  describe('requestRegister generator', () => {
    const action = {
      payload: {
        test: 'test'
      }
    }
    let requestRegisterGenerator

    beforeEach(() => {
      requestRegisterGenerator = sagas.requestRegister(action)
    })

    it('should call axios.post', () => {
      const callDescriptor = requestRegisterGenerator.next().value
      const expectedYield = call(axios.post, 'http://localhost:3030/api/auth/register', action.payload, { headers: {'Content-Type': 'application/json'}})
      expect(callDescriptor).toMatchSnapshot()
    })

    it('should put REGISTER_SUCCESS action with payload', () => {
      const response = {
        data: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123'
        }
      }
      requestRegisterGenerator.next().value
      const putDescriptor = requestRegisterGenerator.next(response).value
      const expectedYield = put({ type: types.REGISTER_SUCCESS,
        payload: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123'
        }})
      expect(putDescriptor).toMatchSnapshot()
    })

    it('should put REGISTER_ERROR action', () => {
      const response = new Error('Some error')
      requestRegisterGenerator.next().value
      const putDescriptor = requestRegisterGenerator.throw(response).value
      const expectedYield = put({ type: types.REGISTER_ERROR, payload: 'Some error' })
      expect(putDescriptor).toMatchSnapshot()
    })
  })
})
