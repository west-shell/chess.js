// 性能测试（节点计数）
import { Chess } from '../src/chess'
import { expect, test } from 'vitest'

test('perft - 初始局面 depth 1', () => {
  const chess = new Chess()
  expect(chess.perft(1)).toBe(44)
})

test('perft - 只有双将 depth 1', () => {
  // 红将在 e0，可走到 e1, d0, f0（3 步）；黑将在 e9，同上
  const chess = new Chess('4k4/9/9/9/9/9/9/9/9/4K4 w - - 0 1')
  const moves = chess.moves()
  // 红将在 e0，正交走法：e1, d0, f0（3 步，只要都在九宫内）
  expect(chess.perft(1)).toBe(moves.length)
})
