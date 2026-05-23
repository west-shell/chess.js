// 攻击检测测试
import { Chess, WHITE, BLACK } from '../src/chess'
import { expect, test } from 'vitest'

test('isAttacked - 红兵向前攻击', () => {
  const chess = new Chess()
  // 红兵在 e3，可向前攻击 e4
  expect(chess.isAttacked('e4', WHITE)).toBe(true)
})

test('isAttacked - 黑兵向前攻击', () => {
  const chess = new Chess()
  // 黑兵在 e6，可向前攻击 e5
  expect(chess.isAttacked('e5', BLACK)).toBe(true)
})

test('isAttacked - 马攻击', () => {
  // 红马在 b0，可攻击 a2 和 c2
  const chess = new Chess()
  expect(chess.isAttacked('a2', WHITE)).toBe(true)
  expect(chess.isAttacked('c2', WHITE)).toBe(true)
})

test('isAttacked - 车攻击', () => {
  // 红车在 a0，可攻击 a1-a9 沿线
  const chess = new Chess()
  expect(chess.isAttacked('a1', WHITE)).toBe(true)
})

test('isAttacked - 炮不能直接攻击（需炮架）', () => {
  // 红炮在 b2，b4是空的，炮不能直接攻击（没有炮架）
  const chess = new Chess()
  expect(chess.isAttacked('b4', WHITE)).toBe(false)
})

test('isAttacked - 将攻击', () => {
  const chess = new Chess()
  expect(chess.isAttacked('e1', WHITE)).toBe(true)
  expect(chess.isAttacked('d0', WHITE)).toBe(true)
})

test('isAttacked - 牵制棋子仍可攻击', () => {
  const chess = new Chess()
  expect(chess.isAttacked('c2', WHITE)).toBe(true)
})
