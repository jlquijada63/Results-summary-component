// selections

const sections = document.querySelector('.sections')

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: './assets/images/icon-reaction.svg',
  },
  {
    category: 'Memory',
    score: 92,
    icon: './assets/images/icon-memory.svg',
  },
  {
    category: 'Verbal',
    score: 61,
    icon: './assets/images/icon-verbal.svg',
  },
  {
    category: 'Visual',
    score: 72,
    icon: './assets/images/icon-visual.svg',
  },
]

data.forEach(item => {
  let newElement = document.createElement('section')
  console.log(newElement)
  newElement.classList.add('section')
  newElement.classList.add(item.category.toLowerCase())
  newElement.innerHTML = `<div class="section--title">
            <img
              class="section--title__icon"
              alt="icon"
              src="./assets/images/icon-${item.category.toLowerCase()}.svg"
            />
            <p class="section--title__text">${item.category}</p>
          </div>

          <p class="section--points">${item.score}</p>`
  sections.append(newElement)
})
