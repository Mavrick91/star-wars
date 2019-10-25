import { renderHook, act } from '@testing-library/react-hooks'

import faker from 'faker'
import useCookie from '../useCookie'

describe('useCookie.spec', () => {
  describe('passing boolean', () => {
    const defaultValue = faker.random.boolean()
    const defaultKey = faker.random.word()
    let result = null

    beforeEach(() => {
      result = renderHook(() => useCookie(defaultKey, defaultValue)).result
    })

    it('should have boolean as value', () => {
      expect(result.current.value).toBe(defaultValue)
    })

    it('Should have update the state and cleared cookie', () => {
      act(() => {
        result.current.setCookie(!defaultValue)
      })
      expect(document.cookie).toContain(`${defaultKey}=${result.current.value}`)

      act(() => {
        result.current.clearCookie()
      })

      expect(document.cookie).toContain('')
    })
  })

  describe('passing string', () => {
    const defaultValue = faker.random.words()
    const defaultKey = faker.random.word()
    let result = null

    beforeEach(() => {
      result = renderHook(() => useCookie(defaultKey, defaultValue)).result
    })

    it('should have string as value', () => {
      expect(result.current.value).toBe(defaultValue)
    })

    it('Should have update the state and cleared cookie', () => {
      act(() => {
        result.current.setCookie(!defaultValue)
      })
      expect(document.cookie).toContain(`${defaultKey}=${result.current.value}`)

      act(() => {
        result.current.clearCookie()
      })

      expect(document.cookie).toContain('')
    })
  })

  describe('passing object', () => {
    const defaultValue = {
      papa: 'pat',
      age: 20,
    }
    const defaultKey = faker.random.word()
    let result = null

    beforeEach(() => {
      result = renderHook(() => useCookie(defaultKey, defaultValue)).result
    })

    it('should have object as value', () => {
      expect(result.current.value).toBe(JSON.stringify(defaultValue))
    })

    it('Should have update the state and cleared cookie', () => {
      const newValue = { ...defaultValue, fils: 'mavrick' }
      act(() => {
        result.current.setCookie(newValue)
      })
      expect(document.cookie).toContain(
        `${defaultKey}=${JSON.stringify(newValue)}`,
      )

      act(() => {
        result.current.clearCookie()
      })

      expect(document.cookie).toContain('')
    })
  })

  describe('passing number', () => {
    const defaultValue = faker.random.number()
    const defaultKey = faker.random.word()
    let result = null

    beforeEach(() => {
      result = renderHook(() => useCookie(defaultKey, defaultValue)).result
    })

    it('should have number as value', () => {
      expect(result.current.value).toBe(defaultValue)
    })

    it('Should have update the state and cleared cookie', () => {
      const newValue = defaultValue + faker.random.number()
      act(() => {
        result.current.setCookie(newValue)
      })
      expect(document.cookie).toContain(`${defaultKey}=${newValue}`)

      act(() => {
        result.current.clearCookie()
      })

      expect(document.cookie).toContain('')
    })
  })
})
