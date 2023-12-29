import './App.css';
import React from 'react'



class FilmItemRow extends React.Component{
  render(){
    return(
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}


class Starwars extends React.Component{ 
  constructor(){
    super()
    this.state = {
      loadingCharater: false,
      name : null,
      heigth : null,
      homeworld : null,
      films : [], 
    }
  }


   getNewCharacters(){
    console.log("new charates")
    const randomNumber = Math.round(Math.random() * 83)
    const  url = `https://swapi.dev/api/people/${randomNumber}/` 
    fetch(url)
      .then(Response => Response.json())
      .then(data => {
        this.setState({
          name : data.name,
          height : data.height,
          homeworld : data.homeworld,
          films : data.films,
          loadingCharater : true,

        })
      })
   }
  render(){
    
    const movies = this.state.films.map((film,i)=>{
      return <FilmItemRow key={i} url={film} />
    })

    return(
      <div>
        {this.state.loadingCharater  &&
          <div>
            <h1>Charater Name : {this.state.name}</h1>
            <p>Height : {this.state.height} cm</p>
            <p><a href={this.state.homeworld}>HomeWorld : {this.state.homeworld}  </a> </p>
            <ul>
             Movies {movies}
            </ul>
          </div>
        
        }
        <button type='button' className="btn" onClick={()=> this.getNewCharacters()}>Randomies character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Starwars />
      </header>
    </div>
  );
}

export default App;
