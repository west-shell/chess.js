// Zobrist 哈希测试
import { Chess, xoroshiro128 } from '../src/chess'
import { expect, test } from 'vitest'

test('rand - 随机数生成器验证', () => {
  const rand = xoroshiro128(0xa187eb39cdcaed8f31c4b365b102e01en)
  const results = Array.from({ length: 5 }, () => rand().toString(16))
  expect(results).toEqual([
    'c9c4700ec0b2a75c',
    'ce613bcab5ad7ec2',
    'd4abd9ddcd0a382b',
    '5f29a08525b0575f',
    'f6718179e0f7ba94',
  ])
})

test('hash - 相同局面产生相同哈希值', () => {
  const a = new Chess()
  const b = new Chess()
  expect(a.hash()).toEqual(b.hash())
})

test('hash - 不同局面产生不同哈希值', () => {
  const a = new Chess()
  a.move('b0c2')
  const b = new Chess()
  b.move('h0g2')
  expect(a.hash()).not.toEqual(b.hash())
})
