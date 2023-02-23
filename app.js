const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  const personName = document.getElementById("person-name")
  const personImg = document.getElementById("person-image")
  const personJob = document.getElementById("person-job")
  const personDesc = document.getElementById("person-desc")

  const leftBtn = document.querySelector(".left-button")
  const rightBtn = document.querySelector(".right-button")
  const randomBtn = document.querySelector("#random")

  let currentImage = 0;
  window.addEventListener("DOMContentLoaded", addMember() )

  function addMember() {
    const item = reviews[currentImage];
    personImg.src = item.img
    personName.textContent = item.name
    personJob.textContent = item.job
    personDesc.textContent = item.text
    
  }

  rightBtn.addEventListener("click", nextUser)
  function nextUser () {
    currentImage++
    if(currentImage > reviews.length-1) {
        currentImage = 0
    }
    addMember(currentImage)
  }

  leftBtn.addEventListener("click", prevUser)
  function prevUser() {
    currentImage--
    if(currentImage <0) {
        currentImage = reviews.length-1
    }
    addMember(currentImage)

  }

  randomBtn.addEventListener("click", randomUser)

  function randomUser() {
    currentImage = Math.floor(Math.random() *reviews.length)
    addMember(currentImage)
  }
  
  