/*import React,{Component} from "react";
import FallBackUI from './FallbackUI';
import Parent from './Parent';

export class ErrorBoundry extends Component{
state={
    hasError:false
}
static getDerivedstateError(error){
        console.log("getDerivedStateFromError")
        return (hasError:true)
}
componentDidCatch(error,Info){
    console.log(error);
    console.log(Info);
}
render(){
    if(this.statehasError){
        return(<FallBackUI/>)
    }
    else{
        return(<Parent/>)
    }
}
}
*/