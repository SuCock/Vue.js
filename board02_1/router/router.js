import main from "../components/main.js";
import myBoardList from "../components/myBoardList.js";
import myBoardRead from "../components/myBoardRead.js";
import myBoardWrite from "../components/myBoardWrite.js";

export default new VueRouter({
  // hash -> # + 경로 (server로 요청을 보내지 않고 페이지 이동)
  // url # 뒤에 있는 내용을 읽을 수가 없다.
  // history -> #을 제외하고 SPA 구현하기 위한 모드
  // mode default 값 : hash
  mode: "hash",
  router: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    // boardLIst
    {
      path: "/boardLIst",
      name: "boardLIst",
      component: myBoardList,
    },
    // boardRead
    {
      path: "/boardRead/:item",
      name: "boardRead",
      component: myBoardRead,
      props: true, // 자식이 쓰는것을 허용.
    },
    // boardWrite
    {
      path: "/boardWrite",
      name: "boardWrite",
      component: myBoardWrite,
    },
  ],
});
