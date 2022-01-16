// export default () => ({
// })
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), //123454678
      date: new Date().toDateString(), // sat 23, Julyt
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta labore harum exercitationem cupiditate, assumenda aperiam',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000, //123454678
      date: new Date().toDateString(), // sat 23, Julyt
      text : 'Aperiam sunt expedita nisi rerum deserunt error repellat neque pariatur iste nam impedit, iure dolorem, fugit aspernatur',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000, //123454678
      date: new Date().toDateString(), // sat 23, Julyt
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta labore harum exercitationem cupiditate, assumenda aperiam',
      picture: null,
    },
  ]
})
