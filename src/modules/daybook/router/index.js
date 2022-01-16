// import DayBookLayout from '@/modules/daybook/layouts/DayBookLayout.vue'

export default {
  name : "daybook-layout",
  component: ()=> import(/* webpackChunkName: "daybook"*/'@/modules/daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: ()=> import( /* webpackChunkName: "daybook-no-entry"*/'@/modules/daybook/views/NoEntrySelected.vue')
    },
    {
      path: ':id',
      name: 'entry',
      component: ()=> import( /* webpackChunkName: "daybook-entry"*/'@/modules/daybook/views/EntryView.vue'),
      props: (route)=>{
        const id = route.params.id
        console.log(id)
        return {id}
      }
    }
  ]
}
