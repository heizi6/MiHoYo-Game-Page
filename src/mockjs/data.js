const Mock = require("mockjs");
const Random = Mock.Random;
export const userData = Mock.mock("/data/list", "get", {
  "list|5-10": [
    {
      name: () => Random.csentence(2.4).replace("。", ""),
      msg: () => Random.cparagraph(3.5),
      data: () => Random.datetime("yyyy-MM-dd"),
      time: () => Random.time(),
    },
  ],
  code: 200,
  message: "ok",
});
