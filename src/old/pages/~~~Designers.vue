<template>
  <div class="wrapper-content wrapper-content--fixed">
  
    <section>
      <div class="container">
	  <h5>Пагинация на основе фильтрации</h5>
	  
        <table>
          <thead>
            <tr>
			  <th>   Фото    </th>
              <th>   Имя     </th>
              <th>   Возраст </th>
              <th>   Гендер  </th>
            </tr>
          </thead>
			
          <tbody>
            <tr 
				v-for="user in usersPagination" 
				:key="user.id"
				>
              <td> <img :src="user.img" alt="Architect "></td>
			  <td> {{ user.name }}</td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>
          </tbody>

        </table>
		
		
		<div>
			<p style="text-align:center;">
			  <span> 
				страничка: {{ this.page.current }}, 
				длина списка: {{ this.page.length }} 
			  </span>
			</p>
			
			<br>
			<br>
		
		  <div class="contaier">
			<div class="button-list">
			  <div class="btn btnPrimary" @click="prevPage"> &#8592; </div>
			  <div class="btn btnPrimary" @click="nextPage"> &#8594; </div>
			</div>
		  </div>
		</div>
		
      </div>
    </section>

	 
    <!-- 
	//Pagination
    <section>
      <div class="contaier">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage"> &#8592; </div>
          <div class="btn btnPrimary" @click="nextPage"> &#8594; </div>
        </div>
      </div>
    </section>
	-->
	
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      users: [],
	  page: {
        current: 1,
        length: 4
      }
    }
  },
  created () {
    axios
      .get('https://gist.githubusercontent.com/zyk0/5aee9c131d501d1fd63f581ae5c8b263/raw/8a9ace6d5a384fc5eac925e3c08f218865020cf0/girl.json')
        .then(response => {
          // console.log(response.data)
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  
  computed: {
    usersPagination () {
		
      return this.users.sort((a, b) => {
        //let modificator = 1
        //if (this.currentSortDir === 'desc') {modificator = -1}
        //if (a[this.currentSort] < b[this.currentSort]) {return -1 * modificator}
        //if (a[this.currentSort] > b[this.currentSort]) {return 1 * modificator}
        //return false
      })
	  .filter((row, index) => {
        let start = (this.page.current-1)*this.page.length
        let end = this.page.current * this.page.length
        if (index >= start && index < end) return true
      })
    }
  },
  
  methods: {
    // Pagination
	prevPage () {
      if (this.page.current > 1) this.page.current-=1
    },
    nextPage () {
      if ((this.page.current * this.page.length) < this.users.length) this.page.current+=1
    }
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
	.button-list {
	  width: 100%;
	  text-align: center;

	  .btn {
		border-radius: 0px;
		margin: 0 20px;
	  }
	}
</style>
