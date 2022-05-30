// ye high order component ka examle hai yaha three  component hai ek component ke ander as a dusre component ko as a 
// props pass ki aur yaha aur ek component ko return kiya.

// defination:- In high order component we can pass inside an component
// and as a return a one component .


import React,{Component} from "react";
class App extends Component{
    render(){
        return(
            <div>
                <h1>High order Component</h1>
                <Hoc Cmp={Simple}/>
            </div>
        )        
    }
}
function Hoc(p){
    const Cmp=p.Cmp
    return<h1> <Cmp hocData={20}/> </h1>
}

function Simple(p){
    return<h1>Simple Component with.. {10+p.hocData}</h1>
}

export default App;