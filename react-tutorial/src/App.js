import React, { Component } from "react";
import Table from './Table'

class App extends Component {
    state = {
      characters: [
        {
            name: 'John Fakudze',
            job: 'Chief Cybersecurity Officer',
        },
        {
            name: 'Gugulethu Madolo',
            job: 'Developer',
        },
        {
            name: 'Richard MacMahon, Jr',
            job: 'HR Manager',
        },
        {
            name: 'Sanele Bhembe',
            job: 'Chief Financial Officer',
        },
      ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
      }
    
      render() {
        const { characters } = this.state
        
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
      } 
    
  }


export default App