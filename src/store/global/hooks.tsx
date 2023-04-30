// import { ChatCompletionResponseMessageRoleEnum } from 'openai'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { LANGUAGE } from '@/src/i18n'

// import OPEN_AI from '@/src/utils/openai'
import { useAppSelector } from '../hooks'
import { globalActions, GlobalState } from './reducer'

export function useGlobalState(): GlobalState {
  return useAppSelector((state) => state.persistedReducer.global)
}

export function useUpdateLocaleCallback() {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  return useCallback(
    (language: LANGUAGE) => {
      i18n.changeLanguage(language)
      dispatch && dispatch(globalActions.changeLanguage({ language }))
    },
    [dispatch, i18n]
  )
}

// export function useSendMessageCallback() {
//   const dispatch = useDispatch()
//   const { t } = useTranslation()
//   return useCallback(
//     async (role: ChatCompletionResponseMessageRoleEnum, prompt: string): Promise<boolean> => {
//       // 检查 问题内容，不能为空
//       if (!prompt) {
//         Toast.show({
//           content: t('Can not be empty'),
//         })

//         return false
//       }

//       // 检查 问题内容，如果违规不回答
//       const moderation = await OPEN_AI.createModeration({
//         input: prompt,
//       })

//       if (moderation.data.results[0].flagged) {
//         Toast.show({
//           content: t('Your question does not comply with the policy, please click the link at the bottom to read the usage policy carefully.'),
//         })

//         return false
//       }
//       dispatch(globalActions.pushMessages({ role, content: prompt }))

//       return true
//     },
//     [dispatch]
//   )
// }
