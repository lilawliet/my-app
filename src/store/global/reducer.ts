import { createSlice } from '@reduxjs/toolkit'

// import { ChatCompletionResponseMessage } from 'openai'
import { LOCALE } from '@/src/i18n'

import { updateVersion } from './actions'

export type GlobalState = {
  version: string
  locale: LOCALE
  // messages: ChatCompletionResponseMessage[] // chatGPT 上下文
}

const initialState: GlobalState = {
  version: process.env.NEXT_PUBLIC_VERSION,
  locale: process.env.NEXT_PUBLIC_LOCALE as LOCALE,
  // messages: [],
}
const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeLocale(
      state,
      action: {
        payload: {
          locale: LOCALE
        }
      }
    ) {
      const {
        payload: { locale },
      } = action
      state.locale = locale
    },
    clean(state) {
      state = initialState
      return state
    },
    // pushMessages(state, action: { payload: ChatCompletionResponseMessage }) {
    //   const { payload } = action
    //   state.messages.push(payload)
    //   return state
    // },
    // cleanMessages(state) {
    //   state.messages = []
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(updateVersion, () => {
      // 版本更新的时候重新初始化 state
    })
  },
})

export const globalActions = slice.actions
export default slice.reducer
