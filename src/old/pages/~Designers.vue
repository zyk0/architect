<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
	  
	  <h5>Axios</h5>
	  
        <table> 
          <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Гендер</th>
            </tr>
          </thead>

          <!-- body вывод на экран, если пол юзера - женский-->
          <tbody>
            <tr 
			  v-for="user in users" 
			  :key="user.id"
			  v-if="user.gender === 'female' ">
              <td>
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>	
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
		users: []
		//,error: null
    }
  },
  // загружаем json'а с github, когда компонент создался
  created () {
    axios
      .get('https://gist.githubusercontent.com/zyk0/5aee9c131d501d1fd63f581ae5c8b263/raw/8a9ace6d5a384fc5eac925e3c08f218865020cf0/girl.json')
        .then(response => {
          //console.log('response.data.length: ', response.data.length) //>>10
		  console.log('response: ', response.data) //>>
		  //console.log('response.data[7]: ', response.data[7].name + ' ' 
		  //+ response.data[7].age) //>> :  Irma 26
          //console.log('response.status: ', response.status) //>>200
		  
		  this.users = response.data
		  //this.users = response.data.slice(0, 5)
          console.log('this.users.length: ',  this.users.length) //>>5
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 60px;
  height: auto;
  border-radius: 0%;
  margin-right: 16px;
}
</style>