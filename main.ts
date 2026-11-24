import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line's angle: a small everyday kindness (a free boiled egg, "for
// luck") with one concrete detail, then a surprise twist at the end —
// the owner charges LESS, because "luck should be cheap." Warmth first,
// surprise last, fresh wording throughout; no greeting-card phrasing.
const line =
  "This morning the warung owner slipped a free boiled egg into my rice and whispered, 'for luck' — then charged me less, because, he said, 'luck should be cheap.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
