// Star Catcher entry for make.fun's "The agent builds a game from one prompt" bounty.
// Node 22, standard library only. The entry itself is the X post named in POST.json:
// the program just hands POST.json to the grader by copying it into the output
// directory. It takes no input, reads nothing outside its own directory, uses no
// network and no clock, so two runs always write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, 'POST.json'), join(outDir, 'POST.json'));
