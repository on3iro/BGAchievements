// @flow

import type { State } from 'globalTypes'

import type { User } from './types'

export const getFakeUser = (state: State): ?User => state.fakeUser.user
export const getUserLoading = (state: State): boolean => state.fakeUser.loading
