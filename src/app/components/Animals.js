import React from 'react';
import axios from 'axios';

var initialAnimalsList = [];

export default class Animals extends React.Component{
    constructor(){
        super();
        this.state = {
            animalsList: initialAnimalsList
        };

        this.searchItem = this.searchItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('/api/animals', {timeout: 1500}).then((response) => {
            initialAnimalsList = response.data;
            this.setState({animalsList: initialAnimalsList});
        }).catch(function(error){
            console.log(error);
        });
    }

    searchItem(event){
        var filteredList = initialAnimalsList.filter((item) => {
            return ~item.animal.toLowerCase().indexOf(event.target.value.toLowerCase());
        });
        this.setState({animalsList: filteredList});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.newItem.value);
        axios.post('/api/animals', {animal: this.newItem.value}).then(response => {
            console.log(response);
            this.componentDidMount();
        }).catch(error => {
            console.log(error)
        });

        this.newItem.value = '';
    }

    render(){
        return (
            <div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="new item" ref={input => this.newItem = input}/>
                    <button>Add item</button>
                </form>
                <input type="text" placeholder="search" onChange={this.searchItem} />
                <ul>
                    {this.state.animalsList.map((item, index) => (<li key={index}>{item.animal}</li>))}
                </ul>
            </div>
        );
    }
}
