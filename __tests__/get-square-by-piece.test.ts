// 按棋子类型获取位置测试
import { Chess, Piece, WHITE, BLACK, KING, HORSE, PAWN } from '../src/chess'
import { expect, test } from 'vitest'

test('findPiece - 查找唯一的将', () => {
  const chess = new Chess()
  expect(chess.findPiece({ type: KING, color: WHITE })).toEqual(['e0'])
  expect(chess.findPiece({ type: KING, color: BLACK })).toEqual(['e9'])
})

test('findPiece - 查找所有红方马', () => {
  const chess = new Chess()
  expect(chess.findPiece({ type: HORSE, color: WHITE })).toEqual(['b0', 'h0'])
})

test('findPiece - 查找所有黑方兵', () => {
  const chess = new Chess()
  expect(chess.findPiece({ type: PAWN, color: BLACK })).toEqual([
    'a6',
    'c6',
    'e6',
    'g6',
    'i6',
  ])
})
