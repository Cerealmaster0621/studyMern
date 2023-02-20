import {Component} from 'react';

class CardList extends Component {
    render() { //render() function return 할때 parent level 의 return되는 div 는 한개만 존재할수 있음.
        //app.js 에서 key 로 pass 된 variables 가 this.props에 저장됨.
        console.log(this.props);
        const {names} = this.props;
        return (<div>
            {names.map((m)=>{
                return <div key={m.id}>
                <h1>{m.name}</h1>
            </div>;
        })}
        </div>)
    }
}

export default CardList;