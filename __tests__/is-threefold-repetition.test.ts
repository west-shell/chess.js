// 三次重复局面测试
import { Chess } from '../src/chess'
import { expect, test } from 'vitest'

test('isThreefoldRepetition - 初始局面不是三次重复', () => {
  const chess = new Chess()
  expect(chess.isThreefoldRepetition()).toBe(false)
})

test('isThreefoldRepetition - 重复三次后检测为真', () => {
  const chess = new Chess()
  // 来回走四次 = 回到初始 3 次（含初始）
  for (let i = 0; i < 4; i++) {
    chess.move('b0c2')
    chess.move('b9a7')
    chess.move('c2b0')
    chess.move('a7b9')
  }
  // 经过多次来回，初始局面至少出现 3 次
  expect(chess.isThreefoldRepetition()).toBe(true)
})
