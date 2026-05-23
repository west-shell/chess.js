// PGN 注释和 NAG 注解测试
import { Chess } from '../src/chess'
import { describe, expect, it } from 'vitest'

describe('注释支持', () => {
  it('设置和获取注释', () => {
    const chess = new Chess()
    chess.setComment('这是一步好棋')
    expect(chess.getComment()).toBe('这是一步好棋')
  })

  it('移除注释', () => {
    const chess = new Chess()
    chess.setComment('测试注释')
    chess.removeComment()
    expect(chess.getComment()).toBeUndefined()
  })

  it('NAG 注解', () => {
    const chess = new Chess()
    chess.addNag(1)
    expect(chess.getNags()).toContain(1)
  })

  it('后缀注解', () => {
    const chess = new Chess()
    chess.setSuffixAnnotation('!')
    expect(chess.getSuffixAnnotation()).toBe('!')
  })
})
