<template>
  <div>
    <button type="button" @click="getData">데이터 출력</button>
    <table>
      <thead>
        <tr>
          <th>축제이름</th>
          <th>주소</th>
          <th>홈페이지</th>
          <th>사진</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.idx" v-for="item in gimhaeArray">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>
            <a :href="item.homepage">{{ item.homepage }}</a>
          </td>
          <td><img :src="item.images[0]" style="width: 100px" /></td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gimhaeArray: {},
    };
  },
  methods: {
    getData() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.gimhae.go.kr/openapi/tour/tourinfo.do"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.gimhaeArray = data.results;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
