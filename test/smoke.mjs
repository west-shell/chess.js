import assert from 'node:assert/strict'
import { Chess, validateFen } from '../dist/index.js'

// 1. Standard chess still works
const chess = new Chess()
chess.move('e4')
chess.move('e5')
chess.move('Nf3')
assert.equal(
  chess.fen(),
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2'
)
assert.match(chess.pgn(), /1\. e4 e5 2\. Nf3/)

// 2. Chess960 (SP bbqnnrkr): load, castling rights, stationary-king O-O
const fen960 = 'bbqnnrkr/pppppppp/8/8/8/8/PPPPPPPP/BBQNNRKR w KQkq - 0 1'
assert.equal(validateFen(fen960).ok, true)
const c960 = new Chess(fen960)
for (const san of ['f4', 'd6', 'Rf3', 'e6']) c960.move(san)

const castle = c960.moves({ verbose: true }).find((m) => m.san === 'O-O')
assert.ok(castle, 'O-O must be available')
assert.equal(castle.from, 'g1')
assert.equal(castle.to, 'g1') // king already on its destination square
assert.equal(castle.rookFrom, 'h1')
assert.ok(castle.flags.includes('k'))

c960.move('O-O')
assert.equal(c960.get('f1')?.type, 'r')
assert.equal(c960.get('g1')?.type, 'k')
assert.equal(c960.get('h1'), undefined)
assert.match(c960.pgn(), /3\. O-O/)

// 3. King-takes-rook encoding: move({ from: kingSq, to: rookFrom })
const c2 = new Chess(fen960)
for (const san of ['f4', 'd6', 'Rf3', 'e6']) c2.move(san)
const mv = c2.move({ from: 'g1', to: 'h1' })
assert.equal(mv.san, 'O-O')
assert.equal(mv.rookFrom, 'h1')
assert.equal(c2.get('f1')?.type, 'r')
assert.equal(c2.get('g1')?.type, 'k')

// 4. FEN serialization: outermost-rook castling letters
assert.equal(c2.fen().split(' ')[2], 'kq')

console.log('smoke: all assertions passed')
