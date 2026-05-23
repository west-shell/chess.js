// 清空棋盘测试
import { Chess, SEVEN_TAG_ROSTER } from '../src/chess'
import { expect, test } from 'vitest'

test('clear - 清空棋盘', () => {
  const chess = new Chess()
  chess.setHeader('White', '胡荣华')
  chess.setHeader('Black', '许银川')

  chess.clear()
  expect(chess.fen()).toEqual('9/9/9/9/9/9/9/9/9/9 w - - 0 1')
  expect(chess.getHeaders()).toEqual({ ...SEVEN_TAG_ROSTER })
})

test('clear - 保留头部信息', () => {
  const chess = new Chess()
  chess.setHeader('White', '胡荣华')
  chess.setHeader('Black', '许银川')

  chess.clear({ preserveHeaders: true })
  expect(chess.fen()).toEqual('9/9/9/9/9/9/9/9/9/9 w - - 0 1')
  expect(chess.getHeaders()).toEqual({
    ...SEVEN_TAG_ROSTER,
    White: '胡荣华',
    Black: '许银川',
  })
})
