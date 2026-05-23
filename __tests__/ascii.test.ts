// ASCII 棋盘渲染测试
import { Chess } from '../src/chess'
import { describe, expect, it } from 'vitest'

describe('ASCII 棋盘', () => {
  it('渲染初始局面', () => {
    const chess = new Chess()
    const output = chess.ascii()

    // 验证包含关键元素
    expect(output).toContain('a   b   c   d   e   f   g   h   i')
    expect(output).toContain('r') // 黑车
    expect(output).toContain('R') // 红车
    expect(output).toContain('k') // 黑将
    expect(output).toContain('K') // 红将
    expect(output).toContain('c') // 黑炮
    expect(output).toContain('C') // 红炮
    // 河界
    expect(output).toContain('~~~')
  })
})
