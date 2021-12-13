import {list1} from './Lists.scss';
import List from "../list/List";

function Lists({listNumber, cardNumber}) {


    const maxNumber = 50;
    const getLists = function(){
        let lists = [];
        
        if(listNumber > maxNumber)
            listNumber = maxNumber;
        for(let i=0; i<listNumber ; i++ ){
            lists.push(<List key={i} cardNumber={cardNumber}/>)
        }
        return lists;
    }
  return (
      <div className="lists-container" >
            {getLists()}
      </div>
  );
}

export default Lists;
