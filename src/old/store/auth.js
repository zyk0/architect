export default {
	
state: {
  isSubmitting: false
},

mutations: {
  registerStart(state) {
    state.isSubmitting = true
  }
},

actions: {
  register(context) {
    context.commit('registerStart')
    setTimeout(() => {
      context.commit('registerSuccess')
    }, 1000)
  }
},
	
}



