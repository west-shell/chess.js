// 位置颜色测试
import { Chess, type Square } from '../src/chess'
import { expect, test } from 'vitest'

test('squareColor - 返回亮色或暗色', () => {
  const chess = new Chess()
  // a9: rank 9 + file 0 = 9, odd → dark
  expect(chess.squareColor('a9')).toBe('dark')
  // a8: rank 8 + file 0 = 8, even → light
  expect(chess.squareColor('a8')).toBe('light')
})

test('squareColor - 返回非空值', () => {
  const chess = new Chess()
  expect(chess.squareColor('e0')).toBeTruthy()
  expect(chess.squareColor('e9')).toBeTruthy()
})

test('squareColor - 超出范围返回 null', () => {
  const chess = new Chess()
  expect(chess.squareColor('j9' as Square)).toBeNull()
})
