module.exports = {
  title: "网络原理",
  themeConfig: {
    nav: [
      { text: "网络模型", link: "/network/model/" },
      { text: "应用层", link: "/network/application/" },
      { text: "传输层", link: "/network/transport/" },
      // { text: "网络层", link: "/network/network/" },
    ],
    sidebar: {
      // "/network/model/": [["./", "网络模型"]],
      "/network/application/": [
        ["HTTP", "HTTP"],
        ["DNS", "DNS"],
      ],
      "/network/transport/": [
        ["TCP", "TCP"],
        ["UDP", "UDP"],
      ],
    },
  },
};
