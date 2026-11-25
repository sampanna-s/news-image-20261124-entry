// news-image-20261124 entry (Node 22, standard library only): the image is
// the entry.png beside this file, and the program copies it to the output
// directory as entry.png. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, renameSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const tmp = join(outDir, '.entry.png.tmp');
copyFileSync(new URL('./entry.png', import.meta.url), tmp);
renameSync(tmp, join(outDir, 'entry.png'));
