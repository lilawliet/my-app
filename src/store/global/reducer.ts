import { createSlice } from '@reduxjs/toolkit'

// import { ChatCompletionResponseMessage } from 'openai'
import { LANGUAGE } from '@/src/i18n'

import { updateVersion } from './actions'

export type GlobalState = {
  version: string
  language: LANGUAGE
  // messages: ChatCompletionResponseMessage[] // chatGPT 上下文
}

const initialState: GlobalState = {
  version: process.env.NEXT_PUBLIC_VERSION,
  language: process.env.NEXT_PUBLIC_LOCALE as LANGUAGE,
  // messages: [],
}
const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeLanguage(
      state,
      action: {
        payload: {
          language: LANGUAGE
        }
      }
    ) {
      const {
        payload: { language },
      } = action
      state.language = language
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
