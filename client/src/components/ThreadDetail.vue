<template lang="html">
  <div class="container">
  <h2>{{ getTher.title }}</h2>
    <div class="panel panel-default">
      <div class="panel-heading">author: {{ getTher.user_id.name}}</div>
      <div class="panel-body">{{ getTher.thread }}</div>
    </div>

    <h1>ANSWERS</h1>

      <div class="row">
      <form role="form" class="col-md-9 go-right">
        <div class="form-group">
        <input id="name" name="name" type="text" class="form-control" v-model="dataAnswer.title"  required>
        <label for="name">Title</label>
      </div>
      <div class="form-group">
        <textarea id="message" name="phone" class="form-control"  v-model="dataAnswer.rescontent" required></textarea>
        <label for="message">Answer</label>
      </div>
      </form>
        <button type="submit" name="button" @click="createAnswer()">submit</button>
    </div>
    <div class="container" v-for ='answer in answers'>
    <h2>{{ answer.title }}</h2>
      <div class="panel panel-default">
        <div class="panel-heading">author: {{ answer.user_id.name}}</div>
        <div class="panel-body">{{ answer.rescontent }}</div>
      </div>
      <button type="button" name="button" @click="deleteResponse(answer._id)" >delete</button>
    </div>

    <!-- <form>
      <input type="text" v-model='dataAnswer.title' name="name" placeholder="title">
      <input type="text" v-model='dataAnswer.rescontent' name="name" placeholder="content">
      <button @click='createAnswer()' type="Submit" name="button"></button>
    </form> -->
    <!-- <div  >
      <h1> {{ answer.title}}</h1>
      <h3> {{answer.user_id.name}}</h3>
      <h2> {{ answer.rescontent}}</h2>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      ThreadPost: {
        title: '',
        thread: '',
        user_id: {
          name: ''
        }
      },
      answers: [],
      delans: '',
      getTher: '',
      dataAnswer: {
        title: '',
        rescontent: '',
        threadId: this.id,
        user: localStorage.getItem('user')
      }
    }
  },
  methods: {
    getThreadById (id) {
      axios.get(`http://localhost:3000/api/threads/${id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        // console.log('====>', data)
        this.ThreadPost = data[0]
        this.answers = data
      })
    },
    createAnswer (id) {
      axios.post(`http://localhost:3000/api/threads/reply/${id}`, this.dataAnswer, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        // console.log('ini datanya')
        this.answers.push(data)
        alert('data disimpan')
      })
    },
    findOneThread (id) {
      axios.get(`http://localhost:3000/api/threads/${id}/thread`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        console.log('====> ini hasil', data)
        this.getTher = data
        // this.ThreadPost = data[0]
        // this.answers = data
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteResponse (id) {
      axios.delete(`http://localhost:3000/api/threads/${id}/delres`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        alert('data terhapus')
        this.getThreadById(this.$route.params.id)
      })
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getThreadById(this.$route.params.id)
    this.findOneThread(this.$route.params.id)
    // this.createAnswer(this.id)
  }
}
</script>

<style lang="css">
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,600);

.form-control{
    background: transparent;
}
form {
	width: 320px;
	margin: 20px;
}
form > div {
	position: relative;
	overflow: hidden;
}
form input, form textarea {
	width: 100%;
	border: 2px solid gray;
	background: none;
	position: relative;
	top: 0;
	left: 0;
	z-index: 1;
	padding: 8px 12px;
	outline: 0;
}
form input:valid, form textarea:valid {
	background: white;
}
form input:focus, form textarea:focus {
	border-color: #357EBD;
}
form input:focus + label, form textarea:focus + label {
	background: #357EBD;
	color: white;
	font-size: 70%;
	padding: 1px 6px;
	z-index: 2;
	text-transform: uppercase;
}
form label {
	-webkit-transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right 0.2s, left 0.2s;
	transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right 0.2s, left 0.2s;
	position: absolute;
	color: #999;
	padding: 7px 6px;
	font-weight: normal;
}
form textarea {
	display: block;
	resize: vertical;
}
form.go-bottom input, form.go-bottom textarea {
	padding: 12px 12px 12px 12px;
}
form.go-bottom label {
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
}
form.go-bottom input:focus, form.go-bottom textarea:focus {
	padding: 4px 6px 20px 6px;
}
form.go-bottom input:focus + label, form.go-bottom textarea:focus + label {
	top: 100%;
	margin-top: -16px;
}
form.go-right label {
	border-radius: 0 5px 5px 0;
	height: 100%;
	top: 0;
	right: 100%;
	width: 100%;
	margin-right: -100%;
}
form.go-right input:focus + label, form.go-right textarea:focus + label {
	right: 0;
	margin-right: 0;
	width: 40%;
	padding-top: 5px;
}

a {
  -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
  display: block;
  margin: 20px auto;
  max-width: 180px;
  text-decoration: none;
  border-radius: 4px;
  padding: 20px 30px;
}

a.button {
  color: rgba(30, 22, 54, 0.6);
  box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
}

a.button:hover {
  color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
}
</style>
