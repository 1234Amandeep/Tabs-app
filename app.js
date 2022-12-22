const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');


tabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.classList.add('active');

    const contentIdName = e.currentTarget.dataset.id;
    // console.log(contentIdName)
    const element = document.getElementById(contentIdName);
    // console.log(element)

    element.classList.add('active');

    tabBtns.forEach(index => {
      
      if(index !== btn)
      {
        index.classList.remove('active');
      }

    })
    contents.forEach(content => {
      const desirableContentIdName = e.target.dataset.id;
      const desirableContent = document.getElementById(desirableContentIdName)
      if(desirableContentIdName)
      {
        content.classList.remove('active');
        desirableContent.classList.add('active');
      }
      
    })
  })
})