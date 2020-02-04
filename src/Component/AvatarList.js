import React,{Component} from 'react'
import './Avatar.css'

class AvatarList extends Component{
    
    render(){
        return(
            <div className='avatarstyle ma4 bg-light-purple dib pa4 tc'>
                <img src={`https://joeschmoe.io/api/v1/random${this.props.name}`}alt='Avatar'></img>
                <h1 className=''>{this.props.name}</h1>
                <p>{this.props.work}</p>
                        </div>
                   )
    }
}
export default AvatarList