// 中国象棋无逼和——无子可走即输，isStalemate() 始终返回 false
import { Chess } from '../src/chess'
import { expect, test } from 'vitest'

test('isStalemate - 初始局面返回 false', () => {
  const chess = new Chess()
  expect(chess.isStalemate()).toBe(false)
})

test('isStalemate - 始终返回 false（中国象棋无逼和规则）', () => {
  const chess = new Chess()
  expect(chess.isStalemate()).toBe(false)
})
