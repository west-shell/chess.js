// PGN 头部操作测试
import { Chess, SEVEN_TAG_ROSTER } from '../src/chess'
import { expect, test } from 'vitest'

test('setHeader - 设置和获取头部', () => {
  const chess = new Chess()
  chess.setHeader('White', '胡荣华')
  chess.setHeader('Black', '许银川')
  expect(chess.getHeaders().White).toBe('胡荣华')
  expect(chess.getHeaders().Black).toBe('许银川')
})

test('removeHeader - 移除头部恢复默认值', () => {
  const chess = new Chess()
  chess.setHeader('White', '胡荣华')
  expect(chess.removeHeader('White')).toBe(true)
  expect(chess.getHeaders().White).toBe(SEVEN_TAG_ROSTER.White)
})

test('removeHeader - 移除不存在的头部返回 false', () => {
  const chess = new Chess()
  expect(chess.removeHeader('NonExistent')).toBe(false)
})

test('getHeaders - 不包含空值头部', () => {
  const chess = new Chess()
  const headers = chess.getHeaders()
  // SEVEN_TAG_ROSTER 的默认值不为空，所以应包含这些
  Object.values(headers).forEach((value) => {
    expect(value).toBeTruthy()
  })
})
