// import { ImageViewer as _ImageViewer } from 'antd-mobile'
import React from 'react'
import { PhotoSlider } from 'react-image-previewer'
import { CloseButton, SlideToolbar } from 'react-image-previewer/ui'

import { useGlobalState } from '../store/global/hooks'
import { globalActions } from '../store/global/reducer'
import { useAppDispatch } from '../store/hooks'

export const ImageViewer = () => {
  const global = useGlobalState()
  const dispatch = useAppDispatch()

  return (
    <>
      {/* {global.images?.length > 0 && (
        <_ImageViewer.Multi
          images={global.images}
          visible={global.images?.length > 0}
          defaultIndex={global.imagesIndex}
          onClose={() => {
            dispatch(globalActions.setImages([]))
          }}
        />
      )} */}
      <PhotoSlider
        overlayRender={(props) => {
          return (
            <>
              <SlideToolbar {...props} items={['arrowLeft', 'countText', 'arrowRight', 'download']} />
              <CloseButton onClick={props.onClose} />
            </>
          )
        }}
        images={global.images.map((item) => ({ src: item, key: item }))}
        visible={global.images?.length > 0}
        onClose={() => dispatch(globalActions.setImages([]))}
        index={global.imagesIndex}
        onIndexChange={(idx) => dispatch(globalActions.setImagesIndex(idx))}
      />
    </>
  )
}
