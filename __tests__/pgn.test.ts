// PGN 导出测试（中国象棋）
import { BLACK, Chess, WHITE } from '../src/chess'
import { describe, expect, it, test } from 'vitest'

describe('PGN 导出', () => {
  test('pgn - 空着后轮到黑方', () => {
    const chess = new Chess()
    chess.loadPgn('1. b0c2')
    expect(chess.turn()).toBe(BLACK)
  })

  test('pgn - 两着后轮到红方', () => {
    const chess = new Chess()
    chess.loadPgn('1. b0c2 b9a7')
    expect(chess.turn()).toBe(WHITE)
  })

  test('pgn - 空对局轮到红方', () => {
    const chess = new Chess()
    const pgn = `[White "棋手A"]\n[Black "棋手B"]\n\n*`
    chess.loadPgn(pgn)
    expect(chess.turn()).toBe(WHITE)
  })

  test('pgn - 移除不存在的头部返回 false', () => {
    const chess = new Chess()
    expect(chess.removeHeader('NonExistent')).toBe(false)
  })

  test('pgn - 基本对局导出', () => {
    const chess = new Chess()
    chess.move('h0g2')
    chess.move('h9g7')
    chess.move('b2e2')
    const pgn = chess.pgn()
    expect(pgn).toContain('[Event "?"]')
    expect(pgn).toContain('1. h0g2 h9g7 2. b2e2')
    expect(pgn).toContain('*')
  })

  test('pgn - 导出后重新加载对等', () => {
    const chess = new Chess()
    chess.move('b0c2')
    chess.move('b9a7')
    chess.move('h0g2')
    const fen = chess.fen()
    const pgn = chess.pgn()

    const chess2 = new Chess()
    chess2.loadPgn(pgn)
    expect(chess2.fen()).toBe(fen)
  })
})
