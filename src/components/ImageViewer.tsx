import { ImageViewer as _ImageViewer } from 'antd-mobile'
import React from 'react'

import { useGlobalState } from '../store/global/hooks'
import { globalActions } from '../store/global/reducer'
import { useAppDispatch } from '../store/hooks'

export const ImageViewer = () => {
  const global = useGlobalState()
  const dispatch = useAppDispatch()

  return (
    <>
      {global.images?.length > 0 && (
        <_ImageViewer.Multi
          images={global.images}
          visible={global.images?.length > 0}
          defaultIndex={global.imageIndex}
          onClose={() => {
            dispatch(globalActions.setImages([]))
          }}
        />
      )}
    </>
  )
}
