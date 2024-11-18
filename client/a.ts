function getDistance(word: string) {
  const inf = 1e7;

  const dirs = [-1, 0, 1, 0, -1];

  let cost = Array.from({ length: 26 }, () => Array(26).fill(inf));

  const mat = ["QWERTYUIOP", "ASDFGHJKL#", "#ZXCVBNM##"];

  const bfs = (i: number, j: number) => {
    let queue: number[][] = [[i, j]];

    let ch = mat[i][j];
    cost[ch.charCodeAt(0) - "A".charCodeAt(0)][
      ch.charCodeAt(0) - "A".charCodeAt(0)
    ] = 0;

    while (queue.length > 0) {
      let [cx, cy] = queue.shift() as number[];
      let curr = mat[cx][cy];

      if (curr === "#") continue;

      for (let dt = 0; dt < 4; dt++) {
        let nx = cx + dirs[dt],
          ny = cy + dirs[dt + 1];
        if (nx < 0 || ny < 0 || nx >= 3 || ny >= 10) continue;
        let nxt = mat[nx][ny];
        if (
          nxt === "#" ||
          cost[ch.charCodeAt(0) - "A".charCodeAt(0)][
            nxt.charCodeAt(0) - "A".charCodeAt(0)
          ] !== inf
        )
          continue;
        cost[ch.charCodeAt(0) - "A".charCodeAt(0)][
          nxt.charCodeAt(0) - "A".charCodeAt(0)
        ] =
          1 +
          cost[ch.charCodeAt(0) - "A".charCodeAt(0)][
            curr.charCodeAt(0) - "A".charCodeAt(0)
          ];
        queue.push([nx, ny]);
      }
    }
  };

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10; j++) {
      if (mat[i][j] !== "#") {
        bfs(i, j);
      }
    }
  }

  let ans = 0;
  let piche = "Q";

  for (let c of word) {
    let st = c.charCodeAt(0) - "A".charCodeAt(0);
    let dest = piche.charCodeAt(0) - "A".charCodeAt(0);
    let cur = cost[dest][st];
    ans += cur;
    piche = c;
  }

  return ans;
}
