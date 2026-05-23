// 获取棋子测试
import { Chess, Square, PAWN, WHITE, BLACK } from '../src/chess'
import { expect, test } from 'vitest'

test('get - 获取指定位置的棋子', () => {
  const chess = new Chess()
  expect(chess.get('a3' as Square)).toEqual({ type: PAWN, color: WHITE })
  expect(chess.get('a6' as Square)).toEqual({ type: PAWN, color: BLACK })
})

test('get - 空格返回 undefined', () => {
  const chess = new Chess()
  expect(chess.get('a4' as Square)).toEqual(undefined)
})

test('get - 无效位置返回 undefined', () => {
  const chess = new Chess()
  expect(chess.get('bad-square' as Square)).toEqual(undefined)
})
