import React, {Component} from 'react';
import './Avatar.css'
import 'tachyons'
import AvatarList from './AvatarList'
const names = [
    {
        id:1,
        name: 'Pramila',
        work: 'Full Stack Java Developer'
    },
    {
        id:2,
        name: 'Ankita',
        skill: 'Java Developer'
    },
    {
        id:3,
        name: 'Pratiksha',
        skill: 'Web Developer'
    },
    {
        id:4,
        name: 'Vandana',
        skill: 'Tester'
    }
]
class Avatar extends Component{

    render(){
        return(
            <div>
            <h1>Welcome To Avatar World!!</h1>
          <AvatarList id='1' name={names[0].name} work={names[0].work}/>
          <AvatarList id='2' name='Ankita' work='Java Backend Developer'/>
          <AvatarList id='3' name='Pratiksha' work='Web Developer'/>
          <AvatarList id='4' name='Vandana' work='Tester'/>
          
        <button >Submit</button>
        </div>
        )
    }
}
export default Avatar