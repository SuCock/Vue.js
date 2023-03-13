export default {
  template: `<div>
                            <table id="list">
                                <tr>
                                    <td style="width:50px;">글제목</td>
                                    <td>{{ object.title }}</td>
                                </tr>
                                <tr style="height:300px;">
                                    <td colspan="2">{{ object.content }}</td>
                                </tr>
                            </table>
                            <router-link tag="button" style="float:right;" v-bind:to="{name : 'boardList'}">목록</router-link>
                        </div>`,
  // router.js의 boardRead의 item
  // item = myBoardList의 템플릿의 object배열
  props: ["item"],
};
