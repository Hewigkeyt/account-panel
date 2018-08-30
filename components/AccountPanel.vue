<template>
<div class="wrapper">
  <table class="base-table">
    <tbody>
<!--   Profile picture   -->
      <tr>
        <td><font-awesome :icon="'user-circle'" class="icon"></font-awesome>Profile picture</td>
        <td class="center"><img :src="'https://www.gravatar.com/avatar/' + hash + '?f=y'"></td>
        <td></td>
      </tr>
<!--   Name   -->
      <tr>
        <td><font-awesome :icon="'user'" class="icon"></font-awesome>Full name</td>
        <td v-if="!name_edit">{{full_name}}</td>
        <td v-else>
          <span class="row">
            <span class="cell">Last name:</span>
            <span class="cell"><input class="input" type="text" v-model="new_name.last">
              <transition name="fade">
                <span class="alert" v-if="last_name_alert">Last name shouldn't be empty.</span>
              </transition>
            </span>
          </span>
          <span class="row">
            <span class="cell">First name:</span>
            <span class="cell"><input class="input" type="text" v-model="new_name.first">
              <transition name="fade">
                <span class="alert" v-if="first_name_alert">First name shouldn't be empty.</span>
              </transition>
            </span>
          </span>
        </td>
        <td v-if="!name_edit"><button class="button trans" @click="name_edit = !name_edit">Edit</button></td>
        <td v-else><button class="button trans" @click="cancel_name">Cancel</button><button class="button trans" @click="save_name">Save</button></td>
      </tr>
<!--   Email   -->
      <tr>
        <td><font-awesome :icon="'at'" class="icon"></font-awesome>Email</td>
        <td v-if="!email_edit">{{email}}</td>
        <td v-else>
          <input class="input" type="text" v-model="new_email">
          <transition name="fade">
            <span class="alert" v-if="email_alert">Check the email format.</span>
          </transition>
        </td>
        <td v-if="!email_edit"><button class="button trans" @click="email_edit = !email_edit">Edit</button></td>
        <td v-else><button class="button trans" @click="cancel_email">Cancel</button><button class="button trans" @click="save_email">Save</button></td>
      </tr>
<!--   Password   -->
      <tr>
        <td><font-awesome :icon="'key'" class="icon"></font-awesome>Password</td>
        <td v-if="!pass_edit">********</td>
        <td v-else>
          <div class="password-container">
            <input class="input" :type="password_type" v-model="new_pass">
            <font-awesome :icon="show_pass" class="eye" @click="toggle_pass"></font-awesome>
          </div>
          Password strength is : {{test_pass}}
          <transition name="fade">
            <span class="alert" v-if="pass_alert">Your new password is too weak.</span>
          </transition>
        </td>
        <td v-if="!pass_edit"><button class="button trans" @click="pass_edit = !pass_edit">Edit</button></td>
        <td v-else><button class="button trans" @click="cancel_pass">Cancel</button><button class="button trans" @click="save_pass">Save</button></td>
      </tr>
    </tbody>
  </table>
  <div class="center save-button">
    <transition name="fade">
      <p class="big-alert" v-if="save_changes_alert">You're editing some fields. Please discard or save your changes.<br></p>
    </transition>
    <button class="button trans" v-if="has_changed" @click="save_profile">Save changes</button>
  </div>

  <transition name="fade">
    <div v-if="popup" class="cover-popup" @click="popup = false">
      <div class="contents-popup">
        Your changes have been saved.
      </div>
    </div>
  </transition>
</div>
</template>

