# @weshell/chess.js

A fork of [chess.js](https://github.com/jhlywa/chess.js) (based on v1.4.0) with
**Chess960 / Fischer Random** support.

- Load and play Chess960 positions via X-FEN / Shredder-FEN castling rights,
  e.g. `bbqnnrkr/pppppppp/8/8/8/8/PPPPPPPP/BBQNNRKR w KQkq - 0 1`
- Chess960 castling with the standard fixed destinations (`g1`/`c1` for the
  king, `f1`/`d1` for the rook) from any starting array
- **King-takes-rook move input** — `chess.move({ from: 'g1', to: 'h1' })`
  castles (the lichess-style 960 drag encoding)
- **Stationary-king castling** — a king that already stands on its destination
  square can still castle, via SAN or by dragging onto the rook
- Everything else from chess.js v1.4.0: SAN, FEN, PGN load/save, verbose
  moves, perft, undo/redo history

## Install

```
npm install @weshell/chess.js
```

## Usage

```js
import { Chess } from '@weshell/chess.js'

// standard chess
const chess = new Chess()
chess.move('e4')
chess.pgn()

// Chess960 (Fischer Random)
const frc = new Chess('bbqnnrkr/pppppppp/8/8/8/8/PPPPPPPP/BBQNNRKR w KQkq - 0 1')
frc.move('f4')
frc.move('O-O') // 960 castling works from any starting array
```

## Chess960 notes

- **FEN castling field**: `K`/`Q` (and lowercase) refer to the outermost rook
  on each side of the king, matching X-FEN. Shredder-style file letters
  (`Hh`, `Fa`, …) are also accepted on input; output always uses the
  outermost-rook letters.
- **Castling move objects** carry `rookFrom` in addition to `from` / `to`,
  where `to` is the king's destination square. When the king already stands
  on its destination, `from === to`; the rook's destination is the standard
  `f1`/`d1`.
- **King-takes-rook**: passing the rook's square as `to` performs the castle.

## Differences from upstream chess.js

- `movegen.ts`: Chess960-aware castling generation (rook squares derived from
  the board, not hardcoded `a1`/`h1`)
- `fen.ts`: X-FEN / Shredder-FEN castling-rights parsing and serialization
- `move.ts`: `Move` exposes `rookFrom`
- `chess.ts`: `move()` accepts the king-takes-rook encoding as a fallback

The public API is otherwise unchanged; see the
[chess.js README](https://github.com/jhlywa/chess.js#api) for the full API.

## Development

```
npm run build   # tsc -> dist/
npm test        # node test/smoke.mjs (requires build first)
```

Module layout under `src/`:

| Module      | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| `types.ts`  | constants and type definitions (0x88 board, move flags) |
| `board.ts`  | 0x88 square helpers (rank/file/algebraic/swapColor)     |
| `hash.ts`   | zobrist hashing (xoroshiro128 key stream)               |
| `attack.ts` | attack detection (pure functions over the board)        |
| `movegen.ts`| pseudo-legal move generation incl. Chess960 castling    |
| `fen.ts`    | FEN validation/serialization + castling field parse/emit|
| `notation.ts`| SAN generation/parsing (pure helpers)                  |
| `move.ts`   | the public `Move` class                                 |
| `chess.ts`  | the stateful `Chess` class (public API)                 |
| `pgn.js`    | Peggy-generated PGN parser (from `pgn.peggy`)           |
| `node.ts`   | PGN variation-tree node type                            |

## License

BSD-2-Clause — see [LICENSE](LICENSE). Based on
[chess.js](https://github.com/jhlywa/chess.js) by Jeff Hlywa.
