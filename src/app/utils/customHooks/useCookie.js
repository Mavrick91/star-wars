// @flow

import { useState } from 'react'
import { isJson } from '../index'

type ValueType = boolean | string | number | {}
type SetValueType = (value: ValueType, options?: {}) => void
type ClearCookieType = () => void

type UseCookieReturnType = {
  value: ValueType,
  setCookie: SetValueType,
  clearCookie: ClearCookieType,
}

export default function useCookie(
  key: string,
  defaultValue: ValueType,
): UseCookieReturnType {
  const [value, setValue] = useState((): ValueType => {
    const match = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`)
    const tmpValue = match ? match[2] : defaultValue

    if (tmpValue === 'false') return false
    if (tmpValue === 'true') return true
    if (isJson(tmpValue)) return JSON.stringify(tmpValue)

    return tmpValue
  })

  const setCookie = (newValue: any, options?: {}) => {
    let tmpValue = newValue
    const cookieOptions = {
      expires: 0,
      domain: '',
      path: '',
      secure: false,
      httpOnly: false,
      maxAge: 0,
      sameSite: '',
      ...options,
    }

    if (
      Array.isArray(newValue) ||
      Object.prototype.toString.call(newValue) === '[object Object]'
    ) {
      tmpValue = JSON.stringify(newValue)
    }
    let cookie = `${key}=${tmpValue}`
    if (cookieOptions.expires) {
      const date = new Date()
      date.setTime(date.getTime() + 1000 * cookieOptions.expires)
      cookie += `; Expires=${date.toUTCString()}`
    }
    if (cookieOptions.path) {
      cookie += `; Path=${cookieOptions.path}`
    }
    if (cookieOptions.domain) {
      cookie += `; Domain=${cookieOptions.domain}`
    }
    if (cookieOptions.maxAge) {
      cookie += `; Max-Age=${cookieOptions.maxAge}`
    }
    if (cookieOptions.sameSite) {
      cookie += `; SameSite=${cookieOptions.sameSite}`
    }
    if (cookieOptions.secure) {
      cookie += '; Secure'
    }
    if (cookieOptions.httpOnly) {
      cookie += '; HttpOnly'
    }
    document.cookie = cookie
    setValue(newValue)
  }

  const clearCookie = () => {
    setCookie('', { expires: -3600 })
    setValue(defaultValue)
  }

  return { value, setCookie, clearCookie }
}