<script>
  //module needed to hash the email
  import md5 from 'js-md5'
  //module needed to check the password strength
  import zxcvbn from 'zxcvbn'
  export default {
    name: 'accountPanel',
    data () {
      return {
        email: '',
        name: {
          last: '',
          first: ''
        },
        name_edit: false,
        new_name: {
          last: '',
          first: ''
        },
        last_name_alert: false,
        first_name_alert: false,
        email_edit: false,
        new_email: '',
        email_alert: false,
        pass_edit: false,
        new_pass: '',
        valid_pass: '',
        pass_alert: false,
        password_type: 'password',
        show_pass: 'eye',
        has_changed: false,
        save_changes_alert: false,
        popup: false
      }
    },
    computed: {
      hash: function () {//returns the hashed email
        return md5(this.email)
      },
      full_name: function () {// returns the full name
        return this.name.last + ' ' + this.name.first
      },
      test_pass: function () {// returns the password strength
        let score = zxcvbn(this.new_pass)['score']
        let text = ''
        switch (score) {
          case 1:
            text = 'weak'
            break;
          case 2:
            text = 'average'
            break;
          case 3:
            text = 'strong'
            break;
          case 4:
            text = 'very strong'
          break;
          default:
            text = 'very weak'
            break;
        }
        return text
      }
    },
    methods: {
      cancel_name: function () {//discard the name changes, reset the variables
        this.name_edit = !this.name_edit
        this.new_name.last = this.name.last
        this.new_name.first = this.name.first
        this.last_name_alert = false
        this.first_name_alert = false
      },
      save_name: function () {//save the name changes
        if (!this.new_name.last.length) {//if last name is empty, display error
          this.last_name_alert = true
        }
        if (!this.new_name.first.length) {// if first name is empty, display error
          this.first_name_alert = true
        }
        if (this.new_name.last.length && this.new_name.first.length) {//keep the new name
          this.name.last = this.new_name.last
          this.name.first = this.new_name.first
          this.name_alert = false
          this.name_edit = !this.name_edit
          this.has_changed = true
        }
      },
      cancel_email: function () {//discard email change, reset the variables
        this.email_edit = !this.email_edit
        this.email_alert = false
        this.new_email = this.email
      },
      save_email: function () {//save the email change
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.new_email.match(re)) {//if it's an email, keep it
          this.email = this.new_email
          this.email_alert = false
          this.email_edit = false
          this.has_changed = true
        } else {//display error
          this.email_alert = true
        }
      },
      cancel_pass: function () {//discard password change, reset the variables
        this.pass_edit = !this.pass_edit
        this.pass_alert = false
        this.new_pass = ''
        this.show_pass = 'eye'
        this.password_type = 'password'
      },
      save_pass: function () {//save the password change
        if (this.test_pass != 'weak' && this.test_pass != 'very weak') {//if not too weak, keep it
          this.pass_alert = false
          this.pass_edit = false
          this.show_pass = 'eye'
          this.password_type = 'password'
          this.valid_pass = this.new_pass
          this.new_pass = ''
          this.has_changed = true
        } else {//display error message
          this.pass_alert = true
          this.show_pass = 'eye'
          this.password_type = 'password'
        }
      },
      toggle_pass: function () {//make the password visible
        if (this.show_pass == 'eye') {
          this.show_pass = 'eye-slash'
          this.password_type = 'text'
        } else {
          this.show_pass = 'eye'
          this.password_type = 'password'
        }
      },
      save_profile: function () {//save all the changes into the DB
        if (this.name_edit || this.email_edit || this. pass_edit) {
          this.save_changes_alert = true
        } else {
          this.save_changes_alert = false
          //@todo send new data with API
          this.popup = true
          this.has_changed = false
        }
      }
    },
    mounted () {
      //@todo get data from API
      this.email = 'default@email.com'
      this.new_email = 'default@email.com'
      this.name.last = 'Doe'
      this.new_name.last = 'Doe'
      this.name.first = 'John'
      this.new_name.first = 'John'
    }
  }
</script>

<style scoped>
  .input {
    width: 200px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #000;
    padding: 0 3px;
    margin-bottom: 5px;
  }
  .button {
    border: none;
    border-radius: 4px;
    background-color: dodgerblue;
    padding: 3px 10px;
    color: #fff;
    cursor: pointer;
  }
  .button + .button {
    margin-left: 10px;
  }
  .row {
    display: table-row;
  }
  .cell {
    display: table-cell;
  }
  .cell + .cell {
    padding-left: 5px;
  }
  .base-table td {
    border: 1px solid #000;
    padding: 15px 10px;
  }
  .base-table tr:nth-child(even) td {
    background-color: lightgrey;
  }
  .base-table td:first-child {
    width: 200px;
  }
  .base-table td:last-child {
    width: 180px;
    text-align: center;
  }
  .center {
    text-align: center;
  }
  .save-button {
    margin-top: 10px;
  }
  .password-container {
    position: relative;
    width: 200px;
  }
  .password-container input {
    padding-right: 20px;
    position: relative;
    z-index: 1;
  }
  .password-container .eye {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    z-index: 2;
  }
  .big-alert {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>