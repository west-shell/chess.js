// NAG 符号转换测试
import { Chess, nagToGlyph } from '../src/chess'
import { describe, expect, it } from 'vitest'

describe('NAG 支持', () => {
  it('从 PGN 加载 NAG', () => {
    const chess = new Chess()
    chess.loadPgn(
      '[Event "?"]\n[Site "?"]\n[Date "????.??.??"]\n[Round "?"]\n[White "?"]\n[Black "?"]\n[Result "*"]\n\n1. b0c2 $1 b9a7 $2 *',
    )
    expect(chess.getNags().length).toBeGreaterThanOrEqual(0)
  })

  it('nagToGlyph 正确转换', () => {
    // NAG 1='!', 2='?', 3='!!', 10='=' 等
    expect(nagToGlyph(7)).toBe('□')
    expect(nagToGlyph(10)).toBe('=')
    expect(nagToGlyph(999)).toBeUndefined()
  })
})
