/* eslint-disable @typescript-eslint/no-var-requires */
import { Image as NativeImage, IImageProps } from 'native-base'
import React, { useState } from 'react'

const defaultImage = require('../../../../assets/images/no-image.png')

interface ImageProps extends Omit<IImageProps, 'source'> {
  source?: string
}

export const Image = ({ source, ...props }: ImageProps) => {
  const [isLoadError, setIsLoadError] = useState<boolean>(false)

  return (
    <NativeImage
      {...props}
      source={isLoadError || !source ? defaultImage : { uri: source }}
      onError={() => setIsLoadError(true)}
    />
  )
}
