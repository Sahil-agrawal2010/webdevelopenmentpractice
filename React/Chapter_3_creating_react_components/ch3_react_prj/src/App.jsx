// import Main_button from "./ButtonComponenet"
// function App(){
//   return (<Main_button></Main_button>)
// }

// export default App




// import Secondary_button from "./ButtonComponenet";
// function App(){
//   return (<Secondary_button></Secondary_button>)
// }

// export default App




// import { Third_button } from "./ButtonComponenet";
// function App(){
//   return (<Third_button></Third_button>)
// }

// export default App

import { Main_button } from "./ButtonComponenet";
import Secondary_button from "./ButtonComponenet";
import { Third_button } from "./ButtonComponenet";
function App(){
  return (
    <div>
      <Main_button></Main_button>
      <Secondary_button></Secondary_button>
      <Third_button></Third_button>
    </div>
  )
}

export default App