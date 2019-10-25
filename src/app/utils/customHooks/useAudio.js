// @flow

import React from 'react'

type OptionsAudioType = $Shape<{
  +delay?: number,
  +isMuted: boolean,
}>

function useAudio(url: string, optionsAudio: OptionsAudioType = {}) {
  const { delay = 0, isMuted = false } = optionsAudio
  const [audio] = React.useState(new Audio(url))

  React.useEffect(() => {
    audio.muted = isMuted
  }, [audio.muted, isMuted])

  React.useEffect(() => {
    setTimeout(() => {
      if (audio.canPlayType('audio/mp3') !== '') audio.play().then()
    }, delay)
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [audio, delay])
}

export default useAudio
