<template lang="html">
  <div class="">
    <!-- <div v-for="thr in thread ">
      <h1>{{ thr.thread }}</h1>
      <h2></h2>
      </div> -->

      <postThread></postThread>
      <!-- <div v-for="thr in thread ">
        <h1>{{ thr.title }}</h1>
        <h2>{{ thr.user_id.name}}</h2>
        <h3>{{ thr.thread }}</h3>
        </div> -->
        <div class="container">
          <div v-for="thr in thread ">
          <router-link :to="'/thread/' + thr._id"><h2>{{ thr.title }}</h2></router-link>
          <div class="panel panel-default">
            <div class="panel-heading">author: {{ thr.user_id.name}}</div>
            <div class="panel-body">{{ thr.thread }}</div>
          </div>
          <button type="button" name="button" @click="deleteThread(thr._id)" >delete</button>
          </div>
        </div>

</div>
        <!--
      <h1>{{ thread[4].user_id.name }}</h1>
      <h2>{{ thread[4].thread }}</h2> -->
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import postThread from '@/components/postThread'
export default {
  data () {
    return {}
  },
  computed: {
    thread () {
      return this.$store.state.thread
    }
  },
  methods: {
    ...mapActions([
      'AllThread'
    ]),
    deleteThread (id) {
      axios.delete(`http://localhost:3000/api/threads/${id}/delthr`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        alert('data terhapus')
        this.AllThread()
      })
      .catch(err => console.log(err))
    }
  },
  mounted () {
    this.AllThread()
  },
  components: {
    postThread
  }
}
</script>

<style lang="css">
</style>
