const pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h3', {}, props.breed),
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(pet, {
      animal: 'Dog',
      name: 'Luna',
      breed: 'Havanese',
    }),
    React.createElement(pet, {
      animal: 'Bird',
      name: 'Pepper',
      breed: 'Cockatiel',
    }),
    React.createElement(pet, {
      animal: 'Cat',
      name: 'Doink',
      breed: 'Mixed',
    }),
  ])
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
