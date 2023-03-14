<template>
  <div>
    <h1>수도권 미세먼지 농도</h1>
    <button type="button" @click="dustData">데이터 출력</button>
    <table>
      <thead>
        <tr>
          <th>지역</th>
          <th>미세먼지 농도/대기질</th>
          <th>초 미세먼지 농도/대기질</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.idx" v-for="item in seoulArray">
          <td>
            {{ item.MSRSTE_NM }}
          </td>
          <td>{{ item.PM10 }} / {{ item.PM10 <= 100 ? "좋음" : "나쁨" }}</td>
          <td>{{ item.PM25 }} / {{ item.PM25 <= 35 ? "좋음" : "나쁨" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seoulArray: {},
    };
  },
  methods: {
    dustData() {
      fetch(
        "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.RealtimeCityAir.row);
          this.seoulArray = data.RealtimeCityAir.row;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
